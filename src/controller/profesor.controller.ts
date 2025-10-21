import type { Request, Response } from "express";
import { ProfesorModel } from "../models/profesor.model";
import { ZodProfesorObj } from "../validation/ZodProfesor";
import {handleZodError} from "../lib/handleZodError";

export const getProfesores = async (req: Request, res: Response) => {
  try {
    const profesores = await ProfesorModel.getAll();
    res.json({ success: true, data: profesores });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error al obtener profesores" });
  }
};

/* export const createProfesor = async (req: Request, res: Response) => {
  try {
    const parsed = ZodProfesorObj.parse(req.body);
    const profesor = await ProfesorModel.create(parsed);
    res.status(201).json({ success: true, data: profesor });
  } catch (error) {
    handleZodError(error, res);
  }
}; */
