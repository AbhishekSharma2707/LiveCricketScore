import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatchCardComponent } from '../../components/match-card/match-card.component';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [CommonModule,FormsModule,MatchCardComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent implements OnInit{

  liveMatches:any;
  constructor(private api:ApiCallService){

  }
  ngOnInit(): void {
    this.loadLiveMatches();
  }


  private loadLiveMatches() {
    this.api.getLiveMatches().subscribe({
      next: data => {
        console.log(data);
        this.liveMatches=data;
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
