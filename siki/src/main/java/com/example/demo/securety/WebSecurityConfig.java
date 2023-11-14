package com.example.demo.securety;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .cors().and().csrf().disable()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
            .authorizeRequests()
                .antMatchers("/api/auth/**").permitAll() // Autoriser l'authentification
                .antMatchers("/add**").permitAll() // Autoriser certaines URL
                .antMatchers("/check-role/{password}**").permitAll() // Autoriser certaines URL
                .antMatchers("/getcl**").permitAll() // Autoriser certaines URL
                .antMatchers("/commende**").permitAll()// Autoriser certaines URL
                .antMatchers("/nombre-total**").permitAll()// Autoriser certaines URL
                .antMatchers("/addc**").permitAll()// Autoriser certaines URL
                .antMatchers("/addrevieux**").permitAll()// Autoriser certaines URL
                .antMatchers("/revieux-count**").permitAll()// Autoriser certaines URL
                .antMatchers("/getrevieux**").permitAll()// Autoriser certaines URL
                .antMatchers("/getAllVoitures**").permitAll()// Autoriser certaines URL
                .antMatchers("/addvoiture**").permitAll()// Autoriser certaines URL
                .antMatchers("/voitures-after-year-2020**").permitAll()// Autoriser certaines URL
                .antMatchers("/featured-voitures**").permitAll()// Autoriser certaines URL
                .antMatchers("/voiture-count**").permitAll()// Autoriser certaines URL
                .antMatchers("/findByidVoiture/{id}**").permitAll()// Autoriser certaines URL
                .antMatchers("/prix-superieur**").permitAll()// Autoriser certaines URL
                .antMatchers("/search-voitures**").permitAll()// Autoriser certaines URL
                .antMatchers("/search2**").permitAll()// Autoriser certaines URL
                .antMatchers("/addf**").permitAll()// Autoriser certaines URL
                .antMatchers("/api/test/**").permitAll() // Autoriser d'autres URL publiques
                .anyRequest().authenticated(); // Toutes les autres requêtes nécessitent une authentification

        // Ajouter un filtre personnalisé pour la gestion de l'authentification JWT
  
    }
}

