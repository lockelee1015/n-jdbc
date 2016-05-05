var createDBClient = require('../src/createDBClient.js')
var connection
createDBClient('192.168.101.36', 1522)
    .then(function (dbClient) {
        return dbClient.getConnection('50HIP')
    }).then(function (conn) {
        connection = conn
        return connection.executeQuery('select * from test')
    }).then(function (result) {
        console.log(result)
    })

