package com.example.AuthApp.service;

import com.example.AuthApp.domain.User;

import java.util.Map;

public interface IGenerateToken {
    Map<String, String> generateToken(User user);
}
