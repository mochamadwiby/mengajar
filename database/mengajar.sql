/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1_3306
 Source Server Type    : MySQL
 Source Server Version : 100424
 Source Host           : 127.0.0.1:3306
 Source Schema         : mengajar

 Target Server Type    : MySQL
 Target Server Version : 100424
 File Encoding         : 65001

 Date: 22/08/2022 09:04:09
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for dosens
-- ----------------------------
DROP TABLE IF EXISTS `dosens`;
CREATE TABLE `dosens`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nip_dosen` bigint NULL DEFAULT NULL,
  `nama_dosen` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `alamat_dosen` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of dosens
-- ----------------------------
INSERT INTO `dosens` VALUES (1, 2340001, 'Pep Guardiola', 'Dsn Mambang RT/RW 003/001 Desa Tondowulan, Kec Plandaan, Kab. Jombang, Jawa Timur - 61456', '2022-08-21 05:20:24', '2022-08-21 05:20:24');

-- ----------------------------
-- Table structure for jurusans
-- ----------------------------
DROP TABLE IF EXISTS `jurusans`;
CREATE TABLE `jurusans`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `kode_jurusan` bigint NULL DEFAULT NULL,
  `nama_jurusan` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `jenjang_jurusan` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of jurusans
-- ----------------------------
INSERT INTO `jurusans` VALUES (1, 1, 'Pendidikan Bahasa Arab', 'S-1', '2022-08-21 06:09:13', '2022-08-21 06:09:13');
INSERT INTO `jurusans` VALUES (2, 2, 'Pendidikan Agama Islam', 'S-1', '2022-08-21 06:09:46', '2022-08-21 06:09:46');
INSERT INTO `jurusans` VALUES (3, 3, 'Ekonomi Syariah', 'S-1', '2022-08-21 06:10:07', '2022-08-21 06:10:07');
INSERT INTO `jurusans` VALUES (4, 4, 'Teknik Informatika', 'S-1', '2022-08-21 06:12:07', '2022-08-21 06:12:07');
INSERT INTO `jurusans` VALUES (5, 5, 'Sistem Informasi', 'S-1', '2022-08-21 06:12:23', '2022-08-21 06:12:23');
INSERT INTO `jurusans` VALUES (6, 6, 'Manajemen', 'S-1', '2022-08-21 06:12:39', '2022-08-21 06:12:39');
INSERT INTO `jurusans` VALUES (7, 7, 'Pendidikan Biologi', 'S-1', '2022-08-21 06:14:01', '2022-08-21 06:14:01');
INSERT INTO `jurusans` VALUES (8, 8, 'Pendidikan Fisika', 'S-1', '2022-08-21 06:15:54', '2022-08-21 06:15:54');
INSERT INTO `jurusans` VALUES (9, 9, 'Pendidikan Matematika', 'S-1', '2022-08-21 06:16:05', '2022-08-21 06:16:05');
INSERT INTO `jurusans` VALUES (10, 10, 'Pendidikan Bahasa Inggris', 'S-1', '2022-08-21 06:16:23', '2022-08-21 06:16:23');
INSERT INTO `jurusans` VALUES (11, 11, 'Agrobisnis', 'S-1', '2022-08-21 06:17:44', '2022-08-21 06:21:38');
INSERT INTO `jurusans` VALUES (12, 12, 'Argoeteknologi', 'S-1', '2022-08-21 06:18:59', '2022-08-21 06:18:59');
INSERT INTO `jurusans` VALUES (13, 13, 'Teknologi Hasil Pertanian', 'S-1', '2022-08-21 06:19:22', '2022-08-21 06:19:22');
INSERT INTO `jurusans` VALUES (14, 14, 'Rekayasa Pertanian & Biosistem', 'S-1', '2022-08-21 06:20:30', '2022-08-21 06:20:30');

-- ----------------------------
-- Table structure for mahasiswas
-- ----------------------------
DROP TABLE IF EXISTS `mahasiswas`;
CREATE TABLE `mahasiswas`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nim_mahasiswa` bigint NULL DEFAULT NULL,
  `nama_mahasiswa` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `alamat_mahasiswa` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of mahasiswas
-- ----------------------------
INSERT INTO `mahasiswas` VALUES (1, 1230000001, 'Maguire', 'Dsn Mambang RT/RW 003/001 Desa Tondowulan, Kec Plandaan, Kab. Jombang, Jawa Timur - 61456', '2022-08-19 23:55:48', '2022-08-20 00:04:49');
INSERT INTO `mahasiswas` VALUES (2, 1230000002, 'Eriksen', 'Dsn Mambang RT/RW 003/001 Desa Tondowulan, Kec Plandaan, Kab. Jombang, Jawa Timur - 61456', '2022-08-20 00:15:07', '2022-08-20 00:15:07');

-- ----------------------------
-- Table structure for matkuls
-- ----------------------------
DROP TABLE IF EXISTS `matkuls`;
CREATE TABLE `matkuls`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `kode_matkul` bigint NULL DEFAULT NULL,
  `nama_matkul` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `sks_matkul` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of matkuls
-- ----------------------------
INSERT INTO `matkuls` VALUES (1, 1, 'Dasar-Dasar Arsitektur Pemrograman', '3', '2022-08-21 07:13:29', '2022-08-21 07:13:29');
INSERT INTO `matkuls` VALUES (2, 2, 'Aljabar Linier', '3', '2022-08-21 07:13:41', '2022-08-21 07:13:41');
INSERT INTO `matkuls` VALUES (3, 3, 'Statistika dan Probabilitas', '3', '2022-08-21 07:13:56', '2022-08-21 07:13:56');
INSERT INTO `matkuls` VALUES (4, 4, 'Struktur Data dan Algoritma', '3', '2022-08-21 07:14:17', '2022-08-21 07:14:17');
INSERT INTO `matkuls` VALUES (5, 5, 'Kecerdasan Artifisial dan Sains Data Dasar', '3', '2022-08-21 07:14:36', '2022-08-21 07:14:36');
INSERT INTO `matkuls` VALUES (6, 6, 'Jaringan Komunikasi Data', '3', '2022-08-21 07:14:53', '2022-08-21 07:14:53');
INSERT INTO `matkuls` VALUES (7, 7, 'Komputer dan Masyarakat', '3', '2022-08-21 07:15:05', '2022-08-21 07:15:05');

-- ----------------------------
-- Table structure for mengajar
-- ----------------------------
DROP TABLE IF EXISTS `mengajar`;
CREATE TABLE `mengajar`  (
  `id_kuliah` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `semester` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `tahun` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_kuliah`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of mengajar
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
