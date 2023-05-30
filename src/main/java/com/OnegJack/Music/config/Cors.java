package com.OnegJack.Music.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class Cors implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry corsRegistry){
        corsRegistry.addMapping("/**").allowedOrigins("*")
                .allowedMethods("POST","GET","DELETE","PUT")
                .allowedHeaders("*");
    }
/*    @Override
    public void addViewControllers(ViewControllerRegistry viewControllerRegistry){
        viewControllerRegistry.addViewController("/")
                .setViewName("/view/");
    }*/
}
