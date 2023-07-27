package com.iamneo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.Ehr1;
import com.iamneo.security.service.Ehrservice;

import lombok.RequiredArgsConstructor;
@CrossOrigin(origins="*", allowedHeaders="*")
@RestController
@RequestMapping("/api/v1/demo/ehr")
@RequiredArgsConstructor
public class EhrController {
	@Autowired
	Ehrservice ehservice;
	@GetMapping("/getehr1")
	public List <Ehr1> getAll()
	{
	 return ehservice.getAll();
	}
}
