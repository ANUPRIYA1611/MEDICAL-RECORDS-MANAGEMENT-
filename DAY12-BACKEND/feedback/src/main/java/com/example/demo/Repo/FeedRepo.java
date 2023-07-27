package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.FeedModel;

public interface FeedRepo extends JpaRepository<FeedModel,String>{

}
