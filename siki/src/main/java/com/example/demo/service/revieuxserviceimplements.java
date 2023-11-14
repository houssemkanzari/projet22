package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entites.Revieux;
import com.example.demo.entites.client;
import com.example.demo.reposetry.reposetryrevieux;
@Service
public class revieuxserviceimplements implements servicerevieux {
@Autowired
reposetryrevieux repvv;
	@Override
	public Revieux addRevieux(Revieux revieux) {
		// TODO Auto-generated method stub
		return repvv.save(revieux) ;
	}
	public long getnumberofrevieux() {
		return repvv.count();
	}
	public List<Revieux>getrevieux(){
		return repvv.findAll();
	}
   
}
