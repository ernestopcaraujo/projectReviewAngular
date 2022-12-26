import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'comments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('username')
      table.string('text')

      //campo moment_id da tabela comments relaciona-se com o campo id da tabela moments
      //se o moment "tal" tiver "n" comentários e houver uma deleção desse moment, com
      //a atribuição de CASCADE ao onDelete() todos os comentários
      //associados à este moment também serão excluídos.
      //unsigned impõe que os valores no campo moment_id serão sempre positivos

      table.integer('moment_id').unsigned().references('moments.id').onDelete("CASCADE")

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
