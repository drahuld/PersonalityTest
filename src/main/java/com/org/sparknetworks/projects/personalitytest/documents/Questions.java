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
public class Questions {

    /**
     * Hold unique id for Question
     */
    @Id
    private String id;

    /**
     * Holds questions data
     */
    private String question;

    /**
     * Holds category data
     */
    private String category;

    /**
     * Holds question type data.
     */
    @Field("question_type")
    @DBRef(db="question_type")
    private QuestionType questionType;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public QuestionType getQuestionType() {
        return questionType;
    }

    public void setQuestionType(QuestionType questionType) {
        this.questionType = questionType;
    }
}
