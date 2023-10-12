import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class DataCabin extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public cabin_a: number

    @column()
    public cabin_b: number

    @column()
    public cabin_c: number

    @column()
    public cabin_d: number

    @column()
    public cabin_e: number

    @column()
    public cabin_f: number

    @column()
    public cabin_g: number

    @column()
    public cabin_t: number

    @column()
    public cabin_u: number

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime
}
