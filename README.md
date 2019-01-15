# waterDB
Firebase charge me 27 usd after my database run out of free tier. Now I made alternative firebase.
> waterDB is lowdb-realtime-wrapper using socket.io


# Guide

Simple start waterDB

Server-side
```
  git clone https://github.com/msp5382/waterDB.git
  cd waterDB*
  yarn dev
```

waterDB will start with port 5500, You can change in ./src/index.js file

Client-side
```
  <script src="/socket.io/socket.io.js"></script>
  <script>
  var socket = io('http://localhost:5500/');
  var path = "/" some path to listen
    socket.emit('listen',{ // listen to change in path
        path:path
    })
  
    socket.on(path,(d) => {
        console.log(d) // do with change in path
    })
  </script>
```

# Path

```
  '/' mean root, You can't push to this.
  'foo.bar' is nasted json,
  'foo.bar' = 'baz' is like this
  {
    "foo":{
      "bar":"baz"
    }
  }
```
# USAGE

> note: all route is POST method Content-Type:application/json


## Set 
Set is for set a value in database

```
  Assume we have blank database 
  {}
  
  request body 
  {
    "path":"foo.bar",
    "content":"baz"
  }
  
  POST to /set/
  
  database will like 
  {
    "foo":{
      "bar":"baz"
    }
  }
```

## Push
Push value to array.
```
  Assume we have blank database 
  {}
  
  request body 
  {
    "path":"foo.bar",
    "content":"baz"
  }
  
  POST to /push/ 2 times
  
  database will like 
  {
    "foo":{
      "bar":["baz","baz"]
    }
  }
```

## Increse
Increse or Decrese number in database
```
  Assume we have blank database 
  {}
  
  request body 
  {
    "path":"foo",
    "value": 1 //can be any int, to decrese just use negative number like -1
  }
  
  POST to /increse/
  
  database will like 
  // if "foo" exist the value will add to "foo" value
  {
    "foo": 1
  }
```


## Read
Read value once.
```
  Assume we have database 
  {
    "foo":{
      "bar":"baz"
    }
  }
  
  request body 
  {
    "path":"foo"
  }
  
  POST to /read/
  
  response be like
  { "bar":"baz" }
```


## Select
Find in list.
```
  Assume we have database 
  {
    "foo":{
      "bar":[
      {"id":1,"name":"somchai"},
      {"id":2,"name":"sommai"},
      {"id":3,"name":"somsan"}
      ]
    }
  }
  
  request body 
  {
    "path":"foo.bar",
    "selector":{"id":2}
  }
  
  POST to /select/
  
  response be like
  {"id":2,"name":"sommai"}
  
```


## Deleting Path

```
  Assume we have database 
  {
    "foo":{
      "bar":"baz"
    }
  }
  
  request body 
  {
    "path":"foo.bar",
    "content":null
  }
  
  POST to /set/
  
  database will like 
  {
    "foo":{}
  }
```

# Security
You can add "auth" key to request body
and validate it in validate function in ./src/index.js

# Hacking
View raw database at ./src/database/db.json ;)

# Contributing
Accept all. Thanks.

