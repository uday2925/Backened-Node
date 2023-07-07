bcrypt:- for hashing the password and storing in the dashboard.
jwt: for token genration.


Relationshipds.
1. Users can exist without notes. But notes can't exist with out users.
    ==> User is independent and notes is dependent.
2. In auth we will manipulate the req.body with the id of the user which will get by decoding the token and get the username or any other.