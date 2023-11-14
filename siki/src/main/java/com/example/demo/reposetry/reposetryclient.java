package com.example.demo.reposetry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entites.client;
@Repository
public interface reposetryclient extends JpaRepository<client, Long> {
	
	@Query(value = "SELECT * FROM client c WHERE c.paswword = :paswword", nativeQuery = true)
	client findByPassword(@Param("paswword") String paswword);
	}
