package com.example.AuthApp.controller;

import com.example.AuthApp.domain.User;
import com.example.AuthApp.domain.UserDTO;
import com.example.AuthApp.exception.AuthenticationException;
import com.example.AuthApp.service.IGenerateToken;
import com.example.AuthApp.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/user")
public class UserController {

    IUserService iUserService;

    @Autowired
    IGenerateToken iGenerateToken;

    @Autowired
    public UserController(IUserService iUserService) {
        this.iUserService = iUserService;
    }

    // http://localhost:8090/api/v1/user/register
    @PostMapping("/register")
    public ResponseEntity<?> registerCustomer(@RequestBody UserDTO user) {
        User user1 = new User(user.getEmail(), user.getPassword(), user.getRole());
        return new ResponseEntity<>(iUserService.registerCustomer(user1), HttpStatus.CREATED);
    }

    // http://localhost:8090/api/v1/user/login
    @PostMapping("/login")
    public ResponseEntity<?> loginCustomer(@RequestBody User user) throws AuthenticationException {
        User userExists = iUserService.loginCustomer(user);
        if (userExists != null) {
            return new ResponseEntity<>(iGenerateToken.generateToken(user), HttpStatus.OK);
        } else {
            throw new AuthenticationException();
        }
    }
}

