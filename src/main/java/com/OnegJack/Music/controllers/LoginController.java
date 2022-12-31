package com.OnegJack.Music.controllers;

import com.OnegJack.Music.domain.User;
import com.OnegJack.Music.domain.UserRepository;
import com.OnegJack.Music.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    @Autowired
    UserService userService;
    @Autowired
    UserRepository userRepository;
    @RequestMapping(value = "/login",consumes = "application/json")
    public String login(@RequestBody@Valid User user, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return bindingResult.getAllErrors().get(0).getCode();
        } else if(userRepository.existsById(user.getPhoneNum())){
            return "success";
        }else {
            return "fail!";
        }
    }
}
