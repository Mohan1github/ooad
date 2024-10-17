package com.ooad.springserver.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ooad.springserver.models.Springorders;

public interface SpringOrdersRepo extends MongoRepository<Springorders , String> {

}


