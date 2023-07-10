package com.example.AuthApp.service;

import com.example.AuthApp.domain.User;
import com.example.AuthApp.exception.AuthenticationException;
import com.example.AuthApp.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService {

    IUserRepository iUserRepository;

    @Autowired
    public UserService(IUserRepository iUserRepository) {
        this.iUserRepository = iUserRepository;
    }

    @Override
    public User registerCustomer(User user) {
        return iUserRepository.save(user);
    }

    @Override
    public User loginCustomer(User user) throws AuthenticationException {
        if (iUserRepository.findById(user.getEmail()).isEmpty()) {
            throw new AuthenticationException();
        } else {
            return iUserRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
        }
    }

}
