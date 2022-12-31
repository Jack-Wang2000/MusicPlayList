package com.OnegJack.Music.service;

import com.OnegJack.Music.domain.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SongService {
    @Autowired
    SongRepository songRepository;

}
