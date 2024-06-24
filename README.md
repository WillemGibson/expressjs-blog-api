# expressjs-blog-api

## What API are we building?

This API will be a really, really barebones blog API. By "blog", we mean "users can write content and that content is viewable to other users" -- like a social network or journal or blog.

## Features

To give the blog some decent complexity and sensible usefulness, we'll aim for these features:

### User accounts

- User CRUD
  - Create: Any human can create user records in the database, one user per human
  - Read: Any user can view a user's information
  - Update: A user can update their own user information, or a user with the role "admin" can update any user's information.
  - Delete: A user can delete their own user information, or a user with the role "admin" can delete any user's information.

- User roles (eg. admin, regular, banned)
  - Users have a role which can be checked for in other functions throughout the API.
  - Roles available will be:
    - Regular: A user account is assigned to this by default. Regular users can only edit their own user data, and only edit their own blog posts.
    - Admin: A user account that can edit or delete any other user account and edit or delete any blog post.
    - Banned: A user account that cannot create blog posts.
- Blog posts
  - Post CRUD
    - Create: A post can be created by a user. A user is a required part of a blog post.
    - Read: Any human can view a blog post, no user account needed.
    - Update: A user can update blog posts that they created, or a user with the role "admin" can update any blog post.
    - Delete: A user can delete blog posts that they created, or a user with the role "admin" can update any blog post.
  - Per-user searching
    - List all blog posts made by a user
- Roles
  - Seeded with data
  - For the sake of keeping this project simple, no CRUD functionality is built for the roles.

### Database design for this API

Below is the expected structure of models or schemas that we'll set up in the MongoDB/Mongoose database later.

- User
  - Email: String. Plaintext value of a user's email address.
  - Password: String. Hashed and salted value of a user's password.
  - Username: String.
  - Country: String.
  - Role: Foreign key to a Role.

- Role
  - Name: String.
  - Description: String.

- Post
  - Title: String.
  - Content: String.
  - Author: Foreign key to a User.
  