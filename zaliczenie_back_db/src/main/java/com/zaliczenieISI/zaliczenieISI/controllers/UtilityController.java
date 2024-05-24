package com.zaliczenieISI.zaliczenieISI.controllers;


import com.zaliczenieISI.zaliczenieISI.domain.LoginEvent;
import com.zaliczenieISI.zaliczenieISI.repositories.LoginEventRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/utility/")
public class UtilityController {

    private final LoginEventRepository loginEventRepository;

    public UtilityController(LoginEventRepository loginEventRepository){
        this.loginEventRepository = loginEventRepository;
    }

    @GetMapping("author")
    public String getSignature(){
        return "Makary Bardowski 215IC B2";
    }

    @GetMapping("eventHistory")
    public List<LoginEvent> findLoginEventHistory(){
        return loginEventRepository.findAll();
    }

    @PostMapping("saveLogin")
    public void saveLoginEvent(@RequestBody LoginEvent event){
        loginEventRepository.save(event);
    }
}
