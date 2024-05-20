import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css'
})
export class PointTableComponent implements OnInit {
  pointTable: any;
  tableHeading:any;
team: any;

  constructor(private api:ApiCallService){

  }
  ngOnInit(): void {
    this.api.getPointTable().subscribe({
      next:data=>{
        this.pointTable=data;
       // console.log(this.pointTable);
        this.tableHeading=[...this.pointTable[0]]
       // console.log(this.tableHeading)
      },
      error:error=>{
        console.log(error);
      }
    })

    
  }

}
