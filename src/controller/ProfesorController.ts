import type {Request,Response} from 'express'
import type {APIResponse} from '@/lib/types'
import {z,type ZodIssue} from 'zod'
import {CreateProfesorCommand} from '@/commands/CreateProfesorCommand'
import {UpdateProfesorCommand} from '@/commands/UpdateProfesorController'
import type {Profesor} from '@prisma/client'


export const createLibro = async (req:Request,res:Response)=>{
    try{
        const command = new CreateProfesorCommand();
        const newProfesor = await command.execute(req.body);

         let responseOk: APIResponse<Profesor> = {
            status: 'success',
            data: newProfesor
        }
        return res.status(201).json(responseOk)
    }catch(error){
          let responseError: APIResponse<Error> = {
                status: "error",
                error: "Error en el servidor"
            }
            if (error instanceof z.ZodError) {
                let responseErrorZod:APIResponse<ZodIssue[]> = {
                    status: "error",
                    error: "Datos invalidos",
                    data: error.errors
                }
                console.log(error);
                return res.status(400).json(responseErrorZod)
            }
            console.log(error);
            return res.status(500).json(responseError) 

    }
}
 
export const updateProfesor = async (req: Request, res: Response) => {
    try{
       
        

        const command = new UpdateProfesorCommand();
        const updateProfesor = await command.execute(req.body);

        let responseOk: APIResponse<Profesor> = {
            status: 'success',
            data: updateProfesor
        }
        return res.status(201).json(responseOk)
        
        } catch (error) {
            let responseError: APIResponse<Error> = {
                status: "error",
                error: "Error en el servidor"
            }
            if (error instanceof z.ZodError) {
                let responseErrorZod:APIResponse<ZodIssue[]> = {
                    status: "error",
                    error: "Datos invalidos",
                    data: error.errors
                }
                console.log(error);
                return res.status(400).json(responseErrorZod)
            }
            console.log(error);
            return res.status(500).json(responseError)
        }
}