package com.example.MainApp.controller;

import com.example.MainApp.domain.User;
import com.example.MainApp.domain.Vehicle;
import com.example.MainApp.exception.InvalidUserException;
import com.example.MainApp.service.IMainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("api/v1/main")
public class MainController {

    IMainService iMainService;

    @Autowired
    public MainController(IMainService iMainService) {
        this.iMainService = iMainService;
    }

    // http://localhost:8091/api/v1/main/register
    @PostMapping("/register")
    ResponseEntity<?> registerUser(@RequestBody User user) {
        return new ResponseEntity<>(iMainService.registerUser(user), HttpStatus.CREATED);
    }

    // http://localhost:8091/api/v1/main/getUserDetails
    @GetMapping("/getUserDetails")
    ResponseEntity<?> getUserDetails(HttpServletRequest httpServletRequest) throws InvalidUserException {
        String email = (String) httpServletRequest.getAttribute("Email");
        if (email.isEmpty()) {
            throw new InvalidUserException();
        } else {
            return new ResponseEntity<>(iMainService.getUserDetails(email), HttpStatus.OK);
        }
    }

    // http://localhost:8091/api/v1/main/addToCart
    @PostMapping("/addToCart")
    ResponseEntity<?> addToCart( @RequestBody Vehicle vehicle,HttpServletRequest httpServletRequest) {
        String email = (String) httpServletRequest.getAttribute("Email");
        System.out.println(email);
        System.out.println("add to cart "+vehicle.getName());
        return new ResponseEntity<>(iMainService.addToCart(vehicle, email), HttpStatus.OK);
    }

    // http://localhost:8091/api/v1/main/admin-getAll
    @GetMapping("/admin-getAll")
    ResponseEntity<?> adminAllVehicles() {
        System.out.println("Admin get all");
        return new ResponseEntity<>(iMainService.adminAllVehicles(), HttpStatus.OK);
    }


    // http://localhost:8091/api/v1/main/admin-add
    @PostMapping("/admin-add")
    ResponseEntity<?> adminAddVehicles(@RequestBody Vehicle vehicle) {
        return new ResponseEntity<>(iMainService.adminAddVehicle(vehicle), HttpStatus.OK);
    }

    // http://localhost:8091/api/v1/main/delete/{productId}
    @DeleteMapping("/delete/{productId}")
    ResponseEntity<?> delete (@PathVariable String productId, HttpServletRequest httpServletRequest){
        String email = (String) httpServletRequest.getAttribute("Email");
        return new ResponseEntity<>(iMainService.deleteProduct(productId,email),HttpStatus.OK);
    }

    // http://localhost:8091/api/v1/main/updateProduct
    @PutMapping("/updateProduct")
    ResponseEntity<?> update (@RequestBody Vehicle vehicle){
        return new ResponseEntity<>(iMainService.updateProductDetails(vehicle),HttpStatus.OK);
    }

    // http://localhost:8091/api/v1/main/product/{productId}
    @GetMapping("/product/{productId}")
    ResponseEntity<?> getProduct(@PathVariable String productId){
        return new ResponseEntity<>(iMainService.getProduct(productId),HttpStatus.OK);
    }

}
