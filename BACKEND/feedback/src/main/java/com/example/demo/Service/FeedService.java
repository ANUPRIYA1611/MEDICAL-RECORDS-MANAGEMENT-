package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.FeedModel;
import com.example.demo.Repo.FeedRepo;


@Service
public class FeedService {
	@Autowired
	   private FeedRepo rev;
	public FeedModel saveDetails(FeedModel f) {

		return rev.save(f);
			
	}
	public List<FeedModel> getAllDetails()
	{
		return rev.findAll();
	}
		public FeedModel update(long  feed_id,FeedModel f) {
	return rev.save(f);	
	}
}
