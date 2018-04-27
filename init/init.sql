-- ---------------------------
-- ----- user table
-- ---------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
    `id` INT UNSIGNED AUTO_INCREMENT,
    `username` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='User Information';

-- ---------------------------
-- ----- topic table
-- ---------------------------
DROP TABLE IF EXISTS `topic`;
CREATE TABLE `topic` (
    `id` INT UNSIGNED AUTO_INCREMENT,
    `content` VARCHAR(100) NOT NULL,
    `author` VARCHAR(20) NOT NULL,
    `creattime` DATE NOT NULL,
    `imgurl` VARCHAR(250) NOT NULL,
    `issticky` BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Topic';
SET FOREIGN_KEY_CHECKS = 1;