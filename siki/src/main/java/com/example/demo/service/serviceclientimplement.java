package com.example.demo.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entites.client;
import com.example.demo.reposetry.reposetryclient;
@Service
public class serviceclientimplement implements servicecclient {
@Autowired
reposetryclient clientrep;
@Autowired
private JavaMailSender mailSender;
	@Override
	public client addClient(client client) {
		
		
		 client.setActive(true);
	        client.setRole("user");
	        client savedClient = clientrep.save(client);
	        sendRegistrationEmail(savedClient);

	        return savedClient;
	}
	  private void sendRegistrationEmail(client client) {
	        SimpleMailMessage message = new SimpleMailMessage();
	        message.setTo(client.getEmail());
	        message.setSubject("Welcome to Our Website");
	        message.setText("Dear " + client.getNom() + ",\n\nThank you for registering with us!");

	        mailSender.send(message);
	    }
	  public String checkRoleByPassword(String password) {
		    client client = clientrep.findByPassword(password);
		    
		    if (client != null && client.getRole() != null) {
		        return client.getRole();
		    } else {
		        return "password incorrect";
		    }
		}
  
	  public List<client>getClients(){
		  return clientrep.findAll();
	  }
	}






	

