# Full Stack Blog app 

## Stack

## Frontend 
- ReactJS
- Recoil
- React Router
- Axios
- MUI
- Vite(TSX+SWC)
- React Quill

## Backend
- PHP
- Firebase/PHP-JWT

## Database
- MySQL

MySQL Database Schema:
```sql
Users:

CREATE TABLE `users` (
  `user_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_name` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_role` varchar(20) NOT NULL DEFAULT 'user',
  `user_status` int NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) 

desc users; -->

+---------------+-----------------+------+-----+---------+----------------+
| Field         | Type            | Null | Key | Default | Extra          |
+---------------+-----------------+------+-----+---------+----------------+
| user_id       | bigint unsigned | NO   | PRI | NULL    | auto_increment |
| user_email    | varchar(256)    | NO   |     | NULL    |                |
| user_password | varchar(256)    | NO   |     | NULL    |                |
| user_role     | varchar(20)     | NO   |     | user    |                |
| user_status   | int             | NO   |     | 0       |                |
| user_name     | varchar(100)    | YES  |     | NULL    |                |
+---------------+-----------------+------+-----+---------+----------------+

Posts:

CREATE TABLE `posts` (
  `post_id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `post_title` varchar(100) NOT NULL,
  `post_content` LONGTEXT NOT NULL,
  `user_id` BIGINT UNSIGNED NOT NULL,
  `category_id` INT NOT NULL,
  `created_at` DATETIME NOT NULL
  PRIMARY KEY (`post_id`)
  FORIEGN KEY (`user_id`) REFERENCES users(`user_id`)
  FORIEGN KEY (`category_id`) REFERENCES categories(`category_id`)
)

desc posts; -->
+--------------+-----------------+------+-----+---------+-------+
| Field        | Type            | Null | Key | Default | Extra |
+--------------+-----------------+------+-----+---------+-------+
| post_id      | bigint          | NO   | PRI | 1       |       |
| post_content | longtext        | NO   |     | NULL    |       |
| author_id    | bigint unsigned | NO   | MUL | NULL    |       |
| created_at   | datetime        | NO   |     | NULL    |       |
| category_id  | int             | YES  | MUL | 1       |       |
| post_title   | varchar(255)    | NO   |     | NULL    |       |
+--------------+-----------------+------+-----+---------+-------+

Categories:

CREATE TABLE `categories` (
  `category_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `category_name` varchar(255) NOT NULL,
)

desc categories; -->
+---------------+--------------+------+-----+---------+----------------+
| Field         | Type         | Null | Key | Default | Extra          |
+---------------+--------------+------+-----+---------+----------------+
| category_id   | int          | NO   | PRI | NULL    | auto_increment |
| category_name | varchar(255) | NO   |     | NULL    |                |
+---------------+--------------+------+-----+---------+----------------+

```

