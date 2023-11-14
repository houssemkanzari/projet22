package com.example.demo.controller;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entites.client;
import com.example.demo.service.serviceclientimplement;
@CrossOrigin(origins = "*")
@RestController
public class clientcontroller {
@Autowired
serviceclientimplement serc;
@PostMapping(value = "/add")
public client addClient(@RequestBody client client) {
	return serc.addClient(client);
}
@GetMapping("/check-role/{password}")
public ResponseEntity<Map<String, String>> checkRoleByPassword(@PathVariable String password) {
    String role = serc.checkRoleByPassword(password);
    Map<String, String> response = new HashMap<>();
    
    if (role != null) {
        response.put("role", role);
        return ResponseEntity.ok(response);
    } else {
        response.put("error", "Role not found");
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }
}
  @GetMapping(value = "/getcl")
  public List<client>getClients(){
	  return serc.getClients();
  }

}



