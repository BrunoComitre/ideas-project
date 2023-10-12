import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
    protected tableName = 'titanics'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('passenger_id')
            table.integer('survived')
            table.integer('pclass')
            table.text('name_person')
            table.text('sex')
            table.integer('age')
            table.integer('siblings_spouses_aboard')
            table.integer('parents_children_aboard')
            table.text('ticket')
            table.integer('fare')
            table.text('cabin')
            table.text('embarked')

            /**
             * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
             */
            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
