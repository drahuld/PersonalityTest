package com.org.sparknetworks.projects.personalitytest.repositories;

import com.org.sparknetworks.projects.personalitytest.documents.Questions;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

/**
 * MongoRepository to fetch all questions from Mongo DB.
 *
 * @author Rahul Deshmukh
 * @version 1.0
 * @since 17.06, 2018
 */
public interface QuestionsRepository extends MongoRepository<Questions, String> {

    /**
     * Mongo query method to get all questions associated with input category name.
     *
     * @param category
     * @return List<Questions>
     */
    List<Questions> findQuestionsByCategory(String category);
}
