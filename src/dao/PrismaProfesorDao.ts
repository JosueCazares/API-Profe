import { prisma } from "../db";

export class PrismaProfesorDao  {
  static async getAll() {
    return prisma.profesor.findMany();
  }

   async getById(numEMpleado: number) {
    return prisma.profesor.findUnique({ where: { numEMpleado } });
  }

  async create(data: any) {
    return prisma.profesor.create({ data });
  }

   async update(numEMpleado: number, data: any) {
    return prisma.profesor.update({ where: { numEMpleado }, data });
  }

}
