package com.sample.currencies.graphql;

import com.amplicode.core.graphql.annotation.GraphQLId;
import com.amplicode.core.graphql.paging.OffsetPageInput;
import com.amplicode.core.graphql.paging.ResultPage;
import com.sample.currencies.app.Currency;
import com.sample.currencies.app.CurrencyRepository;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Controller
public class CurrencyController {
    private final CurrencyRepository crudRepository;

    public CurrencyController(CurrencyRepository crudRepository) {
        this.crudRepository = crudRepository;
    }

    @MutationMapping(name = "deleteCurrency")
    @Transactional
    public void delete(@GraphQLId @Argument @NonNull Long id) {
        Currency entity = crudRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Unable to find entity by id: %s ", id)));

        crudRepository.delete(entity);
    }

    @QueryMapping(name = "currencyList")
    @Transactional(readOnly = true)
    @NonNull
    public ResultPage<Currency> findAll(@Argument("page") OffsetPageInput pageInput) {
        Pageable page = Optional.ofNullable(pageInput)
                .map(p -> PageRequest.of(p.getNumber(), p.getSize()))
                .orElseGet(() -> PageRequest.ofSize(20));
        Page<Currency> pageData = crudRepository.findAll(page);
        return ResultPage.page(pageData.getContent(), pageData.getTotalElements());
    }

    @QueryMapping(name = "currency")
    @Transactional(readOnly = true)
    @NonNull
    public Currency findById(@GraphQLId @Argument @NonNull Long id) {
        return crudRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Unable to find entity by id: %s ", id)));
    }

    @MutationMapping(name = "updateCurrency")
    @Transactional
    @NonNull
    public Currency update(@Argument @NonNull @Valid Currency input) {
        if (input.getId() != null) {
            if (!crudRepository.existsById(input.getId())) {
                throw new RuntimeException(
                        String.format("Unable to find entity by id: %s ", input.getId()));
            }
        }
        return crudRepository.save(input);
    }
}