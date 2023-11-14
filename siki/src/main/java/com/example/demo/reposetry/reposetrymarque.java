package com.example.demo.reposetry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entites.marque;
@Repository
public interface reposetrymarque extends JpaRepository<marque, Long> {

}
