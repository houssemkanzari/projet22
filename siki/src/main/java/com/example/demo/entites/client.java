package com.example.demo.entites;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import antlr.collections.List;
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
public class client {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY )
private long id_client;
private String nom;
private String prenom;
private String email;
private String paswword;
private String confermpassword;
private boolean active;
private String role ;
@JsonIgnore
@OneToMany(mappedBy = "client")
private java.util.List<commende> voitures;


}
