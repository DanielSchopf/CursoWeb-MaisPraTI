package com.example.api_user.service;

import com.example.api_user.model.User;
import com.example.api_user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String nome) throws UsernameNotFoundException {
        Optional<User> userOptional = userRepository.findByUsername(nome);
        if (userOptional == null) {
            throw new UsernameNotFoundException("Usuário não encontrado: " + nome);
        }
        User user = userOptional.get();
        return org.springframework.security.core.userdetails.User.withUsername(user.getNome())
                .password(user.getSenha())
                .build();
    }


    public UserDetails loadUserById(Integer id) {
        User user = userRepository.findById(id).orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado: " + id));
        return org.springframework.security.core.userdetails.User.withUsername(user.getNome())
                .password(user.getSenha())
                .authorities("USER")
                .build();
    }
}
