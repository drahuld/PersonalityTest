package com.org.sparknetworks.projects.personalitytest.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

/**
 * Mongo DB configuration and enabling mongo repositories.
 *
 * @author Rahul Deshmukh
 * @version 1.0
 * @since 17.06, 2018
 */
@EnableMongoRepositories(basePackages = "com.org.sparknetworks.projects.personalitytest")
@Configuration
public class MongoDBConfig {
}
