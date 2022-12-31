package com.OnegJack.Music;

import com.OnegJack.Music.controllers.LoginController;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.hamcrest.Matchers.equalTo;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
@SpringBootTest
class MusicApplicationTests {
	private MockMvc mvc;

	@BeforeEach
	public void setUp() throws Exception{
		mvc= MockMvcBuilders.standaloneSetup(new LoginController()).build();
	}
	@Test
	public void getLogin()throws Exception{
		mvc.perform(MockMvcRequestBuilders.get("/login").accept((MediaType.APPLICATION_JSON)))
				.andExpect(status().isOk())
				.andExpect(content().string(equalTo("login success!")));
	}
	@Test
	void contextLoads() {
	}

}
