-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema zombie_survivor
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema zombie_survivor
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `zombie_survivor` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema zombie_survivor
-- -----------------------------------------------------
USE `zombie_survivor` ;

-- -----------------------------------------------------
-- Table `zombie_survivor`.`survivors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zombie_survivor`.`survivors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `age` INT NULL,
  `latitude` DECIMAL(10,8) NULL,
  `longitude` DECIMAL(10,8) NULL,
  `infected` TINYINT(1) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `zombie_survivor`.`resources`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zombie_survivor`.`resources` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `quantity` INT NULL,
  `survivors_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_resources_survivors_idx` (`survivors_id` ASC) VISIBLE,
  CONSTRAINT `fk_resources_survivors`
    FOREIGN KEY (`survivors_id`)
    REFERENCES `zombie_survivor`.`survivors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
