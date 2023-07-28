package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.Appointment;

public interface Appointmentrepo extends JpaRepository<Appointment,Integer>{

}
