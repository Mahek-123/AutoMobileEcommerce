package com.example.MainApp.service;

import com.example.MainApp.domain.User;
import com.example.MainApp.domain.UserDTO;
import com.example.MainApp.domain.Vehicle;
import com.example.MainApp.exception.InvalidUserException;
import com.example.MainApp.proxy.UserProxy;
import com.example.MainApp.repository.IMainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MainService implements IMainService {
    IMainRepository iMainRepository;

    @Autowired
    UserProxy userProxy;

    @Autowired
    public MainService(IMainRepository iMainRepository) {
        this.iMainRepository = iMainRepository;
    }

    @Override
    public User registerUser(User user) {
        if (user.getEmail().equalsIgnoreCase("admin@123.com")) {
            user.setRole("admin");
        } else {
            user.setRole("user");
        }
        UserDTO userDTO = new UserDTO(user.getEmail(), user.getPassword(), user.getRole());
        userProxy.registerCustomer(userDTO);
        return iMainRepository.insert(user);
    }

    @Override
    public User getUserDetails(String email) throws InvalidUserException {
        if (iMainRepository.findById(email).isEmpty()) {
            throw new InvalidUserException();
        } else {
            User user = iMainRepository.findById(email).get();
            System.out.println(user);
            return user;
        }
    }

    @Override
    public List<Vehicle> addToCart(Vehicle vehicle, String email) {
        User loggedUser = iMainRepository.findById(email).get();
        loggedUser.getMyCart().add(vehicle);
        iMainRepository.save(loggedUser);
        return loggedUser.getMyCart();
    }

    @Override
    public List<Vehicle> adminAllVehicles() {
        User allVehicles = iMainRepository.findById("admin@123.com").get();
        return allVehicles.getMyCart();
    }

    @Override
    public List<Vehicle> adminAddVehicle(Vehicle vehicle) {
        User admin = iMainRepository.findById("admin@123.com").get();
        vehicle.setProductId(Integer.toString(admin.getMyCart().size()+1));
        admin.getMyCart().add(vehicle);
        iMainRepository.save(admin);
        System.out.println("New Product Added");
        return admin.getMyCart();
    }

    @Override
    public Vehicle updateProductDetails(Vehicle vehicle) {
        User admin = iMainRepository.findById("admin@123.com").get();
        List<Vehicle> myCart = admin.getMyCart();
        for (Vehicle a : myCart) {
            if (a.getProductId().equals(vehicle.getProductId())) {
                admin.getMyCart().remove(a);
                admin.getMyCart().add(vehicle);
                iMainRepository.save(admin);
                break;
            }
        }
        return vehicle;
    }

    @Override
    public boolean deleteProduct(String productId,String email) {
        User user = iMainRepository.findById(email).get();
        System.out.println("deleting"+productId);
        List<Vehicle> products = user.getMyCart().stream().filter(obj->!obj.getProductId().equals(productId)).collect(Collectors.toList());
        user.setMyCart(products);
        iMainRepository.save(user);
        return true;
    }

    @Override
    public Vehicle getProduct(String productId) {
        User admin = iMainRepository.findById("admin@123.com").get();
        List<Vehicle> products = admin.getMyCart();
        List<Vehicle> vehicle = products.stream().filter(product -> product.getProductId().equals(productId)).toList();
        return vehicle.get(0);
    }

}
