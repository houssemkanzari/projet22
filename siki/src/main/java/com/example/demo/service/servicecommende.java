package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entites.commende;
import com.example.demo.reposetry.reposetrycommende;
@Service 
public class servicecommende {
	@Autowired
	reposetrycommende repcc;
 public commende addCommende (commende commende) {
	 return repcc.save(commende);
 }
 public long getNombreTotalCommandes() {
     return repcc.count();
 }
 public List<commende>getcommande(){
	 return repcc.findAll();
 }

 
}
