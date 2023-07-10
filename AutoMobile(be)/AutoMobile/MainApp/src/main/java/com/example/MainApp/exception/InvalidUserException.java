package com.example.MainApp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.CONFLICT, reason="Cannot find User with this email")
public class InvalidUserException extends Exception{
}
