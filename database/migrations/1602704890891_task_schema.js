'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskSchema extends Schema {
  up () {
    this.create('tasks', (table) => {
      table.increments()

      table.integer("product_id", 80);
      table.integer("user_id", 80);
      table.integer("file_id", 80);
      table.string("title", 80);
      table.string("description", 80);
      table.date("duo_date", 80);
      table.timestamps()
    })
  }

  down () {
    this.drop('tasks')
  }
}

module.exports = TaskSchema
