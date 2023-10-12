import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'
import { schema } from '@ioc:Adonis/Core/Validator'
import Titanic from 'App/Models/Titanic'
import { Request } from '@adonisjs/core/build/standalone'


export default class TitanicsController {
    public async index() {
        const raw = await Titanic.all()
        return {
            data: raw,
        }
    }

    public async store({ request, response }: HttpContextContract) {
        const body = request.body()

        const raw = await Titanic.create(body)

        response.status(201)

        return {
            message: 'Inserido com Sucesso!',
            data: raw,
        }
    }

    public async show({ params }: HttpContextContract) {

        const raw = await Titanic.findOrFail(params.id)

        return {
            data: raw,
        }
    }

    public async update({ params }: HttpContextContract) {
        // public async update({params, request}: HttpContextContract) {

        // const body = request.body()

        const raw = await Titanic.findOrFail(params.id)

        raw.passenger_id = raw.passenger_id
        raw.survived = raw.survived
        raw.pclass = raw.pclass
        raw.name_person = raw.name_person
        raw.sex = raw.sex
        raw.age = raw.age
        raw.siblings_spouses_aboard = raw.siblings_spouses_aboard
        raw.parents_children_aboard = raw.parents_children_aboard
        raw.ticket = raw.ticket
        raw.fare = raw.fare
        raw.cabin = raw.cabin
        raw.embarked = raw.embarked

        await raw.save()

        return {
            message: 'Passageiro Atualizado com Sucesso!',
            data: raw,
        }
    }

    public async destroy({ params }: HttpContextContract) {

        const raw = await Titanic.findOrFail(params.id)

        await raw.delete()

        return {
            message: 'Passageiro excluído com sucesso!',
            data: raw,
        }
    }

    public async handleFileUploader({ request, response }: HttpContextContract) {

        // const logo = await request.file('logo', {
        //     size: '5mb',
        //     extnames: ['jpg', 'png'],
        // })

        // if (!logo || !logo.isValid) return response.send({
        //     message: 'Problem with file!',
        // })

        const postData = await request.validate({
            schema: schema.create({
                logo: schema.file({
                    size: '5mb',
                    extnames: ['jpg', 'png'],
                }),
            })
        })

        await postData.logo.move(Application.tmpPath('logo-upload'))
        // await logo.move(Application.tmpPath('logo-upload'))

        return response.created({
            message: 'File Upload!',
        })
    }
}
