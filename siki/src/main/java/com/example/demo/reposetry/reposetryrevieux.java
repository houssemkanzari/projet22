package com.example.demo.reposetry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entites.Revieux;
@Repository
public interface reposetryrevieux extends JpaRepository<Revieux, Long> {

}
