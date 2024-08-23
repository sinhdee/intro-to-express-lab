//import the express 
const express = require('express')

///initialize the app 
const app = express ()

//define a 'home' route 
app.get('/',(req,res)=>res.send('Express Lab Home'))

//start the listener method 
app.listen(3000, () =>console.log('Server is running'))

//requirements 
//attempt all excerises (4)
//only 3 of 4 need to work (1-3)