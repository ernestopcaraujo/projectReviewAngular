import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {

  @Input() btnText!: string;

  momentForm!: FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.momentForm = new FormGroup(
      {
        id: new FormControl(''),
        title: new FormControl('',[Validators.required]),
        description: new FormControl('',Validators.required),
        image: new FormControl(''),
      }
    )
  }

  get title(){
    return this.momentForm.get('title')! //a exclamação aqui indica que este valor vai existir
  }

  get description(){
    return this.momentForm.get('description')! //a exclamação aqui indica que este valor vai existir
  }

  submit() {
    if(this.momentForm.invalid){
      return;
    }
    console.log('sent');
  }


}
