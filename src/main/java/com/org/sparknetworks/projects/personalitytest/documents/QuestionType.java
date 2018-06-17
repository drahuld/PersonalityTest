package com.org.sparknetworks.projects.personalitytest.documents;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * This is POJO class which holds the Question Type and its options from mongo db.
 *
 * @author Rahul Deshmukh
 * @version 1.0
 * @since 17.06, 2018
 */
@Document(collection = "question_type")
public class QuestionType {

    /**
     * Holds unique id for question type.
     */
    @Id
    private String id;

    /**
     * Holds question type data
     */
    private String type;

    /**
     * Holds question option array.
     */
    private String[] options;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String[] getOptions() {
        return options;
    }

    public void setOptions(String[] options) {
        this.options = options;
    }
}
