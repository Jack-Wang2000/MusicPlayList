package com.OnegJack.Music.controllers;

import com.OnegJack.Music.domain.*;
import com.OnegJack.Music.service.SongService;
import com.OnegJack.Music.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@RestController
public class IndexController {
    @Autowired
    UserService userService;
    @Autowired
    UserRepository userRepository;
    @Autowired
    SongService songService;
    @Autowired
    SongRepository songRepository;
    @Autowired
    ArtistRepository artistRepository;

    @RequestMapping(value = "/login", consumes = "application/json")
    public String login(@RequestBody @Valid User user, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return bindingResult.getAllErrors().get(0).getCode();
        }
        if (userRepository.existsById(user.getPhone())) {
            return "success";
        }
        userRepository.save(user);
        return "success";
    }

    @PostMapping("/mark")
    public String mark(@RequestBody @Valid Song song, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return bindingResult.getAllErrors().get(0).getCode();
        }
        if (songRepository.existsById(song.getId())) {
            return "Already in favorite!";
        } else {
            songRepository.save(song);
            return "Mark Success!";
        }
    }
}
