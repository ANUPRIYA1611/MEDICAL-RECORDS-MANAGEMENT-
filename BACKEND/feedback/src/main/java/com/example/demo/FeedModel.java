package com.example.demo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="FeedModel")
public class FeedModel {
	@Id
	@Column(name="feed_id")
	@GeneratedValue(strategy= GenerationType.AUTO)
	private long feed_id;
	@Column(name="EMAIL")
	private String email;
	@Column (name="NAME")
	private String Name;
	@Column(name="SUBJECT")
	private String Subject;
	@Column(name="MESSAGE")
	private String Message;
	public long getStud_id() {
		return feed_id;
	}
	public void setStud_id(long feed_id) {
		this.feed_id = feed_id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return Name;
	}
	public void setName(String Name) {
		this.Name = Name;
	}
	public String getSubject() {
		return Subject;
	}
	public void setSubject(String Subject) {
		this.Subject = Subject;
	}
	public String getMessage() {
		return Message;
	}
	public void setMessage(String Message) {
		this.Message = Message;
	}
	public FeedModel(long feed_id, String email, String Name, String Subject, String Message) {
		super();
		this.feed_id = feed_id;
		this.email = email;
		this.Name = Name;
		this.Subject = Subject;
		this.Message= Message;
	}
	public FeedModel() {
		
	}

}
