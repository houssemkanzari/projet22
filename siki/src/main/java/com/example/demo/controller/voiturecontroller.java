package com.example.demo.controller;
import org.springframework.http.MediaType;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entites.voiture;
import com.example.demo.service.servicevoitureimplement;
import com.fasterxml.jackson.databind.ObjectMapper;
@CrossOrigin(origins = "*")
@RestController
public class voiturecontroller {
@Autowired
servicevoitureimplement servr;
@GetMapping(value = "/getAllVoitures")
public List<voiture> getVoitures() {
	return servr.getVoitures();
}
@PostMapping(value = "/addvoiture")
public voiture addVoiture(@RequestBody voiture voiture) {
	return servr.addVoiture(voiture);
}
@GetMapping("/voitures-after-year-2020")
public ResponseEntity<List<voiture>> getVoituresForYear2023() {
    List<voiture> voituresForYear2023 = servr.getVoituresAfter2020();
    
    if (voituresForYear2023.isEmpty()) {
        return ResponseEntity.noContent().build();
    } else {
        return ResponseEntity.ok(voituresForYear2023);
    }
}

@GetMapping("/featured-voitures")
public List<voiture> getFeaturedVoitures() {
    return servr.getFeaturedVoitures();
}
@GetMapping("/voiture-count")
public long getNumberOfVoitures() {
    return servr.getNumberOfVoitures();
}
@GetMapping("/findByidVoiture/{id}")
public ResponseEntity<voiture> getVoitureById(@PathVariable Long id) {
    voiture voiture = servr.getVoitureById(id);
    if (voiture != null) {
        return ResponseEntity.ok(voiture);
    } else {
        return ResponseEntity.notFound().build();
    }
}
@GetMapping("/prix-superieur")
public ResponseEntity<List<voiture>> getVoituresPrixPlusDe50000() {
    List<voiture> voitures = servr.getVoituresPrixPlusDe50000();
    return ResponseEntity.ok(voitures);
}



@GetMapping("/search-voitures")
public ResponseEntity<List<voiture>> searchVoitures(@RequestParam String nome, @RequestParam long prix, @RequestParam String carberant) {
    List<voiture> voitures = servr.searchVoitures(nome, prix, carberant);
    return ResponseEntity.ok(voitures);
}
@GetMapping("/search2")
public ResponseEntity<?> searchVoitures(
    @RequestParam(required = false) String nome,
    @RequestParam(required = false) Long prix,
    @RequestParam(required = false) Long nbport,
    @RequestParam(required = false) String transmission,
    @RequestParam(required = false) String couleure,
    @RequestParam(required = false) String carberant,
    @RequestParam(required = false) Long km,
    @RequestParam(required = false) String sylendre,
    @RequestParam(required = false) String vin,
    @RequestParam(required = false) String exterieur,
    @RequestParam(required = false) String option) {

    List<voiture> result = servr.searchByFlexibleCriteria(nome, option,exterieur,vin,transmission,sylendre,prix, nbport,
    		couleure, carberant, km);

    if (result.isEmpty()) {
        return new ResponseEntity<>("Aucune voiture trouvée.", HttpStatus.NOT_FOUND);
    }

    return new ResponseEntity<>(result, HttpStatus.OK);
}


@PostMapping("/addf")
public ResponseEntity<voiture> addVoiture(@ModelAttribute voiture voiture,
		 @RequestParam("imageFile1") MultipartFile imageFile1,
         @RequestParam("imageFile2") MultipartFile imageFile2,
         @RequestParam("imageFile3") MultipartFile imageFile3,
         @RequestParam("imageFile4") MultipartFile imageFile4,
         @RequestParam("imageFile5") MultipartFile imageFile5,
         @RequestParam("imageFile6") MultipartFile imageFile6,
         @RequestParam("imageFile7") MultipartFile imageFile7) {
    voiture savedVoiture = servr.addVoiture(voiture, imageFile1,imageFile2,imageFile3,imageFile4,imageFile5,imageFile6,imageFile7);
    return ResponseEntity.ok(savedVoiture);
}


}





















        