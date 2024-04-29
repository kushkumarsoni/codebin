import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DbService } from './../../services/db.service';
import { snippetType } from '../../models/Snippet';

@Component({
  selector: 'app-create-bin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-bin.component.html',
  styleUrl: './create-bin.component.css'
})
export class CreateBinComponent {

  constructor(private dbService:DbService) {}

  title = new FormControl("",[
    Validators.required,
  ])

  code = new FormControl("",[
    Validators.required,
  ])

  binForm = new FormGroup({
    title:this.title,
    code:this.code
  })

  async binFunction() {
   // console.log('Login data :',this.binForm.value);
    await this.dbService.createCodeSnippet(this.binForm.value as snippetType);
    this.resetBinFunction();
  }

  resetBinFunction(){
    this.binForm.reset()
  }

}
