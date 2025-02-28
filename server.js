//requires
const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')
const {middlewareGlobal} = require('./src/middlewares/middleware')




app.use(express.static(path.resolve(__dirname, 'public')))

//session options




//show results of posts
app.use(express.urlencoded( { extended:true}))



//middleware
app.use(middlewareGlobal)





//routes
app.use(routes)

//views
app.set('views', path.resolve(__dirname , 'src', 'views'))
app.set('view engine', 'ejs')




//static
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(express.static(path.resolve(__dirname, 'frontend')))


app.listen(3000, () =>{
    console.log('acessar http://localhost:3000/')
    console.log('acessar http://localhost:3000/create')
})
    


