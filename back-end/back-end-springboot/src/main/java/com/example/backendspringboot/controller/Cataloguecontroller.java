package com.example.backendspringboot.controller;

import java.util.List;
import java.util.Optional;

import com.example.backendspringboot.dao.CatalogueRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backendspringboot.model.Catalogue;

@RestController
@RequestMapping("/api/v1/")
public class Cataloguecontroller {
	
	@Autowired
	private CatalogueRepository  cr;
	
	// TODO getall
	
	@GetMapping("/catalogues")
	public List<Catalogue> getAll(){
		return cr.findAll();
	}
	
	// TODO getby id
	
	@GetMapping("/catalogues/{id}")
	public   ResponseEntity<Catalogue> getbyid(@PathVariable long id ){
		System.out.print(id);
		Optional<Catalogue> result = cr.findById(id);
		return result.map(response -> ResponseEntity.ok().body(response))
				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}
	
    //	 TODO add
	
	@PostMapping("/catalogues/{id}")
	public ResponseEntity<?> addCatalogue(@RequestBody Catalogue catalogue) {
		Catalogue cat = cr.save(catalogue);
		return ResponseEntity.ok().body(cat);
		
	}
	
	
	
	
	// TODO update
	@PutMapping("/catalogues/{id}")
	public ResponseEntity<?> updateCatalogue(@RequestBody Catalogue catalogue) {
		Catalogue cat = cr.save(catalogue);
		return ResponseEntity.ok().body(cat);
		
	}
	
	
	
	// TODO remove
	@DeleteMapping("/catalogues/{id}")
	public ResponseEntity<?> deleteCatalogue(@PathVariable long id) {
		cr.deleteById(id);
		return ResponseEntity.ok().build();
		
	}
	
	
	

}
