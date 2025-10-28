import type {CreateProfesordto} from '@/dtos/ProfesorDto'
import type { Profesor} from '@prisma/client'
import {ZodProfesorUpdate} from '@/validation/ZodProfesor'
import {z} from 'zod'
import {PrismaProfesorDao} from '@/dao/PrismaProfesorDao'
const profesorDao = new PrismaProfesorDao();

export class UpdateProfesorCommand {
    async execute(data: CreateProfesordto):Promise<Profesor> {
        const dataValidate = ZodProfesorUpdate.parse(data);

        if (!dataValidate) {
            throw new z.ZodError(dataValidate)
        }

        const findLibro = await profesorDao.getById(dataValidate.numeroEmpleado)

        if(!findLibro){
            throw new Error("Profesor no encontrado")
        }

        return await profesorDao.update(dataValidate.numeroEmpleado,{
            nombre: dataValidate.nombre,
            puesto: dataValidate.puesto,
            password: dataValidate.password
        });
    }
}
