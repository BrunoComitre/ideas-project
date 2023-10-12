import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class DataEmbarked extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public embarked_c: number

    @column()
    public embarked_q: number

    @column()
    public embarked_s: number

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime
}
