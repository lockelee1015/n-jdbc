var koa = require('koa')
var app = koa()
var createDBClient = require('../src/createDBClient.js')
var host = '192.168.101.36'
var port = 1522

app.use(function* (next) {
    this.startTime = new Date()
    yield next
    this.endTime = new Date()
    console.log(`总体时间：${this.endTime.getTime() - this.startTime.getTime()}`)
})

app.use(function* (next) {
    var begin = new Date()
    var dbClient = yield createDBClient(host, port)
    var second = new Date()
    yield dbClient.getConnection('50HIP')
    var third = new Date()
    console.log(`开启socket时间${second.getTime() - begin.getTime()}`)
    console.log(`获取数据库连接时间${third.getTime() - third.getTime()}`)
    yield dbClient.closeConnection()
    this.dbClient = dbClient
    yield next
})

app.use(function* (next) {
    // var result = yield this.dbClient.executeQuery('SELECT * FROM TEST')
    this.body = 'result'
})

app.listen(3000)
