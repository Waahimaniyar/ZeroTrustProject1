package com.zerotrust.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class HomeController {

    @GetMapping("/dashboard")
    public Map<String, Object> getDashboardData() {

        Map<String, Object> data = new HashMap<>();

        data.put("riskScore", "72%");
        data.put("devices", 128);
        data.put("alerts", 5);
        data.put("firewall", "Active");

        return data;
    }
}