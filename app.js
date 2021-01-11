const express = require('express')
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const pug = require("pug");
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(path.resolve(), "public")));
app.engine("pug", pug.__express);
app.set("views", path.join(path.resolve(), "views"));
app.set("view engine", "pug");


app.get('/', (req, res) => {
  res.render('index');
});
app.get('/privacy-policy',(req,res)=>{
  res.render('privacy-policy');
})

io.on('connection', (socket) => {
  console.log('a user connected');
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});