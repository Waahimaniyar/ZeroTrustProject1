package com.zerotrust.backend;

import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173")

public class AuthController {

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody User user) {

        Map<String, Object> response = new HashMap<>();

        if(user.getUsername().equals("venkat") &&
           user.getPassword().equals("1234")) {

            response.put("success", true);
            response.put("username", user.getUsername());

        } else {

            response.put("success", false);
        }

        return response;
    }
}