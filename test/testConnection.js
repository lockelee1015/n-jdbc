var createDBClient = require('../src/createDBClient.js')
var host = '192.168.101.36'
var port = 1522

var dbClient = createDBClient(host, port)

dbClient.getConnection('hip').then(function () {
    console.log('getConnection success')
}).then(function () {
    return dbClient.closeConnection()
}).then(function () {
    console.log('connection closed')
})