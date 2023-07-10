package com.example.MainApp.repository;

import com.example.MainApp.domain.User;
import com.example.MainApp.domain.Vehicle;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IMainRepository extends MongoRepository<User,String> {

}
