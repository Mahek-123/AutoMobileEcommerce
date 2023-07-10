package com.example.AuthApp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.CONFLICT, reason = "User with this email is not registered")
public class AuthenticationException extends Exception{
}
