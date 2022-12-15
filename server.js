const express = require('express');
const app = express();
//calling for server to start

const dotenv = require('dotenv').config()
// .env file is a file used to declare hidden information regarding the server, .env file is
// not pushed to github to keep for instance the PORT value hidden.

const PORT = process.env.PORT || 3000;
// creating variable port using PORT value.
// PORT value is fetched from .env , If .env value is missing makes 3000 the PORT value

app.get('/', (req, res) => {
    res.send('Hello Worlnd!');
  });


//Middleware
//app.use(express.json())
//app.use('/api')

//Server startup message.
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))