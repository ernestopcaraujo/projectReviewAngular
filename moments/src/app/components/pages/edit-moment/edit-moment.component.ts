import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/models/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.css']
})
export class EditMomentComponent implements OnInit {

  moment!:Moment;
  btnText: string ='Editar Momento'

  constructor(private mommentService:MomentService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id =Number(this.route.snapshot.paramMap.get("id"));
    this.mommentService.getMoment(id).subscribe(
      (item)=>this.moment = item.data
    );

  }

}
