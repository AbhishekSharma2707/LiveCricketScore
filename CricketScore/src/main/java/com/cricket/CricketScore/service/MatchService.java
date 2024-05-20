package com.cricket.CricketScore.service;

import java.util.List;
import java.util.Map;

import com.cricket.CricketScore.entities.Match;

public interface MatchService {

	//get all matchs
	List<Match> getAllMatches();
	
	//get live matchs
	List<Match> getLiveMatches();
	
	//get points table
	
	List<List<String>> getPointTable();
}
