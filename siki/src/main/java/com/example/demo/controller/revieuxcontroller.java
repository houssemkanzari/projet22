package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entites.Revieux;
import com.example.demo.service.revieuxserviceimplements;
@CrossOrigin(origins = "*")
@RestController
public class revieuxcontroller {
@Autowired
revieuxserviceimplements revim;
@PostMapping(value = "/addrevieux")
public Revieux addRevieux(@RequestBody Revieux revieux) {
	return revim.addRevieux(revieux);
}
@GetMapping("/revieux-count")
public long getnumberofrevieux() {
	return revim.getnumberofrevieux();
}
@GetMapping("/getrevieux")
public List<Revieux>getrevieux(){
	return revim.getrevieux();
}
}
