const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://mohamed:VSusS0kmpIr2uErv@firstapi.s4gtsfr.mongodb.net/Medilab')
.then(()=>{
    console.log('Connected to DB');
})
.catch(()=>{
    console.log('There is a problem in connected to DB !!');
})