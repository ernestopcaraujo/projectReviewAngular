import { v4 as uuidv4 } from 'uuid'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Moment from 'App/Models/Moment'
import  Application  from '@ioc:Adonis/Core/Application';
import { Request } from '@adonisjs/core/build/standalone';


export default class MomentsController {

  private validationOptions = {
    types:['image'],
    size: '2mb'
  }

  public async store({request,response}:HttpContextContract){  //inserção de dados no sistema

    const body = request.body();

    const image = request.file('image', this.validationOptions)
    if (image){
      //concatenação chave aleatória gerada pelo uuidv4 (para que a imagem tenha um nome único)
      //com a extensão da imagem (esse dado já vem no arquivo --metadados-- da imagem )
      const imageName = `${uuidv4()}.${image.extname}`

      //move-se a imagem para o local Application.tmpPath, pasta tmp/uploads no servidor e
      //nomeia-se ela com o imageName
      await image.move(Application.tmpPath('uploads'), {
        name: imageName
      })

      body.image = imageName //altearação do nome da imagem que veio no body da requisição
                             //para o nome que foi construído
    }

    const moment = await Moment.create(body); //o create funciona como um insert no BD
    response.status(201);

    return {
      message : 'Momento Criado com Sucesso',
      data: moment
    }
  }

  public async index() { //index é um metodo para obtenção de dados gerais
    const moments = await Moment.all() // o all captura todas as linhas da tabela
    return {
      data: moments
    }

  }

  public async show({params}:HttpContextContract){
    const moment = await Moment.findOrFail(params.id)
    return{
      data:moment
    }
  }

  public async destroy({params}:HttpContextContract){
    const moment = await Moment.findOrFail(params.id)
    await moment.delete()

    return{
      message: 'Momento excluído com sucesso !',
      data:moment
    }


  }

  public async update({params,request}:HttpContextContract){

    const body = request.body()
    const moment = await Moment.findOrFail(params.id)
    moment.title = body.title
    moment.description = body.description
    if ((moment.image != body.image)||!moment.image) {

      const image = request.file('image',this.validationOptions)
      if(image){
        const imageName = `${uuidv4()}.${image.extname}`
        await image.move(Application.tmpPath('uploads'),{name: imageName})
        moment.image = imageName
      }
    }
    await moment.save()

    return {
      message: 'Atualizado com sucesso !',
      data: moment
    }

  }
}
