package com.cricket.CricketScore.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cricket.CricketScore.entities.Match;

public interface MatchRepo extends JpaRepository<Match, Integer> {
// match fetch krna chata hoon
// provide kar de - teamHeading
	
	Optional<Match> findByTeamHeading(String teamHeading);
}
