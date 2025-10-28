import type {CreateProfesordto} from '@/dtos/ProfesorDto'
import type { Profesor} from '@prisma/client'
import {ZodProfesorObj} from '@/validation/ZodProfesor'
import {z} from 'zod'
import {PrismaProfesorDao} from '@/dao/PrismaProfesorDao'
const profesorDao = new PrismaProfesorDao();

export class CreateProfesorCommand {
    async execute(data: CreateProfesordto):Promise<Profesor> {
        const dataValidate = ZodProfesorObj.parse(data);

        if (!dataValidate) {
            throw new z.ZodError(dataValidate)
        }

        return await profesorDao.create({
            nombre: dataValidate.nombre,
            puesto: dataValidate.puesto,
            password: dataValidate.password
        });
    }
}