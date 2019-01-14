// waterDB on HTTP //

/*
waterDB on SSL

const fs = require('fs');
const http = require('http');
const https = require('https');

const privateKey = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/chain.pem', 'utf8');
*/

const socketIO = require("socket.io"),
  bodyParser = require("body-parser"),
  http = require("http"),
  express = require("express"),
  _ = require("lodash"),
  low = require('lowdb'),
  FileAsync = require('lowdb/adapters/FileAsync'),
  adapter = new FileAsync('./database/db.json')

const documentRoot = "/"

low(adapter).then(db =>{
  // our localhost port
  const port = 5500;

  const app = express();

  // support parsing of application/json type post data
  app.use(bodyParser.json());

  //support parsing of application/x-www-form-urlencoded post data
  app.use(bodyParser.urlencoded({ extended: true }));

  // our server instance
  const server = http.createServer(app);

  // This creates our socket using the instance of the server
  const io = socketIO(server);

  io.sockets.on("connection", function(socket) {
    socket.on("listen", function(param) {
      /*
      param format
        {
          path:path,
          auth:authid
        }
      */
      if(validate(param.path,"listen",path.auth)){
       socket.join(param.path);
      }
    });
  });

  app.post("/set/", function(req, res) {
    let path = pathParser(req.body.path) // main.sub.sub.sub
    console.log(pathParser(req.body.path))
    let json = req.body.content;
    if(validate(path,"set",req.body.auth)){
      if (_.some(json, "{") || _.some(json, "}")) {
        json = JSON.parse(json);
      }
      db.set(path, json).write();
    }
    broadcast(pathParser(req.body.path),db,io)
    res.send(200)
  });

  app.post("/push/", function(req, res) {
    let path = pathParser(req.body.path) // main.sub.sub.sub
    console.log(pathParser(req.body.path))
    let pathAvaliable;
    let json = req.body.content;
    let pathDat = db.get(path).value()

    if(path == documentRoot || path == documentRoot+'.'){
      pathAvaliable = false
    }else{
      if(Array.isArray(pathDat)){
        pathAvaliable = true
      }else if(_.isEmpty(pathDat)){
        db.set(path,[]).write()
        pathAvaliable = true
      }else{
        pathAvaliable = false
      }
    }


    if(pathAvaliable){
      if(validate(path,"push",req.body.auth)){
        if (_.some(json, "{") || _.some(json, "}")) {
          json = JSON.parse(json);
        }
        db.get(path).push(json).write();
      }

      broadcast(pathParser(req.body.path),db,io)
      res.send(200)
    }else{
      res.send(404)
    }
  });

  app.post("/read/", function(req, res) {
    let path = pathParser(req.body.path) // main.sub.sub.sub
    if(validate(path,"read",req.body.auth)){
        res.send(db.get(path).value())
    }
  });

  app.post("/select/", function(req, res) {
    let path = pathParser(req.body.path) // main.sub.sub.sub
    let selector = req.body.selector
    if(validate(path,"select",req.body.auth)){
      if (_.some(selector, "{") || _.some(selector, "}")) {
        selector = JSON.parse(selector);
      }
      res.send(db.get(path).find(selector).value())
    }
  });

  server.listen(port, () => console.log(`Listening on port ${port}`));
})

const broadcast = (path,db,io) => {
  io.emit(
    path,
    db
      .get(path)
      .value()
  );
}

const validate = (path,event,auth) => {
  return true
}

const pathParser = (...path) => {
  console.log(path)
  if(path[1]){
    return path
  }else{
    if(path[0] == documentRoot){
      return documentRoot
    }else{
      return documentRoot + '.' + path
    }
  }
}