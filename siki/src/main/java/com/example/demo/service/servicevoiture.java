package com.example.demo.service;

import java.util.List;

import com.example.demo.entites.voiture;



public interface servicevoiture {

	public List<voiture>getVoitures() ;
	 public List<voiture> getVoituresAfter2020();
	 public long getNumberOfVoitures();
	 public voiture getVoitureById(Long id);
	 public List<voiture> getVoituresPrixPlusDe50000();
}
