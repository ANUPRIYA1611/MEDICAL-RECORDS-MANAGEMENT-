package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.FeedModel;

import com.example.demo.Service.FeedService;

@RestController
@CrossOrigin("*")
//@RequestMapping("/Feedback")
public class FeedController {
	@Autowired
	private FeedService stuservice;

	@GetMapping("/getfed")
	public List<FeedModel> getDetails(){
		return stuservice.getAllDetails();
		
	}
	@PostMapping("/addfed")
	public FeedModel postDetails(@RequestBody FeedModel f) {
		return stuservice.saveDetails(f);
	}
		@PutMapping("/updatefeed/{feed_id}")
	public FeedModel update(@PathVariable int feed_id,@RequestBody FeedModel f) {
	return stuservice.update(feed_id,f);
	}
}
