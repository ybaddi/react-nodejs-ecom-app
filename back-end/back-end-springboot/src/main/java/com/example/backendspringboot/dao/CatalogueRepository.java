package com.example.backendspringboot.dao;

import com.example.backendspringboot.model.Catalogue;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CatalogueRepository extends JpaRepository<Catalogue,Long>{

}
