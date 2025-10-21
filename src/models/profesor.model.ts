import { prisma } from "../config/db";

export class ProfesorModel {
  static async getAll() {
    return prisma.profesor.findMany();
  }

  static async getById(numEMpleado: number) {
    return prisma.profesor.findUnique({ where: { numEMpleado } });
  }

  static async create(data: any) {
    return prisma.profesor.create({ data });
  }

  static async update(numEMpleado: number, data: any) {
    return prisma.profesor.update({ where: { numEMpleado }, data });
  }

  static async delete(numEMpleado: number) {
    return prisma.profesor.delete({ where: { numEMpleado } });
  }
}
