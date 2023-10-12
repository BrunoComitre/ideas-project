import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
    protected tableName = 'pclasses'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            // table.increments('passenger_id')
            table.integer('passenger_id').unsigned().references("titanics.passenger_id")
            table.integer('pclass_one')
            table.integer('pclass_two')
            table.integer('pclass_three')

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
