package com.org.sparknetworks.projects.personalitytest.repositories;

import com.org.sparknetworks.projects.personalitytest.documents.UserAnswers;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * MongoRepository to save selected answers to MongoDB.
 *
 * @author Rahul Deshmukh
 * @version 1.0
 * @since 17.06, 2018
 */
public interface UserAnswersRepository extends MongoRepository<UserAnswers, String> {
}

