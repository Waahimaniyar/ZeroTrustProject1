package com.zerotrust.backend;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@CrossOrigin(origins = "*")
public class AiController {

    @GetMapping("/ai-risk")
    public Map<String, String> getRisk() {

        Map<String, String> response = new HashMap<>();

        int score = new Random().nextInt(100);

        if(score > 70){
            response.put("risk", "HIGH RISK");
        } else if(score > 40){
            response.put("risk", "MEDIUM RISK");
        } else {
            response.put("risk", "LOW RISK");
        }

        response.put("score", score + "%");

        return response;
    }
}