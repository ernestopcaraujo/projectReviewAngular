import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Moment } from 'src/app/models/Moment';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Moment>()
  @Input() btnText!: string;
  @Input() momentData:Moment | null = null;

  momentForm!: FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.momentForm = new FormGroup(
      {
        id: new FormControl(this.momentData ? this.momentData.id : ''),
        title: new FormControl(this.momentData ? this.momentData.title : '',[Validators.required]),
        description: new FormControl(this.momentData ? this.momentData.description : '',[Validators.required]),
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

  onFileSelected(event:any){
    const file: File = event.target.files[0];
    this.momentForm.patchValue({image: file})
  }

  submit() {
    if(this.momentForm.invalid){
      return;
    }
    console.log(this.momentForm.value );
    this.onSubmit.emit(this.momentForm.value); //ou seja, o output "onSubmit" através do método "emit"
    //está enviando todos os valores do formulário "momentForm" que serão capturados pelo
    // componente pai
  }


}
