Notes Backend Project for providing API's for all the requirements using express, mongoose and using mongoDB as data base.


API's- 
created for 
    - user registration - `/users/register`
    - user login - `/users/login`
    - Notes
        - POST - `/notes/create`
        - Delete - `/notes/:noteID`
        - patch -  `/notes/:noteID`
        - GET - `/notes`


bcrypt:- for hashing the password and storing in the dashboard.
jwt: for token generation.


Relationships.
1. Users can exist without notes. But notes can't exist with out users.
    ==> User is independent and notes is dependent.
2. In auth we will manipulate the req.body with the id of the user which will get by decoding the token and get the username or any other.