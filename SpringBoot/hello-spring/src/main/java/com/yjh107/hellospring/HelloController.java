package com.yjh107.hellospring;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello Spring Boot!";
    }

    @GetMapping("/user")
    public User getUser() {
        User user = new User("Jinhyuk", 28);
        return user;
    }

    @GetMapping("/users")
    public List<User> getUserList() {
        User user1 = new User("Jinhyuk", 25);
        User user2 = new User("Jinhyuk", 20);
        return List.of(user1, user2);
    }
}
