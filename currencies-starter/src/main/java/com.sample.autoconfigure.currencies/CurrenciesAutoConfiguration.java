package com.sample.autoconfigure.currencies;

import com.sample.currencies.CurrenciesConfiguration;
import org.springframework.boot.autoconfigure.AutoConfigurationPackage;
import org.springframework.boot.autoconfigure.AutoConfigureBefore;
import org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.context.annotation.Import;

@AutoConfiguration
@Import({CurrenciesConfiguration.class})
@AutoConfigurationPackage(basePackageClasses = CurrenciesConfiguration.class)
@AutoConfigureBefore(JpaRepositoriesAutoConfiguration.class)
public class CurrenciesAutoConfiguration {
}
