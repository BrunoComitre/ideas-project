import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Pclass extends BaseModel {
    @column({ isPrimary: true })
    public passenger_id: number

    @column()
    public pclass_one: number

    @column()
    public pclass_two: number

    @column()
    public pclass_three: number

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime
}
