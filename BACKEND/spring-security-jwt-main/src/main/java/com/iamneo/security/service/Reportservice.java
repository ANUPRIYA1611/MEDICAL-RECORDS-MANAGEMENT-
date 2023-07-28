package com.iamneo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Report;
import com.iamneo.security.repository.Reportrepo;


@Service
public class Reportservice {
@Autowired
Reportrepo rrepo;
public List<Report> getAllEhr(){
	return rrepo.findAll();
}

}
