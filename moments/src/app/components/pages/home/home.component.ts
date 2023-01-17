import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/models/Moment';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allMoments: Moment[] = [];//conjusnto geral de moments
  moments: Moment[] = []; //variável específica que contem os mesmos dados e será usada
                          //no sistema de procura por um moment específico
  baseApiUrl = environment.baseApiUrl;

  constructor(private momentService:MomentService) { }

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items)=>{
      //essa função é necessária para que possamos manipular
      //algumas informações que virão nos Moments, como
      //o formato da data, que será formatado nas linhas a seguir
        const data = items.data;
        data.map((item) => {item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR')});
        this.allMoments = data;
        this.moments = data;
        }
      );
  }
}
