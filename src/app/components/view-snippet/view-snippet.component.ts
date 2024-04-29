import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-view-snippet',
  standalone: true,
  imports: [],
  templateUrl: './view-snippet.component.html',
  styleUrl: './view-snippet.component.css'
})
export class ViewSnippetComponent {

  constructor(private router:Router,private route:ActivatedRoute,private dbService:DbService) {}
  // result:{by:string,code:string,title:string}[] = []
  result = {
    title:'',
    code:''
  }

  ngOnInit() {
    const docId = this.route.snapshot.paramMap.get('id')
    this.dbService.getSnippetById(docId!).then(data=>{
      this.result = data
    })
  }

}
