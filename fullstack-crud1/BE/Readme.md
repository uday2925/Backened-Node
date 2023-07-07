# Notes Backend Project

This project provides APIs for various requirements using Express.js and Mongoose, with MongoDB as the database.

## API Endpoints

- User Registration:
  - POST `/users/register`

- User Login:
  - POST `/users/login`

- Notes:
  - Create a Note:
    - POST `/notes/create`

  - Delete a Note:
    - DELETE `/notes/:noteID`

  - Update a Note:
    - PATCH `/notes/:noteID`

  - Get Notes:
    - GET `/notes`

## Features

- Password Hashing:
  - The project utilizes bcrypt for secure password hashing and storing in the DB.

- Token Generation:
  - JWT (JSON Web Tokens) are used for token generation, which helps identify the user for each request.

## Relationships

- Users can exist without notes, but notes cannot exist without users.
- User is independent, and notes are dependent.
- In the authentication process, the `req.body` is manipulated with the user's ID, obtained by decoding the token and retrieving the username or other relevant information.

Feel free to modify and extend the project as per your requirements!

If you have any questions or need further assistance, please feel free to reach out.
