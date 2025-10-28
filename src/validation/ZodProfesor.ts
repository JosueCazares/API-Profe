import { z } from "zod";
import {PUESTO} from '@prisma/client'

export const ZodProfesorObj = z.object({    
    nombre: z.string().min(2).max(100),
    puesto: z.nativeEnum(PUESTO),
    password: z.string()
    
});

export const ZodProfesorUpdate = z.object({    
    numeroEmpleado: z.number().min(1),
    nombre: z.string().min(2).max(100),
   puesto: z.nativeEnum(PUESTO),
    password: z.string()
});

export const ZodProfesorIdPassObj = z.object({    
    numeroEmpleado: z.number().min(1),
    password: z.string().min(2).max(100),  
});