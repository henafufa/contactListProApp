var express= require('express');
var app= express();

var bodyParser= require('body-parser');
var portNumber
= 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var users=[];
var userArray=[
    {
        "name":"Hana",
        "email":"han@gmail.com",
        "phone": "0912567890"
},
{
        "name":"abdi",
        "email":"abd@gmail.com",
        "phone": "0912567890"
},
    {
        "name":"helen",
        "email":"helen@gmail.com",
        "phone": "0912787890"
    },
    {
        "name":"kena",
        "email":"kena@gmail.com",
        "phone": "0912967690"
    }
];

app.get('/',function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/api/add',function(req,res){
    console.log('post request accepted');
    console.log(req.body);
    console.log(req.body.name);
    var user={};
    user.name=req.body.name;
    user.email=req.body.email;
    user.phone=req.body.phone;
    users.push(user);
    return res.send(user);
});

app.get('/api/addResponse', function(req,res){
    console.log('get response requested');
    return res.send(users);
});

app.get('/api/users', function(req,res){
    console.log('list of users requested');
    console.log(userArray);
    return res.send(userArray);

});
app.get('*',function(req, res){
    res.sendFile(__dirname + '/public/error.html');
});
app.listen(portNumber,function(res){
    console.log('The server running on '+portNumber);
});