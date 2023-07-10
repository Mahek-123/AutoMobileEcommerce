package com.example.MainApp.service;

import com.example.MainApp.domain.User;
import com.example.MainApp.domain.Vehicle;
import com.example.MainApp.exception.InvalidUserException;

import java.util.List;

public interface IMainService {

    User registerUser(User user);

    User getUserDetails(String email) throws InvalidUserException;

    List<Vehicle> addToCart(Vehicle vehicle,String email);

    List<Vehicle> adminAllVehicles();

    List<Vehicle> adminAddVehicle (Vehicle vehicle);

    boolean deleteProduct(String productId,String email);

    Vehicle updateProductDetails(Vehicle vehicle);

    Vehicle getProduct(String productId);
}
