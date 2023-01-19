import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/models/Moment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {

  moment?:Moment;

  constructor(private momentService:MomentService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.momentService.getMoment(id).subscribe((item)=>(this.moment = item.data));
    // iria ser usado o nome "moment" porém como está vindo o moment e mais a mensagem
    // optou-se por nomear como item
  }

}
