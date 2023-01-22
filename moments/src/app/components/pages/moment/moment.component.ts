import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/models/Moment';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';
import { Comment } from 'src/app/models/Comment';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {

  moment?:Moment;
  baseApiUrl = environment.baseApiUrl;
  faTimes = faTimes;
  faEdit = faEdit;

  commentForm!:FormGroup


  constructor(private momentService:MomentService,
              private route:ActivatedRoute,
              private messagesService: MessagesService,
              private router:Router,
              private commentService:CommentService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.momentService.getMoment(id).subscribe((item)=>(this.moment = item.data));
    // iria ser usado o nome "moment" porém como está vindo o moment e mais a mensagem
    // optou-se por nomear como item
    this.commentForm = new FormGroup ({
      text: new FormControl('',[Validators.required]),
      username:new FormControl('',[Validators.required])
    });
  }

   get text() {
    return this.commentForm.get('text')!;//as exclamações informam que estes ítens irão existir.
    //assim evita-se o erro do sistema ficar reclamando que eses ítens podem ser nulos.
   }

   get username() {
    return this.commentForm.get('username')!;
   }


  async removeHandler(id:number){
    await this.momentService.removeMoment(id).subscribe();
    this.messagesService.add("Momento removido com sucesso !");
    this.router.navigate(['/']);
  }

  async onSubmit(formDirective:FormGroupDirective){

    if(this.commentForm.invalid){
      return
    }

    const data: Comment = this.commentForm.value;
    data.momentId = Number(this.moment!.id);
    await this.commentService
      .createComment(data)
        .subscribe((comment)=>this.moment!.comments!.push(comment.data));

    this.messagesService.add("Comentário enviado com sucesso !");

    this.commentForm.reset();

    formDirective.resetForm();

  }

}
