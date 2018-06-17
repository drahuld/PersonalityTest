package com.org.sparknetworks.projects.personalitytest.documents;

import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Document POJO which holds selected answers submitted by user.
 *
 * @author Rahul Deshmukh
 * @version 1.0
 * @since 17.06, 2018
 */
@Document
public class UserAnswers {

    /**
     * Holds user name who has submitted answers.
     */
    private String userName;

    /**
     * Holds questionId which question is submitted.
     */
    private String questionId;

    /**
     * Holds selected question answer (radio button value)
     */
    private String selectedValue;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getQuestionId() {
        return questionId;
    }

    public void setQuestionId(String questionId) {
        this.questionId = questionId;
    }

    public String getSelectedValue() {
        return selectedValue;
    }

    public void setSelectedValue(String selectedValue) {
        this.selectedValue = selectedValue;
    }

}
