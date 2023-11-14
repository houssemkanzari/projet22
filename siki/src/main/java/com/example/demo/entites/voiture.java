package com.example.demo.entites;



import java.sql.Date;
import java.util.List;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

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
public class voiture {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_voiture;
	private String	 nome;
	private String	 couleure;
	private String	 carberant;
	private long	 prix;
	private long	 km;
	private long	  puissance_fiscale;
	private String	 datemiseenventDate;
	private long	 qentiterenstock;
	private String	 transmission;
	private String	 sylendre;
	private String	 vieux;
	private String	 vieuxx;
	private String	 tag;
	private String	 datesercul;
	private String	 drivetype;
	private long	 nbport;
	private String	 vin;
	private String	 description;
	private String	 option;
	private String	 optionnational;
	private String	 exterieur;
	private String	 security;
	@Lob
	@Basic(fetch = FetchType.LAZY)
	private byte[] image; 
    @Lob
    @Basic(fetch = FetchType.LAZY)
	private byte[] image2; 
    @Lob
    @Basic(fetch = FetchType.LAZY)
	private byte[] image3;
    @Lob
    @Basic(fetch = FetchType.LAZY)
	private byte[] image4;
    @Lob
    @Basic(fetch = FetchType.LAZY)
	private byte[] image5;
    @Lob
    @Basic(fetch = FetchType.LAZY)
	private byte[] image6; 
    @Lob
    @Basic(fetch = FetchType.LAZY)
	private byte[] image7; 
	@ManyToOne
	@JoinColumn(name = "id_marque") 
	private marque marque;
 
}
