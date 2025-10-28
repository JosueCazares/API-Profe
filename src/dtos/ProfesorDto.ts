import {PUESTO} from "@prisma/client";

export interface CreateProfesordto{
    numEMpleado : number;
    nombre : string
    puesto : PUESTO
    password : string
} 