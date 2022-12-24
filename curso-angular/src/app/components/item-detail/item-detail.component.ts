import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ICredit } from 'src/app/models/ICredit';
import { ListService } from 'src/app/services/list.service';
import { ParamMap } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  creditLine?:ICredit;



  constructor(private route: ActivatedRoute, private listService: ListService) {this.getOneCreditLine(route)}



  ngOnInit(): void {

  }

  getOneCreditLine(route:ActivatedRoute){

    const id = Number(this.route.snapshot.paramMap.get('id'));
    //conversão para Number necessária pois o id vem como string a partir da URL
    console.log('Id = ' + id);
    this.listService.getOneCreditLine(id).subscribe((creditLine)=>(this.creditLine = creditLine));
  }


}
