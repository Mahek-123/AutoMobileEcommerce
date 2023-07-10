package com.example.AuthApp.service;

import com.example.AuthApp.domain.User;
import com.example.AuthApp.exception.AuthenticationException;

public interface IUserService {

   User registerCustomer(User user);

   User loginCustomer(User user) throws AuthenticationException;
}
