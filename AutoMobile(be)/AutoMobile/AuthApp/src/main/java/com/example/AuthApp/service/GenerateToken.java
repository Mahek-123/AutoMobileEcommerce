package com.example.AuthApp.service;

import com.example.AuthApp.domain.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class GenerateToken implements IGenerateToken{
    @Override
    public Map<String, String> generateToken(User user) {
        Map<String, String> tokenMessage = new HashMap<>();
        Map<String, Object> userData = new HashMap<>();

        userData.put("Email", user.getEmail());
        userData.put("Role",user.getRole());

        String token = Jwts.builder().setClaims(userData).setIssuedAt(new Date()).signWith(SignatureAlgorithm.HS512, "SecretUserKey").compact();

        tokenMessage.put("Token", token);
        tokenMessage.put("Message", "Successfully Logged In");
        System.out.println(tokenMessage.get("Token"));
        System.out.println("this is tokennnnn");
        return tokenMessage;
    }
}
