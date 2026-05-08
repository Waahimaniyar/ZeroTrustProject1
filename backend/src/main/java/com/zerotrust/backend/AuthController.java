package com.zerotrust.backend;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")

@CrossOrigin(origins = "http://localhost:5173")

public class AuthController {

    @PostMapping("/login")

    public String login(@RequestBody User user) {

        if(user.getUsername().equals("venkat")
                && user.getPassword().equals("1234")) {

            return "success";
        }

        return "fail";
    }
}