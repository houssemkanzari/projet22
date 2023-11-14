package com.example.demo.entites;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
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
public class commende {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_commende;
    private LocalDateTime datecommende;
    private long CIN;
    private long tel;
    private String nom;
    private String prenom;
    private String email;
    @ManyToOne
    @JoinColumn(name = "client_id_client")
    private client client;
    
    
}
