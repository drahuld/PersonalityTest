package com.org.sparknetworks.projects.personalitytest.documents;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 * This is POJO class which hold the Question document from mongo db.
 *
 * @author Rahul Deshmukh
 * @version 1.0
 * @since 17.06, 2018
 */
@Document
public class Question {

    @Id
    private String id;

    private String question;

    private String category;

    @Field("question_type")
    @DBRef(db="question_type")
    private QuestionType questionType;
}
