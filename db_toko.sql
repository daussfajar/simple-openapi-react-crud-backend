/*
 Navicat Premium Data Transfer

 Source Server         : LOCALHOST
 Source Server Type    : MySQL
 Source Server Version : 80031 (8.0.31)
 Source Host           : localhost:3306
 Source Schema         : db_toko

 Target Server Type    : MySQL
 Target Server Version : 80031 (8.0.31)
 File Encoding         : 65001

 Date: 22/07/2024 14:19:02
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for product_brands
-- ----------------------------
DROP TABLE IF EXISTS `product_brands`;
CREATE TABLE `product_brands`  (
  `brand_id` smallint UNSIGNED NOT NULL AUTO_INCREMENT,
  `brand_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `brand_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`brand_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product_brands
-- ----------------------------
INSERT INTO `product_brands` VALUES (1, 'Sony', 'High quality electronics', '2024-07-18 10:55:57', NULL);
INSERT INTO `product_brands` VALUES (2, 'Nike', 'Stylish and affordable clothing', '2024-07-18 10:55:57', NULL);
INSERT INTO `product_brands` VALUES (3, 'Ikea', 'Reliable home and kitchen products', '2024-07-18 10:55:57', NULL);
INSERT INTO `product_brands` VALUES (4, 'Penguin', 'Best-selling books and novels', '2024-07-18 10:55:57', NULL);
INSERT INTO `product_brands` VALUES (5, 'Lego', 'Fun and educational toys', '2024-07-18 10:55:57', NULL);

-- ----------------------------
-- Table structure for product_categories
-- ----------------------------
DROP TABLE IF EXISTS `product_categories`;
CREATE TABLE `product_categories`  (
  `category_id` smallint UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `category_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`category_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product_categories
-- ----------------------------
INSERT INTO `product_categories` VALUES (1, 'Electronics', 'Devices and gadgets', '2024-07-18 10:54:27', NULL);
INSERT INTO `product_categories` VALUES (2, 'Clothing', 'Apparel and accessories', '2024-07-18 10:54:27', NULL);
INSERT INTO `product_categories` VALUES (3, 'Home & Kitchen', 'Household items and kitchenware', '2024-07-18 10:54:27', NULL);
INSERT INTO `product_categories` VALUES (4, 'Books', 'Books and educational materials', '2024-07-18 10:54:27', NULL);
INSERT INTO `product_categories` VALUES (5, 'Toys', 'Toys and games', '2024-07-18 10:54:27', NULL);

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `category_id` smallint UNSIGNED NULL DEFAULT NULL,
  `price` decimal(10, 2) UNSIGNED NULL DEFAULT NULL,
  `stock` int UNSIGNED NULL DEFAULT NULL,
  `brand_id` smallint UNSIGNED NULL DEFAULT NULL,
  `sku` char(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 93 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (1, 'Sony WH-1000XM4', 'Noise Cancelling Wireless Headphones', 1, 349.99, 50, 1, 'SONYWH1000XM4', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (2, 'Nike Air Max 270', 'Breathable and comfortable sneakers', 2, 150.00, 200, 2, 'NIKEAM270', '2024-07-18 11:00:52', '2024-07-22 10:18:57');
INSERT INTO `products` VALUES (3, 'Ikea Billy Bookcase', 'Adjustable shelves, easy to assemble', 3, 79.99, 100, 3, 'IKEABILLY', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (4, 'Penguin Classics - 1984', 'Classic dystopian novel by George Orwell', 4, 9.99, 300, 4, 'PENGUIN1984', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (5, 'Lego Star Wars Millennium Falcon', 'Iconic starship from Star Wars', 5, 159.99, 75, 5, 'LEGOFALCON', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (6, 'Sony Alpha a7 III', 'Full-frame Mirrorless Camera', 1, 1999.99, 20, 1, 'SONYA7III', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (7, 'Nike Dri-FIT T-Shirt', 'Comfortable workout t-shirt', 2, 25.00, 150, 2, 'NIKEDRIFIT', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (8, 'Ikea Malm Bed Frame', 'Clean design with storage boxes', 3, 249.99, 50, 3, 'IKEAMALM', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (9, 'Penguin Classics - To Kill a Mockingbird', 'Pulitzer Prize-winning novel by Harper Lee', 4, 7.99, 200, 4, 'PENGUINMOCKINGBIRD', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (10, 'Lego Technic Bugatti Chiron', 'Detailed replica of the Bugatti Chiron', 5, 349.99, 40, 5, 'LEGOBUGATTI', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (11, 'Sony Bravia 55 Inch 4K TV', 'Ultra HD Smart TV with HDR', 1, 899.99, 30, 1, 'SONYBRAVIA55', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (12, 'Nike Running Shorts', 'Lightweight and breathable', 2, 35.00, 100, 2, 'NIKERUNSHORTS', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (13, 'Ikea Kallax Shelf Unit', 'Versatile storage with room for baskets', 3, 59.99, 120, 3, 'IKEAKALLAX', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (14, 'Penguin Classics - Pride and Prejudice', 'Classic romance novel by Jane Austen', 4, 6.99, 250, 4, 'PENGUINPRIDE', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (15, 'Lego Harry Potter Hogwarts Castle', 'Detailed model of Hogwarts School', 5, 399.99, 30, 5, 'LEGOHOGWARTS', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (16, 'Sony PlayStation 5', 'Next-gen gaming console', 1, 499.99, 100, 1, 'SONYPS5', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (17, 'Nike Flex Shoes', 'Flexible and comfortable for everyday wear', 2, 85.00, 120, 2, 'NIKEFLEX', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (18, 'Ikea Poäng Chair', 'Comfortable armchair with a modern design', 3, 79.99, 60, 3, 'IKEAPOANG', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (19, 'Penguin Classics - The Great Gatsby', 'Novel by F. Scott Fitzgerald', 4, 10.99, 150, 4, 'PENGUINGATSBY', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (20, 'Lego Creator Expert Roller Coaster', 'Build your own working roller coaster', 5, 379.99, 20, 5, 'LEGOROLLERCOASTER', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (21, 'Sony Xperia 1 II', 'Smartphone with advanced camera features', 1, 1149.99, 50, 1, 'SONYXPERIA1II', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (22, 'Nike ZoomX Vaporfly', 'High-performance running shoes', 2, 250.00, 90, 2, 'NIKEZOOMX', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (23, 'Ikea Hemnes Dresser', 'Classic design with ample storage', 3, 229.99, 45, 3, 'IKEAHEMNES', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (24, 'Penguin Classics - Moby Dick', 'Novel by Herman Melville', 4, 11.99, 180, 4, 'PENGUINMOBY', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (25, 'Lego Friends Central Perk', 'Set from the popular TV show Friends', 5, 59.99, 100, 5, 'LEGOFRIENDS', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (26, 'Sony WF-1000XM4', 'Wireless Noise Cancelling Earbuds', 1, 279.99, 80, 1, 'SONYWF1000XM4', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (27, 'Nike Pro Leggings', 'Comfortable and durable for workouts', 2, 50.00, 200, 2, 'NIKEPROLEGGINGS', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (28, 'Ikea Lack Coffee Table', 'Simple and stylish coffee table', 3, 49.99, 150, 3, 'IKEALACK', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (29, 'Penguin Classics - War and Peace', 'Epic novel by Leo Tolstoy', 4, 12.99, 100, 4, 'PENGUINWAR', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (30, 'Lego City Police Station', 'Build and play with the police station', 5, 99.99, 70, 5, 'LEGOPOLICE', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (31, 'Sony ZV-1', 'Compact camera for content creators', 1, 749.99, 30, 1, 'SONYZV1', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (32, 'Nike Air Force 1', 'Classic and stylish sneakers', 2, 90.00, 250, 2, 'NIKEAIRFORCE1', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (33, 'Ikea Ektorp Sofa', 'Comfortable and durable sofa', 3, 399.99, 40, 3, 'IKEAEKTORP', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (34, 'Penguin Classics - The Catcher in the Rye', 'Novel by J.D. Salinger', 4, 8.99, 130, 4, 'PENGUINCATCHER', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (35, 'Lego Technic Lamborghini Sián', 'Detailed replica of the Lamborghini Sián', 5, 379.99, 25, 5, 'LEGOLAMBO', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (36, 'Sony WH-CH710N', 'Wireless Noise Cancelling Headphones', 1, 199.99, 70, 1, 'SONYWHCH710N', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (37, 'Nike Sportswear Club Hoodie', 'Comfortable and stylish hoodie', 2, 55.00, 180, 2, 'NIKESPORTSCLUB', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (38, 'Ikea Pax Wardrobe', 'Customizable wardrobe with sliding doors', 3, 799.99, 20, 3, 'IKEAPAX', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (39, 'Penguin Classics - Crime and Punishment', 'Novel by Fyodor Dostoevsky', 4, 9.99, 160, 4, 'PENGUINCRIME', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (40, 'Lego Ninjago City Gardens', 'Build and explore Ninjago City', 5, 299.99, 35, 5, 'LEGONINJAGO', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (41, 'Sony SRS-XB43', 'Portable Bluetooth Speaker', 1, 249.99, 60, 1, 'SONYSRSXB43', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (42, 'Nike Blazer Mid', 'Retro and stylish sneakers', 2, 100.00, 140, 2, 'NIKEBLAZER', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (43, 'Ikea Tjusig Shoe Rack', 'Stylish and functional shoe rack', 3, 39.99, 90, 3, 'IKEATJUSIG', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (44, 'Penguin Classics - The Odyssey', 'Epic poem by Homer', 4, 14.99, 110, 4, 'PENGUINODYSSEY', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (45, 'Lego Creator Expert Bookshop', 'Detailed and modular bookshop', 5, 179.99, 50, 5, 'LEGOBOOKSHOP', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (46, 'Sony A8H OLED TV', '65 Inch 4K Ultra HD Smart OLED TV', 1, 1799.99, 15, 1, 'SONYA8H', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (47, 'Nike SB Dunk Low', 'Stylish and comfortable skate shoes', 2, 95.00, 130, 2, 'NIKESBDUNK', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (48, 'Ikea Algot Wall Upright', 'Versatile and space-saving storage', 3, 25.99, 80, 3, 'IKEALOT', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (49, 'Penguin Classics - Great Expectations', 'Novel by Charles Dickens', 4, 7.99, 140, 4, 'PENGUINEXPECTATIONS', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (50, 'Lego Jurassic World Indominus Rex', 'Build and play with Indominus Rex', 5, 129.99, 65, 5, 'LEGOINDOMINUS', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (51, 'Sony Xperia 5 II', 'Compact smartphone with advanced features', 1, 949.99, 45, 1, 'SONYXPERIA5II', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (52, 'Nike Air Max 90', 'Iconic and comfortable sneakers', 2, 120.00, 210, 2, 'NIKEAIRMAX90', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (53, 'Ikea Micke Desk', 'Functional and stylish desk', 3, 89.99, 70, 3, 'IKEAMICKE', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (54, 'Penguin Classics - Anna Karenina', 'Novel by Leo Tolstoy', 4, 12.99, 100, 4, 'PENGUINKARENINA', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (55, 'Lego Disney Castle', 'Build and explore the Disney Castle', 5, 349.99, 30, 5, 'LEGODISNEY', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (56, 'Sony RX100 VII', 'Compact camera with powerful zoom', 1, 1299.99, 25, 1, 'SONYRX100VII', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (57, 'Nike Therma Hoodie', 'Warm and comfortable hoodie', 2, 65.00, 190, 2, 'NIKETHERMA', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (58, 'Ikea Bekant Desk', 'Height-adjustable desk', 3, 299.99, 40, 3, 'IKEABEKANT', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (59, 'Penguin Classics - Les Misérables', 'Novel by Victor Hugo', 4, 11.99, 130, 4, 'PENGUINMISERABLES', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (60, 'Lego Mindstorms Robot Inventor', 'Build and program your own robots', 5, 359.99, 20, 5, 'LEGOROBOT', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (61, 'Sony Z9G 8K TV', '85 Inch 8K HDR Smart TV', 1, 12999.99, 5, 1, 'SONYZ9G', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (62, 'Nike React Infinity Run', 'Comfortable and durable running shoes', 2, 160.00, 150, 2, 'NIKEREACT', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (63, 'Ikea Skadis Pegboard', 'Organize your space with pegboards', 3, 14.99, 200, 3, 'IKEASKADIS', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (64, 'Penguin Classics - Dracula', 'Novel by Bram Stoker', 4, 8.99, 180, 4, 'PENGUINDRACULA', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (65, 'Lego Speed Champions Ferrari', 'Build and race your Ferrari', 5, 49.99, 100, 5, 'LEGOFERRARI', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (66, 'Sony HT-ST5000', '7.1.2ch 800W Dolby Atmos Soundbar', 1, 1499.99, 15, 1, 'SONYHTST5000', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (67, 'Nike Court Vision', 'Stylish and versatile sneakers', 2, 70.00, 160, 2, 'NIKECOURTVISION', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (68, 'Ikea Linnmon Table', 'Simple and functional table', 3, 29.99, 120, 3, 'IKEALINNMON', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (69, 'Penguin Classics - The Picture of Dorian Gray', 'Novel by Oscar Wilde', 4, 9.99, 140, 4, 'PENGUINDORIAN', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (70, 'Lego Star Wars AT-AT', 'Build and play with the AT-AT walker', 5, 159.99, 60, 5, 'LEGOATAT', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (71, 'Sony A1 OLED TV', '55 Inch 4K Ultra HD Smart OLED TV', 1, 2499.99, 10, 1, 'SONYA1OLED', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (72, 'Nike Air Max 97', 'Classic and stylish sneakers', 2, 170.00, 110, 2, 'NIKEAIRMAX97', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (73, 'Ikea Fjällbo TV Unit', 'Industrial-style TV unit', 3, 99.99, 50, 3, 'IKEAFJALLBO', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (74, 'Penguin Classics - Jane Eyre', 'Novel by Charlotte Brontë', 4, 7.99, 150, 4, 'PENGUINEYRE', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (75, 'Lego Architecture Statue of Liberty', 'Build the Statue of Liberty', 5, 119.99, 80, 5, 'LEGOLIBERTY', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (76, 'Sony SRS-XB33', 'Portable Bluetooth Speaker', 1, 129.99, 70, 1, 'SONYSRSXB33', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (77, 'Nike Air Max 720', 'Comfortable and stylish sneakers', 2, 180.00, 90, 2, 'NIKEAIRMAX720', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (78, 'Ikea Alex Drawer Unit', 'Stylish and practical drawer unit', 3, 79.99, 110, 3, 'IKEALEX', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (79, 'Penguin Classics - Wuthering Heights', 'Novel by Emily Brontë', 4, 8.99, 120, 4, 'PENGUINWUTHERING', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (80, 'Lego Creator Expert Fiat 500', 'Build and display the Fiat 500', 5, 89.99, 40, 5, 'LEGOFIAT', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (81, 'Sony X900H 65 Inch TV', '4K Ultra HD Smart LED TV', 1, 1399.99, 20, 1, 'SONYX900H', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (82, 'Nike Air Zoom Pegasus', 'Comfortable running shoes', 2, 120.00, 130, 2, 'NIKEPEGASUS', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (83, 'Ikea Poäng Footstool', 'Matching footstool for Poäng chair', 3, 30.00, 100, 3, 'IKEAPOANGSTOOL', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (84, 'Penguin Classics - The Brothers Karamazov', 'Novel by Fyodor Dostoevsky', 4, 13.99, 90, 4, 'PENGUINKARAMAZOV', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (85, 'Lego Speed Champions Porsche', 'Build and race your Porsche', 5, 49.99, 110, 5, 'LEGOPORSCHE', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (86, 'Sony WH-1000XM3', 'Noise Cancelling Wireless Headphones', 1, 299.99, 60, 1, 'SONYWH1000XM3', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (87, 'Nike Free RN', 'Lightweight running shoes', 2, 100.00, 140, 2, 'NIKEFREERN', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (88, 'Ikea Svalnäs Wall-Mounted Workspace', 'Flexible and space-saving workspace', 3, 199.99, 80, 3, 'IKEASVALNAS', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (89, 'Penguin Classics - Madame Bovary', 'Novel by Gustave Flaubert', 4, 10.99, 150, 4, 'PENGUINBOVARY', '2024-07-18 11:00:52', NULL);
INSERT INTO `products` VALUES (90, 'Lego City Fire Station', 'Build and play with the fire station', 5, 99.99, 60, 5, 'LEGOFIRE', '2024-07-18 11:00:52', NULL);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `email` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'John Rivaldy', 'john.rivaldy@gmail.com', '10470c3b4b1fed12c3baac014be15fac67c6e815', '2024-07-18 09:23:26');

SET FOREIGN_KEY_CHECKS = 1;
