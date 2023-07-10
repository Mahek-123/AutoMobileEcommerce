package com.example.MainApp.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Vehicle {

    String productId;
    String name;
    String mileage;
    String color;
    String price;
}
