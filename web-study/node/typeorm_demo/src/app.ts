import express from 'express';
import "reflect-metadata";
import { User } from './entity/User';
import { DataSource, Like } from 'typeorm';
import bodyParser from 'body-parser';

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-method', 'GET,PUT,POST,DELETE,OPTIONS');
  next()
})

const AppDataSource = new DataSource({
  "type": "mysql",
  "host": "8.136.218.79",
  "port": 3306,
  "username": "root",
  "password": "Jeremy@17",
  "database": "db_book_dinner",
  "logging": true,
  "entities": [__dirname + "/entity/**.ts"]
});

AppDataSource.initialize().then(() => {
  console.log('Data Source has been initialized!')
}).catch(err => {
  console.log(err)
})

app.get('/getUserList', async (req, res) => {
  const {pageSize, pageNum} = req.query

  const result = await AppDataSource
    .getRepository(User)
    .find({
      order: {
        id: 'asc'
      },
      skip: Number(pageNum) * (Number(pageSize) - 1),
      take: Number(pageNum),
    })


  console.log(result)

  res.send(result)
})


app.get('/getOrders/:id', async (req, res) => {

  const id = req.params.id
  if (!id) {
    res.send('id is required')
    return
  }

  const user = await AppDataSource.getRepository(User)
    .find({
      relations: ['orders'],
    })
  res.send(user)
})


app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
