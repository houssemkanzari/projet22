package com.example.demo.entites;

import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class marque {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_marque;
	private String nommarque;
	@JsonIgnore
	@OneToMany(mappedBy = "marque")
	private java.util.List<voiture> voiture = new ArrayList();;
}
