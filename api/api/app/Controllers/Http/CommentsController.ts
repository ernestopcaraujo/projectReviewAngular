import { Request } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment';
import Moment from 'App/Models/Moment';

export default class CommentsController {
  public async store({request,params,response}:HttpContextContract){

    const body = request.body() //obtém o body
    const momentId = params.momentId //obtém o momentId da rota
    await Moment.findOrFail(momentId) //verifica se o momentId que vem da rota existe no BD
    body.momentId = momentId //grava o momentId no body
    const comment = await Comment.create(body) //insere o body na tabela Comment do BD e armazena ele na
                                              // variável commment
    response.status(201)

    return {
      message:'Comentario adicionado com sucesso',
      cmt: comment
    }

  }
}

