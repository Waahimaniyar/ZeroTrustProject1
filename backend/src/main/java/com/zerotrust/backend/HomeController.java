package com.zerotrust.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class HomeController {

    @GetMapping("/")
    public Map<String, Object> dashboardData() {

        Map<String, Object> data = new HashMap<>();

        data.put("riskScore", "72%");
        data.put("devices", 128);
        data.put("alerts", 5);
        data.put("status", "Secure");

        return data;
    }
}