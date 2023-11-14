package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entites.commende;
import com.example.demo.service.servicecommende;

@CrossOrigin(origins = "*")
@RestController
public class commendecontroller {
@Autowired
servicecommende sercc;
@PostMapping(value = "/addc")
public commende addCommende(@RequestBody commende commende) {
	return sercc.addCommende(commende);
}

@GetMapping("/nombre-total")
public ResponseEntity<Long> getNombreTotalCommandes() {
    long nombreTotalCommandes = sercc.getNombreTotalCommandes();
    return ResponseEntity.ok(nombreTotalCommandes);
}
@GetMapping("/commende")
public  List<commende>getcommande(){
	return sercc.getcommande();
}
}
