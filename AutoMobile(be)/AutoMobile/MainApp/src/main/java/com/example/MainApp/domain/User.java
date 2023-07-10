package com.example.MainApp.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Data
@Document
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    String email;
    String firstname;
    String mobile;
    String password;
    String role;
    List<Vehicle> myCart = new ArrayList<>();
}
