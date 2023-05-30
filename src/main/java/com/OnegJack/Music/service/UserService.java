package com.OnegJack.Music.service;

import com.OnegJack.Music.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

/*    Optional<User> find(String id){
        if (userRepository.existsById(id)){
            return  userRepository.findById(id);
        }
    }*/
}
