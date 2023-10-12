import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class DataRaw extends BaseModel {
    @column({ isPrimary: true })
    public passenger_id: number

    @column()
    public survived: number

    @column()
    public pclass: number

    @column()
    public name_person: string

    @column()
    public sex: string

    @column()
    public age: number

    @column()
    public siblings_spouses_aboard: number

    @column()
    public parents_children_aboard: number

    @column()
    public ticket: string

    @column()
    public fare: string

    @column()
    public cabin: string

    @column()
    public embarked: number

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime
}
