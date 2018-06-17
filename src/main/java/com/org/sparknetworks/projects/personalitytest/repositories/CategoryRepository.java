package com.org.sparknetworks.projects.personalitytest.repositories;

import com.org.sparknetworks.projects.personalitytest.documents.Category;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * MongoRepository to fetch all categories from Mongo DB.
 *
 * @author Rahul Deshmukh
 * @version 1.0
 * @since 17.06, 2018
 */
public interface CategoryRepository extends MongoRepository<Category, String>{
}
