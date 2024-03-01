package com.sample.currencies.conversion;

import com.sample.currencies.app.Currency;
import com.sample.currencies.app.CurrencyRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.MathContext;
import java.math.RoundingMode;
import java.util.Optional;

@Service
public class ConversionService {

    private final CurrencyRepository currencyRepository;

    public ConversionService(CurrencyRepository currencyRepository) {
        this.currencyRepository = currencyRepository;
    }

    /**
     * Convert given amount to a specified currency
     * @param amount money amount
     * @param currencyId currency ID
     * @return converted amount
     */
    public BigDecimal convertAmount(BigDecimal amount, Long currencyId) {
        Currency currency = currencyRepository.findById(currencyId).orElseThrow();
        var mc = new MathContext(2, RoundingMode.HALF_EVEN);
        return amount.divide(currency.getConversionRate(), mc);
    }

    /**
     * Load currency by its code.
     */
    public Optional<Currency> findByCode(String isoCode) {
        return currencyRepository.findByIsoCode(isoCode);
    }
}
