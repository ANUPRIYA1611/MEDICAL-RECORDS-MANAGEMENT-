package com.iamneo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.example.demo.Employee;
import com.iamneo.security.entity.Appointment;
import com.iamneo.security.repository.Appointmentrepo;
@Service
public class Appointmentservice {
	@Autowired
    Appointmentrepo arepo;
	public List<Appointment> getAllAppoint(){
		return arepo.findAll();
	}
	 public boolean addEmployee(Appointment employee)
	 {
	 return arepo.save(employee)!=null?true:false;
	 }
	
}
