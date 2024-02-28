package com.sample.currencies;

import com.amplicode.core.CoreConfiguration;
import org.springframework.boot.autoconfigure.AutoConfigurationPackage;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@AutoConfigurationPackage(basePackageClasses = CurrenciesConfiguration.class)
@EnableAutoConfiguration
@Import({CoreConfiguration.class, CurrenciesConfiguration.class})
public class CurrenciesTestConfiguration {

}
