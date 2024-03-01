package com.sample.currencies.app;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface CurrencyRepository extends JpaRepository<Currency, Long>, JpaSpecificationExecutor<Currency> {
    @Query("select c from Currency c where c.isoCode = ?1")
    Optional<Currency> findByIsoCode(String isoCode);


}