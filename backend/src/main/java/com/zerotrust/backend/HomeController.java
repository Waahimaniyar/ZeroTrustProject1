package com.zerotrust.backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class HomeController {

    @GetMapping("/dashboard")
    public Map<String, Object> dashboard() {

        Map<String, Object> data = new HashMap<>();

        data.put("riskScore", "72%");
        data.put("devices", 128);
        data.put("threats", 5);
        data.put("firewall", "Active");

        List<Map<String, String>> alerts = new ArrayList<>();

        Map<String, String> alert1 = new HashMap<>();
        alert1.put("device", "Laptop-101");
        alert1.put("status", "Malware Detected");

        Map<String, String> alert2 = new HashMap<>();
        alert2.put("device", "Server-22");
        alert2.put("status", "Unauthorized Access");

        Map<String, String> alert3 = new HashMap<>();
        alert3.put("device", "Mobile-55");
        alert3.put("status", "VPN Failure");

        alerts.add(alert1);
        alerts.add(alert2);
        alerts.add(alert3);

        data.put("alerts", alerts);

        return data;
    }
}