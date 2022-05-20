const express = require('express')
const cors = require('cors')
const app = express()
const port =  process.env.PROT || 5000

app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!I will add many route in this port.')
})
const users=[
  {id: 2,name:'puja',email: 'puja2@gmail.com'},
  {id: 3,name:'pujaa',email: 'puja3@gmail.com'},
  {id: 4,name:'pujaaa',email: 'puja4@gmail.com'},
  {id: 5,name:'pujaaaa',email: 'puja5@gmail.com'},
  {id: 6,name:'pujaaaaa',email: 'puja6@gmail.com'},
  {id: 7,name:'pujaaaaaa',email: 'puja7@gmail.com'}
]
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/users',(req,res)=>{
  res.send(users)

})
app.post('/user',(req,res) =>{
  console.log(req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
  console.log(user);
  // res.send('post method success')
})

// app.get('/user/:id',(req,res)=>{
//   console.log(req.params);
//   const user =users[req.params.id];
//   res.send(user);
// })