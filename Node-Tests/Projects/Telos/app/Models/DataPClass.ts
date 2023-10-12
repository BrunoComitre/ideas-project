import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class DataPClass extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public pclass_1: number

    @column()
    public pclass_2: number

    @column()
    public pclass_3: number

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime
}
