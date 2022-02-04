const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.set('port', process.env.PORT || 8000)
const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.redirect('/api/users')
  })

/* START CONTROLLERS HERE */


const usersController = require('./controllers/userController')
app.use('/api/users/', usersController)



/* END CONTROLLERS HERE */

  app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message)
})

//=============================================================================
// START SERVER
//=============================================================================

app.listen(app.get('port'), () => {
  console.log('noice')
})