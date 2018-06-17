package com.org.sparknetworks.projects.personalitytest.controller;

import com.org.sparknetworks.projects.personalitytest.documents.Category;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Rest controller for Personality Test.
 * <p>
 * This controller exposed all rest urls for application. ReactJS call these method using fetch api to communicate with server side.
 *
 * @author Rahul Deshmukh
 * @version 1.0
 * @since 17.06, 2018
 */
@RestController
@RequestMapping("/rest/")
public class PersonalityTestRestController {

    @GetMapping("/categories/questions")
    public List<Category> getAllCategoriesWithQuestions(){

        return null;
    }
}
