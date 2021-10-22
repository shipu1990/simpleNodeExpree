// steps for node 
// . npm init 
// . nmp i express 
// express import kora
// app crete kora
// port set kora 
// . Create index.js 

const express =  require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.get('/', (req, res)=>{
    res.send('Hello From My App, Woow');
});

app.use(cors());
app.use(express.json());
const users = [
    {id:0, Name:'Sadif', Phone:'01815490897'},
    {id:1, Name:'Shipu', Phone:'01815490897'},
    {id:2, Name:'didar', Phone:'01815490897'},
    {id:3, Name:'shihab', Phone:'01815490897'},
    {id:4, Name:'tarun', Phone:'01815490897'},
    {id:5, Name:'Saju', Phone:'01815490897'},
    {id:6, Name:'Helal', Phone:'01815490897'},
    {id:7, Name:'Jahid', Phone:'01815490897'},
]

app.get('/users', (req, res)=>{
    const searchVal = req.query.search;
    console.log(searchVal);
    if(searchVal){
        const searchResult = users.filter(user=>user.Name.toLocaleLowerCase().includes(searchVal));
        res.send(searchResult);
    }else{
        res.send(users)
    }
})

app.post('/users',(req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hiting the post', req.body);
    res.json(newUser);
})

app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);

    console.log(req.params.id);
})

app.listen(port, ()=>{
    console.log('Listing to port');
})