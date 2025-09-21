-- CreateTable
CREATE TABLE `Profesor` (
    `numEMpleado` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `puesto` ENUM('RH', 'SE', 'PRF') NOT NULL,

    PRIMARY KEY (`numEMpleado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
