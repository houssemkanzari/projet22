package com.example.demo.reposetry;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entites.commende;
@Repository
public interface reposetrycommende extends JpaRepository<commende, Long> {
	
}
