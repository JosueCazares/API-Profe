import { z } from "zod";
import {PUESTO} from '@prisma/client'

export const ZodProfesorObj = z.object({    
    nombre: z.string().min(2).max(100),
    puesto: z.nativeEnum(PUESTO),
    
});

export const ZodProfesorIdObj = z.object({    
    numeroEmpleado: z.number().min(1),
    nombre: z.string().min(2).max(100),  
});