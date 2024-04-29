import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(public dbService:DbService) {}
  results:{id:string,title:string}[] = [];

  ngOnInit() {
    this.dbService.getAllCodeSnippets().then((data:any) =>{
     console.log(data)
     this.results = data
    })
  }
}
