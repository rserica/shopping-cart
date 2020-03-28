const express = require('express')
const app = express()
const port = process.env.PORT || 3000

//Middlewares
app.set('view engine', 'pug')
app.use(express.static('public'))

//Modules
const home = require('./routes/home')
const categories = require('./routes/categories')
const adminIndex = require('./routes/admin/index')
const adminCreate = require('./routes/admin/create')
const adminUpdate = require('./routes/admin/update')
const adminDelete = require('./routes/admin/delete')

app.get('/', home)
app.get('/categories', categories)
app.get('/admin', adminIndex)
app.get('/admin/create', adminCreate)
app.get('/admin/update', adminUpdate)
app.get('/admin/delete', adminDelete)

app.listen(port, () => console.log(`Shopping cart running on port ${port}!`))