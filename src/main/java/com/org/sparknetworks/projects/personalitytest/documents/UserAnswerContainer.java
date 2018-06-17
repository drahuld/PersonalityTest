package com.org.sparknetworks.projects.personalitytest.documents;

/**
 * This is container class POJO to hold map submitted JSON data by user.
 *
 * User submit data in JSON form and this container map it holds JSON in array.
 *
 * @author Rahul Deshmukh
 * @version 1.0
 * @since 17.06, 2018
 */
public class UserAnswerContainer {

    /**
     * Holds submitted answers by user
     */
    private UserAnswers[] userAnswersArray;

    public UserAnswers[] getUserAnswersArray() {
        return userAnswersArray;
    }

    public void setUserAnswersArray(UserAnswers[] userAnswersArray) {
        this.userAnswersArray = userAnswersArray;
    }
}
