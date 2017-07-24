-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 24, 2017 at 12:12 PM
-- Server version: 10.1.22-MariaDB
-- PHP Version: 7.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mcc`
--

--
-- Dumping data for table `data_rows`
--

INSERT INTO `data_rows` (`id`, `data_type_id`, `field`, `type`, `display_name`, `required`, `browse`, `read`, `edit`, `add`, `delete`, `details`, `order`) VALUES
(1, 1, 'id', 'number', 'ID', 1, 0, 0, 0, 0, 0, '', 1),
(2, 1, 'author_id', 'text', 'Author', 1, 0, 1, 1, 0, 1, '', 2),
(3, 1, 'category_id', 'text', 'Category', 1, 0, 1, 1, 1, 0, '', 3),
(4, 1, 'title', 'text', 'Title', 1, 1, 1, 1, 1, 1, '', 4),
(5, 1, 'excerpt', 'text_area', 'excerpt', 1, 0, 1, 1, 1, 1, '', 5),
(6, 1, 'body', 'rich_text_box', 'Body', 1, 0, 1, 1, 1, 1, '', 6),
(7, 1, 'image', 'image', 'Post Image', 0, 1, 1, 1, 1, 1, '\n{\n    \"resize\": {\n        \"width\": \"1000\",\n        \"height\": \"null\"\n    },\n    \"quality\": \"70%\",\n    \"upsize\": true,\n    \"thumbnails\": [\n        {\n            \"name\": \"medium\",\n            \"scale\": \"50%\"\n        },\n        {\n            \"name\": \"small\",\n            \"scale\": \"25%\"\n        },\n        {\n            \"name\": \"cropped\",\n            \"crop\": {\n                \"width\": \"300\",\n                \"height\": \"250\"\n            }\n        }\n    ]\n}', 7),
(8, 1, 'slug', 'text', 'slug', 1, 0, 1, 1, 1, 1, '\n{\n    \"slugify\": {\n        \"origin\": \"title\",\n        \"forceUpdate\": true\n    }\n}', 8),
(9, 1, 'meta_description', 'text_area', 'meta_description', 1, 0, 1, 1, 1, 1, '', 9),
(10, 1, 'meta_keywords', 'text_area', 'meta_keywords', 1, 0, 1, 1, 1, 1, '', 10),
(11, 1, 'status', 'select_dropdown', 'status', 1, 1, 1, 1, 1, 1, '\n{\n    \"default\": \"DRAFT\",\n    \"options\": {\n        \"PUBLISHED\": \"published\",\n        \"DRAFT\": \"draft\",\n        \"PENDING\": \"pending\"\n    }\n}', 11),
(12, 1, 'created_at', 'timestamp', 'created_at', 0, 1, 1, 0, 0, 0, '', 12),
(13, 1, 'updated_at', 'timestamp', 'updated_at', 0, 0, 0, 0, 0, 0, '', 13),
(14, 2, 'id', 'number', 'id', 1, 0, 0, 0, 0, 0, '', 1),
(15, 2, 'author_id', 'text', 'author_id', 1, 0, 0, 0, 0, 0, '', 2),
(16, 2, 'title', 'text', 'title', 1, 1, 1, 1, 1, 1, '', 3),
(17, 2, 'excerpt', 'text_area', 'excerpt', 1, 0, 1, 1, 1, 1, '', 4),
(18, 2, 'body', 'rich_text_box', 'body', 1, 0, 1, 1, 1, 1, '', 5),
(19, 2, 'slug', 'text', 'slug', 1, 0, 1, 1, 1, 1, '{\"slugify\":{\"origin\":\"title\"}}', 6),
(20, 2, 'meta_description', 'text', 'meta_description', 1, 0, 1, 1, 1, 1, '', 7),
(21, 2, 'meta_keywords', 'text', 'meta_keywords', 1, 0, 1, 1, 1, 1, '', 8),
(22, 2, 'status', 'select_dropdown', 'status', 1, 1, 1, 1, 1, 1, '{\"default\":\"INACTIVE\",\"options\":{\"INACTIVE\":\"INACTIVE\",\"ACTIVE\":\"ACTIVE\"}}', 9),
(23, 2, 'created_at', 'timestamp', 'created_at', 1, 1, 1, 0, 0, 0, '', 10),
(24, 2, 'updated_at', 'timestamp', 'updated_at', 1, 0, 0, 0, 0, 0, '', 11),
(25, 2, 'image', 'image', 'image', 0, 1, 1, 1, 1, 1, '', 12),
(26, 3, 'id', 'number', 'id', 1, 0, 0, 0, 0, 0, NULL, 1),
(27, 3, 'name', 'text', 'name', 1, 1, 1, 1, 1, 1, NULL, 2),
(28, 3, 'email', 'text', 'email', 1, 1, 1, 1, 1, 1, NULL, 3),
(29, 3, 'password', 'password', 'password', 1, 0, 0, 1, 1, 0, NULL, 4),
(30, 3, 'remember_token', 'text', 'remember_token', 0, 0, 0, 0, 0, 0, NULL, 5),
(31, 3, 'created_at', 'timestamp', 'created_at', 0, 1, 1, 0, 0, 0, NULL, 6),
(32, 3, 'updated_at', 'timestamp', 'updated_at', 0, 0, 0, 0, 0, 0, NULL, 7),
(33, 3, 'avatar', 'image', 'avatar', 0, 1, 1, 0, 0, 1, NULL, 8),
(34, 5, 'id', 'number', 'id', 1, 0, 0, 0, 0, 0, '', 1),
(35, 5, 'name', 'text', 'name', 1, 1, 1, 1, 1, 1, '', 2),
(36, 5, 'created_at', 'timestamp', 'created_at', 0, 0, 0, 0, 0, 0, '', 3),
(37, 5, 'updated_at', 'timestamp', 'updated_at', 0, 0, 0, 0, 0, 0, '', 4),
(38, 4, 'id', 'number', 'id', 1, 0, 0, 0, 0, 0, '', 1),
(39, 4, 'parent_id', 'select_dropdown', 'parent_id', 0, 0, 1, 1, 1, 1, '{\"default\":\"\",\"null\":\"\",\"options\":{\"\":\"-- None --\"},\"relationship\":{\"key\":\"id\",\"label\":\"name\"}}', 2),
(40, 4, 'order', 'text', 'order', 1, 1, 1, 1, 1, 1, '{\"default\":1}', 3),
(41, 4, 'name', 'text', 'name', 1, 1, 1, 1, 1, 1, '', 4),
(42, 4, 'slug', 'text', 'slug', 1, 1, 1, 1, 1, 1, '', 5),
(43, 4, 'created_at', 'timestamp', 'created_at', 0, 0, 1, 0, 0, 0, '', 6),
(44, 4, 'updated_at', 'timestamp', 'updated_at', 0, 0, 0, 0, 0, 0, '', 7),
(45, 6, 'id', 'number', 'id', 1, 0, 0, 0, 0, 0, '', 1),
(46, 6, 'name', 'text', 'Name', 1, 1, 1, 1, 1, 1, '', 2),
(47, 6, 'created_at', 'timestamp', 'created_at', 0, 0, 0, 0, 0, 0, '', 3),
(48, 6, 'updated_at', 'timestamp', 'updated_at', 0, 0, 0, 0, 0, 0, '', 4),
(49, 6, 'display_name', 'text', 'Display Name', 1, 1, 1, 1, 1, 1, '', 5),
(50, 1, 'seo_title', 'text', 'seo_title', 0, 1, 1, 1, 1, 1, '', 14),
(51, 1, 'featured', 'checkbox', 'featured', 1, 1, 1, 1, 1, 1, '', 15),
(52, 3, 'role_id', 'text', 'role_id', 0, 1, 1, 0, 0, 1, NULL, 9),
(53, 7, 'id', 'checkbox', 'Id', 1, 0, 0, 0, 0, 0, NULL, 1),
(54, 7, 'info', 'text', 'Info', 1, 1, 1, 1, 1, 1, NULL, 2),
(55, 7, 'created_at', 'timestamp', 'Created At', 0, 1, 1, 0, 0, 1, NULL, 3),
(56, 7, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, NULL, 4),
(57, 8, 'id', 'checkbox', 'Id', 1, 0, 0, 0, 0, 0, NULL, 1),
(58, 8, 'user_id', 'select_multiple', 'User', 1, 1, 1, 1, 1, 1, '{\"relationship\":{\"key\":\"id\",\"label\":\"name\",\"page_slug\":\"admin/users\"}}', 2),
(59, 8, 'title', 'text', 'Title', 1, 1, 1, 1, 1, 1, NULL, 3),
(60, 8, 'tag', 'text', 'Tag', 0, 1, 1, 1, 1, 1, NULL, 4),
(61, 8, 'published_date', 'date', 'Published Date', 1, 1, 1, 1, 1, 1, NULL, 5),
(62, 8, 'content', 'rich_text_box', 'Content', 1, 1, 1, 1, 1, 1, NULL, 6),
(63, 8, 'created_at', 'timestamp', 'Created At', 0, 1, 1, 0, 0, 1, NULL, 7),
(64, 8, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, NULL, 8),
(65, 9, 'id', 'checkbox', 'Id', 1, 0, 0, 0, 0, 0, NULL, 1),
(66, 9, 'article_id', 'select_dropdown', 'Article', 1, 1, 1, 0, 0, 1, '{\"relationship\":{\"key\":\"id\",\"label\":\"title\",\"page_slug\":\"admin/articles\"}}', 2),
(67, 9, 'user_id', 'select_dropdown', 'User', 1, 1, 1, 0, 0, 1, '{\"relationship\":{\"key\":\"id\",\"label\":\"name\",\"page_slug\":\"admin/users\"}}', 3),
(68, 9, 'comment', 'checkbox', 'Comment', 1, 1, 1, 0, 0, 1, NULL, 4),
(69, 9, 'created_at', 'timestamp', 'Created At', 0, 1, 1, 0, 0, 1, NULL, 5),
(70, 9, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, NULL, 6),
(71, 10, 'id', 'checkbox', 'Id', 1, 0, 0, 0, 0, 0, NULL, 1),
(72, 10, 'job', 'text', 'Job', 1, 1, 1, 1, 1, 1, NULL, 2),
(73, 10, 'created_at', 'timestamp', 'Created At', 0, 1, 1, 0, 0, 1, NULL, 3),
(74, 10, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, NULL, 4),
(75, 11, 'id', 'checkbox', 'Id', 1, 0, 0, 0, 0, 0, NULL, 1),
(76, 11, 'language', 'text', 'Language', 1, 1, 1, 1, 1, 1, NULL, 2),
(77, 11, 'created_at', 'timestamp', 'Created At', 0, 1, 1, 0, 0, 1, NULL, 3),
(78, 11, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, NULL, 4),
(79, 12, 'id', 'checkbox', 'Id', 1, 0, 0, 0, 0, 0, NULL, 1),
(80, 12, 'name', 'text', 'Name', 1, 1, 1, 1, 1, 1, NULL, 3),
(81, 12, 'parent', 'select_dropdown', 'Parent', 0, 0, 1, 1, 1, 1, '{\"default\":\"\",\"null\":\"\",\"options\":{\"\":\"-- None --\"},\"relationship\":{\"key\":\"id\",\"label\":\"name\"}}', 2),
(82, 12, 'created_at', 'timestamp', 'Created At', 0, 1, 1, 0, 0, 1, NULL, 4),
(83, 12, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, NULL, 5),
(84, 13, 'id', 'checkbox', 'Id', 1, 0, 0, 0, 0, 0, NULL, 0),
(85, 13, 'order_id', 'select_dropdown', 'Order', 1, 1, 1, 0, 0, 1, '{\"relationship\":{\"key\":\"id\",\"page_slug\":\"admin/orders\"}}', 2),
(86, 13, 'rate', 'radio_btn', 'Rate', 1, 1, 1, 0, 0, 1, NULL, 3),
(87, 13, 'remark', 'text_area', 'Remark', 1, 1, 1, 0, 0, 1, NULL, 4),
(88, 13, 'created_at', 'timestamp', 'Created At', 0, 1, 1, 0, 0, 1, NULL, 5),
(89, 13, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, NULL, 6),
(90, 3, 'gender', 'radio_btn', 'Gender', 1, 1, 1, 0, 0, 1, '{\"default\":\"1\",\"options\":{\"1\":\"Pria\",\"2\":\"Wanita\"}}', 18),
(91, 3, 'born_place', 'text', 'Born Place', 1, 1, 1, 0, 0, 1, NULL, 10),
(92, 3, 'born_date', 'date', 'Born Date', 1, 1, 1, 0, 0, 1, NULL, 11),
(93, 3, 'religion', 'select_dropdown', 'Religion', 1, 1, 1, 0, 0, 1, '{\"default\":\"1\",\"options\":{\"1\":\"Islam\",\"2\":\"Kristen Protestan\",\"3\":\"Kristen Katolik\",\"4\":\"Hindu\",\"5\":\"Budha\",\"6\":\"Konghucu\",\"7\":\"Lainnya\"}}', 19),
(94, 3, 'race', 'text', 'Race', 0, 1, 1, 0, 0, 1, NULL, 12),
(95, 3, 'user_type', 'radio_btn', 'User Type', 1, 1, 1, 0, 0, 1, NULL, 13),
(96, 3, 'description', 'text_area', 'Description', 0, 1, 1, 0, 0, 1, NULL, 14),
(97, 3, 'profile_img_name', 'text', 'Profile Img Name', 0, 1, 1, 0, 0, 1, NULL, 15),
(98, 3, 'profile_img_path', 'text', 'Profile Img Path', 0, 1, 1, 0, 0, 1, NULL, 16),
(99, 3, 'status', 'radio_btn', 'Status', 1, 1, 1, 1, 0, 1, '{\"default\":\"0\",\"options\":{\"0\":\"Inactive\",\"1\":\"Active\"}}', 17),
(100, 14, 'id', 'checkbox', 'Id', 1, 0, 0, 0, 0, 0, NULL, 1),
(101, 14, 'user_id', 'select_dropdown', 'User', 1, 1, 1, 1, 1, 1, '{\"relationship\":{\"key\":\"id\",\"label\":\"name\",\"page_slug\":\"admin/users\"}}', 2),
(102, 14, 'amount', 'number', 'Amount', 1, 1, 1, 1, 1, 1, NULL, 3),
(103, 14, 'trc_type', 'select_dropdown', 'Transaction Type', 1, 1, 1, 1, 1, 1, NULL, 4),
(104, 14, 'trc_time', 'timestamp', 'Transaction Time', 1, 1, 1, 1, 1, 1, NULL, 5),
(105, 14, 'created_at', 'timestamp', 'Created At', 0, 1, 1, 0, 0, 1, NULL, 6),
(106, 14, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, NULL, 7),
(107, 15, 'id', 'checkbox', 'Id', 1, 0, 0, 0, 0, 0, NULL, 1),
(108, 15, 'amt', 'number', 'Amount', 1, 1, 1, 1, 1, 1, NULL, 2),
(109, 15, 'price', 'number', 'Price', 1, 1, 1, 1, 1, 1, NULL, 3),
(110, 15, 'created_at', 'timestamp', 'Created At', 0, 1, 1, 0, 0, 1, NULL, 4),
(111, 15, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, NULL, 5),
(112, 16, 'id', 'checkbox', 'Id', 1, 0, 0, 0, 0, 0, NULL, 1),
(113, 16, 'work_time', 'text', 'Work Time', 1, 1, 1, 1, 1, 1, NULL, 2),
(114, 16, 'created_at', 'timestamp', 'Created At', 0, 1, 1, 0, 0, 1, NULL, 3),
(115, 16, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, NULL, 4);

--
-- Dumping data for table `data_types`
--

INSERT INTO `data_types` (`id`, `name`, `slug`, `display_name_singular`, `display_name_plural`, `icon`, `model_name`, `controller`, `description`, `generate_permissions`, `server_side`, `created_at`, `updated_at`) VALUES
(1, 'posts', 'posts', 'Post', 'Posts', 'voyager-news', 'TCG\\Voyager\\Models\\Post', '', '', 1, 0, '2017-07-23 20:31:00', '2017-07-23 20:31:00'),
(2, 'pages', 'pages', 'Page', 'Pages', 'voyager-file-text', 'TCG\\Voyager\\Models\\Page', '', '', 1, 0, '2017-07-23 20:31:01', '2017-07-23 20:31:01'),
(3, 'users', 'users', 'User', 'Users', 'voyager-person', 'TCG\\Voyager\\Models\\User', NULL, NULL, 1, 0, '2017-07-23 20:31:01', '2017-07-23 20:49:26'),
(4, 'categories', 'categories', 'Category', 'Categories', 'voyager-categories', 'TCG\\Voyager\\Models\\Category', '', '', 1, 0, '2017-07-23 20:31:01', '2017-07-23 20:31:01'),
(5, 'menus', 'menus', 'Menu', 'Menus', 'voyager-list', 'TCG\\Voyager\\Models\\Menu', '', '', 1, 0, '2017-07-23 20:31:01', '2017-07-23 20:31:01'),
(6, 'roles', 'roles', 'Role', 'Roles', 'voyager-lock', 'TCG\\Voyager\\Models\\Role', '', '', 1, 0, '2017-07-23 20:31:01', '2017-07-23 20:31:01'),
(7, 'additional_infos', 'additional-infos', 'Additional Info', 'Additional Infos', 'voyager-list-add', 'App\\Models\\AdditionalInfo', NULL, NULL, 1, 0, '2017-07-23 20:33:13', '2017-07-23 20:33:13'),
(8, 'articles', 'articles', 'Article', 'Articles', 'voyager-news', 'App\\Models\\Article', NULL, NULL, 1, 0, '2017-07-23 20:35:37', '2017-07-23 20:35:37'),
(9, 'comments', 'comments', 'Comment', 'Comments', 'voyager-bubble', 'App\\Models\\Comment', NULL, NULL, 1, 0, '2017-07-23 20:36:28', '2017-07-23 20:36:55'),
(10, 'jobs', 'jobs', 'Job', 'Jobs', 'voyager-company', 'App\\Models\\Job', NULL, NULL, 1, 0, '2017-07-23 20:37:32', '2017-07-23 20:37:32'),
(11, 'languages', 'languages', 'Language', 'Languages', 'voyager-world', 'App\\Models\\Language', NULL, NULL, 1, 0, '2017-07-23 20:38:03', '2017-07-23 20:38:03'),
(12, 'places', 'places', 'Place', 'Places', 'voyager-location', 'App\\Models\\Place', NULL, NULL, 1, 0, '2017-07-23 20:40:38', '2017-07-23 20:41:01'),
(13, 'review_orders', 'review-orders', 'Review Order', 'Review Orders', NULL, 'App\\Models\\ReviewOrder', NULL, NULL, 1, 0, '2017-07-23 20:46:06', '2017-07-23 20:46:06'),
(14, 'wallet_transactions', 'wallet-transactions', 'Wallet Transaction', 'Wallet Transactions', 'voyager-dollar', 'App\\Models\\WalletTransaction', NULL, NULL, 1, 0, '2017-07-23 20:54:21', '2017-07-23 21:12:20'),
(15, 'wallets', 'wallets', 'Wallet', 'Wallets', 'voyager-wallet', 'App\\Models\\Wallet', NULL, NULL, 1, 0, '2017-07-23 20:54:57', '2017-07-23 20:54:57'),
(16, 'work_times', 'work-times', 'Work Time', 'Work Times', 'voyager-alarm-clock', 'App\\Models\\WorkTime', NULL, NULL, 1, 0, '2017-07-23 20:55:23', '2017-07-23 20:55:23');

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'admin', '2017-07-23 20:31:04', '2017-07-23 20:31:04');

--
-- Dumping data for table `menu_items`
--

INSERT INTO `menu_items` (`id`, `menu_id`, `title`, `url`, `target`, `icon_class`, `color`, `parent_id`, `order`, `created_at`, `updated_at`, `route`, `parameters`) VALUES
(1, 1, 'Dashboard', '/admin', '_self', 'voyager-boat', NULL, NULL, 1, '2017-07-23 20:31:04', '2017-07-23 20:31:04', NULL, NULL),
(2, 1, 'Media', '/admin/media', '_self', 'voyager-images', NULL, 12, 2, '2017-07-23 20:31:04', '2017-07-23 20:57:54', NULL, NULL),
(3, 1, 'Posts', '/admin/posts', '_self', 'voyager-news', NULL, 12, 3, '2017-07-23 20:31:04', '2017-07-23 20:57:54', NULL, NULL),
(4, 1, 'Users', '/admin/users', '_self', 'voyager-person', NULL, 23, 2, '2017-07-23 20:31:04', '2017-07-23 21:09:48', NULL, NULL),
(5, 1, 'Categories', '/admin/categories', '_self', 'voyager-categories', NULL, 12, 1, '2017-07-23 20:31:04', '2017-07-23 20:57:44', NULL, NULL),
(6, 1, 'Pages', '/admin/pages', '_self', 'voyager-file-text', NULL, 12, 4, '2017-07-23 20:31:04', '2017-07-23 20:57:54', NULL, NULL),
(7, 1, 'Roles', '/admin/roles', '_self', 'voyager-lock', NULL, 23, 1, '2017-07-23 20:31:04', '2017-07-23 21:09:45', NULL, NULL),
(8, 1, 'Tools', '', '_self', 'voyager-tools', NULL, NULL, 6, '2017-07-23 20:31:05', '2017-07-23 21:09:46', NULL, NULL),
(9, 1, 'Menu Builder', '/admin/menus', '_self', 'voyager-list', NULL, 8, 1, '2017-07-23 20:31:05', '2017-07-23 20:57:41', NULL, NULL),
(10, 1, 'Database', '/admin/database', '_self', 'voyager-data', NULL, 8, 2, '2017-07-23 20:31:05', '2017-07-23 20:57:41', NULL, NULL),
(11, 1, 'Settings', '/admin/settings', '_self', 'voyager-settings', NULL, NULL, 7, '2017-07-23 20:31:05', '2017-07-23 21:09:46', NULL, NULL),
(12, 1, 'Voyager Default', '', '_self', 'voyager-bread', '#000000', NULL, 5, '2017-07-23 20:57:31', '2017-07-23 21:09:46', NULL, ''),
(13, 1, 'Basic', '', '_self', 'voyager-receipt', '#000000', NULL, 3, '2017-07-23 20:59:00', '2017-07-23 21:09:46', NULL, ''),
(14, 1, 'Additional Infos', 'admin/additional-infos', '_self', 'voyager-list-add', '#000000', 13, 1, '2017-07-23 21:01:12', '2017-07-23 21:01:18', NULL, ''),
(15, 1, 'Articles', 'admin/articles', '_self', 'voyager-news', '#000000', 18, 1, '2017-07-23 21:01:36', '2017-07-23 21:03:28', NULL, ''),
(16, 1, 'Comments', 'admin/comments', '_self', 'voyager-bread', '#000000', 18, 2, '2017-07-23 21:02:06', '2017-07-23 21:03:32', NULL, ''),
(17, 1, 'Jobs', 'admin/jobs', '_self', 'voyager-company', '#000000', 13, 2, '2017-07-23 21:02:50', '2017-07-23 21:03:29', NULL, ''),
(18, 1, 'Content', '', '_self', 'voyager-file-text', '#000000', NULL, 4, '2017-07-23 21:03:18', '2017-07-23 21:09:46', NULL, ''),
(19, 1, 'Languages', 'admin/languages', '_self', 'voyager-world', '#000000', 13, 3, '2017-07-23 21:03:58', '2017-07-23 21:04:05', NULL, ''),
(20, 1, 'Places', 'admin/places', '_self', 'voyager-location', '#000000', 13, 4, '2017-07-23 21:04:39', '2017-07-23 21:04:45', NULL, ''),
(21, 1, 'Wallets', 'admin/wallets', '_self', 'voyager-wallet', '#000000', 13, 5, '2017-07-23 21:05:42', '2017-07-23 21:05:48', NULL, ''),
(22, 1, 'Work Times', 'admin/work-times', '_self', 'voyager-alarm-clock', '#000000', 13, 6, '2017-07-23 21:06:16', '2017-07-23 21:06:21', NULL, ''),
(23, 1, 'Management', '', '_self', 'voyager-helm', '#000000', NULL, 2, '2017-07-23 21:09:37', '2017-07-23 21:09:44', NULL, ''),
(24, 1, 'Review Orders', 'admin/review-order', '_self', 'voyager-check', '#000000', 23, 3, '2017-07-23 21:11:06', '2017-07-23 21:11:13', NULL, ''),
(25, 1, 'Wallet Transactions', 'admin/wallet-transactions', '_self', 'voyager-dollar', '#000000', 23, 4, '2017-07-23 21:12:12', '2017-07-23 21:12:27', NULL, '');

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `key`, `table_name`, `created_at`, `updated_at`, `permission_group_id`) VALUES
(1, 'browse_admin', NULL, '2017-07-23 20:31:05', '2017-07-23 20:31:05', NULL),
(2, 'browse_database', NULL, '2017-07-23 20:31:05', '2017-07-23 20:31:05', NULL),
(3, 'browse_media', NULL, '2017-07-23 20:31:05', '2017-07-23 20:31:05', NULL),
(4, 'browse_settings', NULL, '2017-07-23 20:31:05', '2017-07-23 20:31:05', NULL),
(5, 'browse_menus', 'menus', '2017-07-23 20:31:05', '2017-07-23 20:31:05', NULL),
(6, 'read_menus', 'menus', '2017-07-23 20:31:05', '2017-07-23 20:31:05', NULL),
(7, 'edit_menus', 'menus', '2017-07-23 20:31:05', '2017-07-23 20:31:05', NULL),
(8, 'add_menus', 'menus', '2017-07-23 20:31:05', '2017-07-23 20:31:05', NULL),
(9, 'delete_menus', 'menus', '2017-07-23 20:31:06', '2017-07-23 20:31:06', NULL),
(10, 'browse_pages', 'pages', '2017-07-23 20:31:06', '2017-07-23 20:31:06', NULL),
(11, 'read_pages', 'pages', '2017-07-23 20:31:06', '2017-07-23 20:31:06', NULL),
(12, 'edit_pages', 'pages', '2017-07-23 20:31:06', '2017-07-23 20:31:06', NULL),
(13, 'add_pages', 'pages', '2017-07-23 20:31:06', '2017-07-23 20:31:06', NULL),
(14, 'delete_pages', 'pages', '2017-07-23 20:31:06', '2017-07-23 20:31:06', NULL),
(15, 'browse_roles', 'roles', '2017-07-23 20:31:06', '2017-07-23 20:31:06', NULL),
(16, 'read_roles', 'roles', '2017-07-23 20:31:06', '2017-07-23 20:31:06', NULL),
(17, 'edit_roles', 'roles', '2017-07-23 20:31:06', '2017-07-23 20:31:06', NULL),
(18, 'add_roles', 'roles', '2017-07-23 20:31:06', '2017-07-23 20:31:06', NULL),
(19, 'delete_roles', 'roles', '2017-07-23 20:31:06', '2017-07-23 20:31:06', NULL),
(20, 'browse_users', 'users', '2017-07-23 20:31:06', '2017-07-23 20:31:06', NULL),
(21, 'read_users', 'users', '2017-07-23 20:31:06', '2017-07-23 20:31:06', NULL),
(22, 'edit_users', 'users', '2017-07-23 20:31:06', '2017-07-23 20:31:06', NULL),
(23, 'add_users', 'users', '2017-07-23 20:31:06', '2017-07-23 20:31:06', NULL),
(24, 'delete_users', 'users', '2017-07-23 20:31:06', '2017-07-23 20:31:06', NULL),
(25, 'browse_posts', 'posts', '2017-07-23 20:31:06', '2017-07-23 20:31:06', NULL),
(26, 'read_posts', 'posts', '2017-07-23 20:31:06', '2017-07-23 20:31:06', NULL),
(27, 'edit_posts', 'posts', '2017-07-23 20:31:06', '2017-07-23 20:31:06', NULL),
(28, 'add_posts', 'posts', '2017-07-23 20:31:06', '2017-07-23 20:31:06', NULL),
(29, 'delete_posts', 'posts', '2017-07-23 20:31:07', '2017-07-23 20:31:07', NULL),
(30, 'browse_categories', 'categories', '2017-07-23 20:31:07', '2017-07-23 20:31:07', NULL),
(31, 'read_categories', 'categories', '2017-07-23 20:31:07', '2017-07-23 20:31:07', NULL),
(32, 'edit_categories', 'categories', '2017-07-23 20:31:07', '2017-07-23 20:31:07', NULL),
(33, 'add_categories', 'categories', '2017-07-23 20:31:07', '2017-07-23 20:31:07', NULL),
(34, 'delete_categories', 'categories', '2017-07-23 20:31:07', '2017-07-23 20:31:07', NULL),
(35, 'browse_additional_infos', 'additional_infos', '2017-07-23 20:33:13', '2017-07-23 20:33:13', NULL),
(36, 'read_additional_infos', 'additional_infos', '2017-07-23 20:33:13', '2017-07-23 20:33:13', NULL),
(37, 'edit_additional_infos', 'additional_infos', '2017-07-23 20:33:13', '2017-07-23 20:33:13', NULL),
(38, 'add_additional_infos', 'additional_infos', '2017-07-23 20:33:13', '2017-07-23 20:33:13', NULL),
(39, 'delete_additional_infos', 'additional_infos', '2017-07-23 20:33:13', '2017-07-23 20:33:13', NULL),
(40, 'browse_articles', 'articles', '2017-07-23 20:35:37', '2017-07-23 20:35:37', NULL),
(41, 'read_articles', 'articles', '2017-07-23 20:35:37', '2017-07-23 20:35:37', NULL),
(42, 'edit_articles', 'articles', '2017-07-23 20:35:37', '2017-07-23 20:35:37', NULL),
(43, 'add_articles', 'articles', '2017-07-23 20:35:37', '2017-07-23 20:35:37', NULL),
(44, 'delete_articles', 'articles', '2017-07-23 20:35:37', '2017-07-23 20:35:37', NULL),
(45, 'browse_comments', 'comments', '2017-07-23 20:36:28', '2017-07-23 20:36:28', NULL),
(46, 'read_comments', 'comments', '2017-07-23 20:36:28', '2017-07-23 20:36:28', NULL),
(47, 'edit_comments', 'comments', '2017-07-23 20:36:28', '2017-07-23 20:36:28', NULL),
(48, 'add_comments', 'comments', '2017-07-23 20:36:28', '2017-07-23 20:36:28', NULL),
(49, 'delete_comments', 'comments', '2017-07-23 20:36:28', '2017-07-23 20:36:28', NULL),
(50, 'browse_jobs', 'jobs', '2017-07-23 20:37:32', '2017-07-23 20:37:32', NULL),
(51, 'read_jobs', 'jobs', '2017-07-23 20:37:32', '2017-07-23 20:37:32', NULL),
(52, 'edit_jobs', 'jobs', '2017-07-23 20:37:32', '2017-07-23 20:37:32', NULL),
(53, 'add_jobs', 'jobs', '2017-07-23 20:37:32', '2017-07-23 20:37:32', NULL),
(54, 'delete_jobs', 'jobs', '2017-07-23 20:37:32', '2017-07-23 20:37:32', NULL),
(55, 'browse_languages', 'languages', '2017-07-23 20:38:03', '2017-07-23 20:38:03', NULL),
(56, 'read_languages', 'languages', '2017-07-23 20:38:03', '2017-07-23 20:38:03', NULL),
(57, 'edit_languages', 'languages', '2017-07-23 20:38:03', '2017-07-23 20:38:03', NULL),
(58, 'add_languages', 'languages', '2017-07-23 20:38:03', '2017-07-23 20:38:03', NULL),
(59, 'delete_languages', 'languages', '2017-07-23 20:38:03', '2017-07-23 20:38:03', NULL),
(60, 'browse_places', 'places', '2017-07-23 20:40:38', '2017-07-23 20:40:38', NULL),
(61, 'read_places', 'places', '2017-07-23 20:40:38', '2017-07-23 20:40:38', NULL),
(62, 'edit_places', 'places', '2017-07-23 20:40:38', '2017-07-23 20:40:38', NULL),
(63, 'add_places', 'places', '2017-07-23 20:40:38', '2017-07-23 20:40:38', NULL),
(64, 'delete_places', 'places', '2017-07-23 20:40:38', '2017-07-23 20:40:38', NULL),
(65, 'browse_review_orders', 'review_orders', '2017-07-23 20:46:07', '2017-07-23 20:46:07', NULL),
(66, 'read_review_orders', 'review_orders', '2017-07-23 20:46:07', '2017-07-23 20:46:07', NULL),
(67, 'edit_review_orders', 'review_orders', '2017-07-23 20:46:07', '2017-07-23 20:46:07', NULL),
(68, 'add_review_orders', 'review_orders', '2017-07-23 20:46:07', '2017-07-23 20:46:07', NULL),
(69, 'delete_review_orders', 'review_orders', '2017-07-23 20:46:07', '2017-07-23 20:46:07', NULL),
(70, 'browse_wallet_transactions', 'wallet_transactions', '2017-07-23 20:54:21', '2017-07-23 20:54:21', NULL),
(71, 'read_wallet_transactions', 'wallet_transactions', '2017-07-23 20:54:21', '2017-07-23 20:54:21', NULL),
(72, 'edit_wallet_transactions', 'wallet_transactions', '2017-07-23 20:54:21', '2017-07-23 20:54:21', NULL),
(73, 'add_wallet_transactions', 'wallet_transactions', '2017-07-23 20:54:21', '2017-07-23 20:54:21', NULL),
(74, 'delete_wallet_transactions', 'wallet_transactions', '2017-07-23 20:54:21', '2017-07-23 20:54:21', NULL),
(75, 'browse_wallets', 'wallets', '2017-07-23 20:54:58', '2017-07-23 20:54:58', NULL),
(76, 'read_wallets', 'wallets', '2017-07-23 20:54:58', '2017-07-23 20:54:58', NULL),
(77, 'edit_wallets', 'wallets', '2017-07-23 20:54:58', '2017-07-23 20:54:58', NULL),
(78, 'add_wallets', 'wallets', '2017-07-23 20:54:58', '2017-07-23 20:54:58', NULL),
(79, 'delete_wallets', 'wallets', '2017-07-23 20:54:58', '2017-07-23 20:54:58', NULL),
(80, 'browse_work_times', 'work_times', '2017-07-23 20:55:23', '2017-07-23 20:55:23', NULL),
(81, 'read_work_times', 'work_times', '2017-07-23 20:55:23', '2017-07-23 20:55:23', NULL),
(82, 'edit_work_times', 'work_times', '2017-07-23 20:55:23', '2017-07-23 20:55:23', NULL),
(83, 'add_work_times', 'work_times', '2017-07-23 20:55:23', '2017-07-23 20:55:23', NULL),
(84, 'delete_work_times', 'work_times', '2017-07-23 20:55:23', '2017-07-23 20:55:23', NULL);

--
-- Dumping data for table `permission_role`
--

INSERT INTO `permission_role` (`permission_id`, `role_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1),
(21, 1),
(22, 1),
(23, 1),
(24, 1),
(25, 1),
(26, 1),
(27, 1),
(28, 1),
(29, 1),
(30, 1),
(31, 1),
(32, 1),
(33, 1),
(34, 1),
(35, 1),
(36, 1),
(37, 1),
(38, 1),
(39, 1),
(40, 1),
(41, 1),
(42, 1),
(43, 1),
(44, 1),
(45, 1),
(46, 1),
(49, 1),
(50, 1),
(51, 1),
(52, 1),
(53, 1),
(54, 1),
(55, 1),
(56, 1),
(57, 1),
(58, 1),
(59, 1),
(60, 1),
(61, 1),
(62, 1),
(63, 1),
(64, 1),
(65, 1),
(66, 1),
(69, 1),
(70, 1),
(71, 1),
(72, 1),
(74, 1),
(75, 1),
(76, 1),
(77, 1),
(78, 1),
(79, 1),
(80, 1),
(81, 1),
(82, 1),
(83, 1),
(84, 1);

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `display_name`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'Administrator', '2017-07-23 20:27:35', '2017-07-23 20:27:35'),
(2, 'user', 'Normal User', '2017-07-23 20:31:05', '2017-07-23 20:31:05');

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `key`, `display_name`, `value`, `details`, `type`, `order`) VALUES
(2, 'google_analytics_client_id', 'Google Analytics Client ID', 'AIzaSyDSrKwSmZci9mhs0cMoLdT1Uhc7Qk7Pk0c', NULL, 'text', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
