package com.example.demo.reposetry;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entites.marque;
import com.example.demo.entites.voiture;



@Repository
public interface reposetryvoiture extends JpaRepository<voiture, Long> {
	@Query("SELECT v FROM voiture v WHERE " +
		       "(:nome IS NULL OR v.nome LIKE %:nome%) " +
		       "AND (:prix IS NULL OR v.prix = :prix) " +
		       "AND (:couleure IS NULL OR v.couleure = :couleure) " +
		       "AND (:carberant IS NULL OR v.carberant = :carberant) " +
		       "AND (:km IS NULL OR v.km = :km)"+
		       "AND (:nbport IS NULL OR v.nbport = :nbport)"+
		       "AND (:transmission IS NULL OR v.transmission = :transmission)" +
		       "AND (:sylendre IS NULL OR v.sylendre = :sylendre)"+
		       "AND (:vin IS NULL OR v.vin = :vin)"+
		       "AND (:exterieur IS NULL OR v.exterieur = :exterieur)" +
		       "AND (:option IS NULL OR v.option = :option)"  )
		List<voiture> searchByFlexibleCriteria(@Param("nome") String nome, @Param("prix") Long prix,
		                                      @Param("couleure") String couleure, @Param("carberant") String carberant,
		                                      @Param("km") Long km,@Param("nbport") Long nbport,
		                                      @Param ("transmission") String transmission, @Param ("sylendre") String sylendre,
		                                       @Param ("vin") String vin,@Param ("exterieur") String exterieur,
		                                       @Param ("option") String option);

		 List<voiture> findByDatesercul(String datesercul);
    java.util.List<voiture> findByTag(String tag);
    java.util.List<voiture> findByPrixGreaterThan(Long prix);
    List<voiture> findByNomeContainingIgnoreCaseAndPrixLessThanEqualAndCarberant(String nome, long prix, String carberant);

}
