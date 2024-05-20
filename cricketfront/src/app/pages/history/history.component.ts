import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { error } from 'console';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatchCardComponent } from '../../components/match-card/match-card.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [FormsModule,CommonModule,MatchCardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {
  allMatch: any;
constructor(private api:ApiCallService){

}
  ngOnInit(): void {
    this.api.getAllMatches().subscribe({
      next:data=>{
        this.allMatch=data
      },
      error:error=>{
        console.log(error)
      }
    })
  }

}
