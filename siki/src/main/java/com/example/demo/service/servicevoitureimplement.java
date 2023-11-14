package com.example.demo.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Date;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.validation.constraints.Null;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entites.voiture;
import com.example.demo.reposetry.reposetryvoiture;

import antlr.StringUtils;
@Service
public class servicevoitureimplement implements servicevoiture {
@Autowired
reposetryvoiture repv;
	@Override
	public List<voiture> getVoitures() {
		// TODO Auto-generated method stub
		return repv.findAll();
	}
    public List<voiture> getVoituresAfter2020() {
    	 return repv.findByDatesercul("2023");
    }
    public List<voiture> getFeaturedVoitures() {
        return repv.findByTag("FEATURED");
    }
	@Override
	public long getNumberOfVoitures() {
		// TODO Auto-generated method stub
		return repv.count() ;
	}
    public voiture getVoitureById(Long id) {
        return repv.findById(id).orElse(null);
    }
    public List<voiture> getVoituresPrixPlusDe50000() {
        return repv.findByPrixGreaterThan(50000L);
    }

  public voiture addVoiture (voiture voiture) {
	  return repv.save(voiture);
  }
      
        public List<voiture> searchVoitures(String nome, Long prix, String carberant) {
            return repv.findByNomeContainingIgnoreCaseAndPrixLessThanEqualAndCarberant(nome, prix, carberant);
        }
        public List<voiture> searchByFlexibleCriteria(String nome,String option,String exterieur,String vin,String transmission,String sylendre ,
        		Long prix,Long nbport,String couleure, String carberant, Long km) {
            if (nome == null && prix == null && couleure == null && carberant == null && km == null
            		&& nbport == null && transmission == null && sylendre == null && vin == null && exterieur == null && option== null) {
                return Collections.emptyList(); // Aucun critère spécifié, retourne une liste vide
            }

            return repv.searchByFlexibleCriteria(nome,prix, couleure, carberant, km, nbport,transmission,sylendre,vin,exterieur,option);
        }
        
        public voiture addVoiture(voiture voiture, MultipartFile imageFile1,MultipartFile imageFile2,MultipartFile imageFile3
        		                     ,MultipartFile imageFile4,MultipartFile imageFile5,MultipartFile imageFile6,MultipartFile imageFile7 ) {
            try {
                voiture.setImage(imageFile1.getBytes());
                voiture.setImage2(imageFile2.getBytes());
                voiture.setImage3(imageFile3.getBytes());
                voiture.setImage4(imageFile4.getBytes());
                voiture.setImage5(imageFile5.getBytes());
                voiture.setImage6(imageFile6.getBytes());
                voiture.setImage7(imageFile7.getBytes());
                return repv.save(voiture);
            } catch (Exception e) {
                throw new RuntimeException("Failed to add voiture with image", e);
            }
        
        
        
        
  
    }
        
} 
        
  
    
    



