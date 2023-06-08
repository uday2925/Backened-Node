entry point====>index.js==>use express to make api endpoints.



db.js=>  using mongoose connect to the mongodb atlass database.


-->userRoutes==> taking us to user routes.
- Before registering the user we will hash the password by using bcrypt.
- Befor loggin in will be using hash function to verify the password. After login we will generate token by using jsonwebtoken which include 1.headers=>include algo and type and payload and signature.


==>ContentRoutes==> This person should be not autenticating.
==>moviesRouter===> we are checking the token and decode the token and if it is valid will allow the acess or else will show the jwt error message.


==>app.use(express.json)===> will enable us to post some thing to the data as it needs to convert the data to required format.



## Hashing vs Encryption.

encription:
initial="abc"====>encripted="bcd"
<hr/>

encription is based on the key which is used to encrypt based on this we can decrypt it.
**encription is reversible.**
<hr/>

**Hashing is not reversible.**
<hr/>
while registration.
initial="abcd"===> with the help of hash string====> it will converted to random string.
while authentication.
it will again hash using hasing function and it will be converted to same random string which will be compared to stored random string.
<hr/>
Hashing is not reversible but still can be cracked. As a string is converted specific number of combinations it is easy to get the password by using hashing library.
<hr/>
Solution is Salt rounds. Increasing the salt rounds will hashing is done that many times so it is difficult for them to crack. and we can't use it in what's app for sending messages because some of the combinations are not available in the dictionary so difficult for use to reverse when receiver recieved.

<hr/>

Best way to send the token is sending throgh headers.

fetch(ur;,{
    method:"POST",
    headers:{
        "Content-Type":"applicaiton/json",
        "Authorization":
    }
})

will send in headers
Key= Authorization,
value= Bearer token  (best practice to add bearer before the token and send it)
<hr/>
Blacklist
- We can blacklist a user forever.
- we can use them for logging out :- when user click on logut->make api call to /logout and send the users token and save it in blacklist. so that user will be logged out and can't access protecteed page.

<hr/>

Refresh tokens: Token which helps us to renewel old token with out logging in again.
- Along with the normal token, we will share one more token with it refresh token(this refresh token expiry(standard practice  is 28 days) will be greater than the nornal token expiry(7 day standard practice))==> refresh token will only be used to generate the token 