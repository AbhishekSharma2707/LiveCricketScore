package com.cricket.CricketScore.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cricket.CricketScore.entities.Match;
import com.cricket.CricketScore.service.MatchService;

@RestController
@RequestMapping("match")
@CrossOrigin("*")
public class MatchController {

	private MatchService matchService;
	public MatchController(MatchService matchService) {
		super();
		this.matchService = matchService;
	}
	//get live matchs
	@GetMapping("/live")
	public ResponseEntity<List<Match>> getLiveMatches(){
		return new ResponseEntity<>(this.matchService.getLiveMatches(),HttpStatus.OK );
	}
	
	//get all matches
	@GetMapping
	public ResponseEntity<List<Match>> getAllMatches(){
		return new ResponseEntity<>(this.matchService.getAllMatches(), HttpStatus.OK);
	}
	//get point table
	@GetMapping("point-table")
	public ResponseEntity<?> getPointTable(){
		return new ResponseEntity<>(this.matchService.getPointTable(), HttpStatus.OK);
	}
	
}
