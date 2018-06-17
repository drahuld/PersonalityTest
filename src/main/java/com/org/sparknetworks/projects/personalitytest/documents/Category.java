package com.org.sparknetworks.projects.personalitytest.documents;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

/**
 * This is pojo class which hold the Category document from mongo db.
 *
 * @author Rahul Deshmukh
 * @version 1.0
 * @since 17.06, 2018
 */
@Document
public class Category {

    /**
     * This holds unique id of category document.
     */
    @Id
    private String id;

    /**
     * This holds Category name.
     */
    private String categoryName;

    /**
     * This holds all the questions related to particular category.
     */
    private List<Questions> listOfQuestions;

    /**
     * Constructor for Category Document.
     *
     * @param id
     * @param categoryName
     */
    public Category(String id, String categoryName) {
        this.id = id;
        this.categoryName = categoryName;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public List<Questions> getListOfQuestions() {
        return listOfQuestions;
    }

    public void setListOfQuestions(List<Questions> listOfQuestions) {
        this.listOfQuestions = listOfQuestions;
    }
}
