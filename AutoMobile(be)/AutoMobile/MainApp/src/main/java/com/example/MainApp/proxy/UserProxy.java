package com.example.MainApp.proxy;

import com.example.MainApp.domain.UserDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "authuserservice", url = "http://localhost:8090")
public interface UserProxy {
    @PostMapping("/api/v1/user/register")
    ResponseEntity<?> registerCustomer(@RequestBody UserDTO userDTO);
}
