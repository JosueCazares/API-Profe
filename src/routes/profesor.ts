// Rutas para manejar operaciones CRUD en la entidad Alumno
import { Router } from 'express';  // Importamos Router para definir nuestras rutas.
import type { Request, Response } from 'express';  // Tipos de Express para Request y Response.
import { prisma } from '../db';  // Prisma es el cliente de la base de datos.
import type { APIResponse } from '../lib/types';  // Importamos el tipo de respuesta APIResponse.
import type { Profesor } from '@prisma/client';  // Importamos el tipo Alumno de Prisma.
import {handleZodError} from '../lib/handleZodError';  // Importamos Zod para validación de esquemas.
import { ZodProfesorObj,ZodProfesorIdPassObj } from '../validation/ZodProfesor';  // Esquema Zod para validar datos de Profesor.
import {createLibro,updateProfesor} from '@/controller/ProfesorController'
export const router = Router();  // Creamos un router para las rutas de alumno.

// Ruta GET: Obtiene la lista de profesores
router.get('/', async (_: Request, res: Response) => {
    let profesor = await prisma.profesor.findMany();  // Consulta a la base de datos para obtener todos los profesores.

    // Respuesta exitosa con la lista de profesores
    let responseOk: APIResponse<Profesor[]> = {
        status: 'success',
        data: profesor
    };

    return res.status(200).json(responseOk);  // Enviamos la respuesta con el código HTTP 200.
});

// Ruta POST: Crea un nuevo profesor
router.post('/',createLibro)

// Ruta PUT: Actualiza un profe existente
router.put('/', updateProfesor);

router.put('/pass', async (req: Request, res: Response) => {
    try {
        // Validamos los datos del request con Zod
        const camposValidados = ZodProfesorIdPassObj.parse(req.body);

        // Buscamos al profe por su ID
        let profesorBusqueda = await prisma.profesor.findUnique({
            where: { numEMpleado: camposValidados.numeroEmpleado },  // Asegúrate de usar findUnique en lugar de findFirst para buscar por ID.
        });

        if (!profesorBusqueda) {
            // Si no se encuentra el profe, enviamos un error 404.
            let responseError: APIResponse<Error> = {
                status: "error",
                error: "Profesor no encontrado"
            };
            return res.status(404).json(responseError);
        }

        // Si el profe existe, lo actualizamos
        let profesorActualizado = await prisma.profesor.update({
            where: { numEMpleado: camposValidados.numeroEmpleado },
            data: {
                password: camposValidados.password,
            }
        });

        // Respuesta exitosa con el alumno actualizado
        let responseOk: APIResponse<Profesor> = {
            status: 'success',
            data: profesorActualizado
        };
        return res.status(200).json(responseOk);  // Enviamos la respuesta con el código HTTP 200.
    } catch (error) {
        return handleZodError(res, error);  // Manejamos errores de validación Zod o cualquier otro error.
    }
});


