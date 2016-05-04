#n-jdbc

This is a easy dbClient for oracle database proxy by java.  
So this repo is only the node part  

###how to install

```
npm install --save n-jdbc
```

###how to use

```(javascript)
var createDBClient = require('n-jdbc').createDBClient
var dbClient = createDBClient('localhost',8080)
dbClient.getConnection('DBNAME')
dbClient.closeConnection()
```