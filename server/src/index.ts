import  express  from "express";

const app = express()


app.get('/', (req, res) => {

  res.send(`
  <div>
    Hello world
  </div>
  `)
})

// app.listen(1234, () => console.log('on listening port 1234'));