package com.iamneo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Ehr;
import com.iamneo.security.repository.Ehrrepo;

@Service
public class Ehrservice {
@Autowired
Ehrrepo erepo;
public List<Ehr> getAll(){
	return erepo.findAll();
}

}
