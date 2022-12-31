package com.OnegJack.Music.service;

import com.OnegJack.Music.domain.User;
import com.OnegJack.Music.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public boolean addUser(User user){
        if(userRepository.existsById(user.getPhoneNum())){
            return false;
        }else {
            userRepository.save(user);
            return true;
        }
    }
}
