package com.iamneo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.example.demo.Employee;
import com.iamneo.security.entity.Appointment;
import com.iamneo.security.service.Appointmentservice;

import lombok.RequiredArgsConstructor;


@CrossOrigin(origins="*", allowedHeaders="*")
@RestController
@RequestMapping("/api/v1/demo/app")
@RequiredArgsConstructor
public class Appointmentcontroller {
	@Autowired
	Appointmentservice aservice;
	@GetMapping("/getapp")
	public List <Appointment> getAllAppoint()
	{
	 return aservice.getAllAppoint();
	}
	@PostMapping("/post")
	public boolean addEmployee(@RequestBody Appointment app)
	{
	 return aservice.addEmployee(app);
	}
}
