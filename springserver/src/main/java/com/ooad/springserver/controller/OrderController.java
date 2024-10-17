package com.ooad.springserver.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ooad.springserver.models.Springorders;
import com.ooad.springserver.repository.SpringOrdersRepo;

@RestController
public class OrderController {

    @Autowired
    SpringOrdersRepo springOrdersRepo;

    @PostMapping("/createOrders")
    public void addOrder(@RequestBody Springorders springorders){
        springOrdersRepo.save(springorders);

    }


}
