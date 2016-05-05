var createDBClient = require('../src/createDBClient.js')
var host = '192.168.101.36'
var port = 1522

var dbClient = createDBClient(host, port).then(function (dbClient) {
    dbClient.getConnection('50HIP').then(function () {
        console.log('getConnection success')
    }).then(function () {
        return dbClient.executeQuery("select PASSWORD from JDF002_USER WHERE USERID='sa'")
    }).then(function (result) {
        return dbClient.setAutoCommit(false)
    }).then(function (result) {
        return dbClient.executeUpdate("INSERT INTO TEST VALUES('888567')")
    }).then(function (result) {
        return dbClient.executeUpdate("INSERT INTO TEST VALUES('888999')")
    }).then(function () {
        return dbClient.rollback()
    })
})

