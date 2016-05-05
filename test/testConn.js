var createDBClient = require('../src/createDBClient.js')
var connections = []
var client
createDBClient('192.168.101.36', 1522)
    .then(function (dbClient) {
        client = dbClient
        return dbClient.getConnection('50HIP')
    })
    .then(function (conn) {
        return conn.executeQuery('select * from test')
    }).then(function (result) {
        console.log(result)
        return client.getConnection('50HIP')
    }).then(function (conn) {
        return conn.executeQuery('select * from test')
    }).then(function (result) {
        console.log(result)
    })

    // .then(function (result) {
    //     console.log(result)
    // })
    // .then(function () {
    //     return connection.executeUpdate(`INSERT INTO TEST VALUES('asdf')`)
    // })
    // .then(function () {
    //     return connection.setAutoCommit(false)
    // })
    // .then(function () {
    //     return connection.executeUpdate(`INSERT INTO TEST VALUES('should not exist')`)
    // })
    // .then(function () {
    //     return connection.rollback()
    // })
    // .then(function () {
    //     return connection.executeUpdate(`INSERT INTO TEST VALUES('I will be commit')`)
    // })
    // .then(function () {
    //     return connection.commit()
    // })
    // .then(function () {
    //     return connection.close()
    // })

