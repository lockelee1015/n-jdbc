var net = require('net')
var CallbackStore = require('./CallbackStore.js')
var responseParser = require('./responseParser.js')
var DBClient = require('./DBClient.js')

/**
 * 根据host,port和dbname来建立连接
 */
function createDBClient(host, port) {
    return new Promise(function (resolve, reject) {
        // 建立socket客户端
        var client = new net.Socket()
        //创建一个回调函数仓库
        var callbackStore = new CallbackStore()
        //根据上面两个来创建一个db客户端
        var dbClient = new DBClient(client, callbackStore)
        //连接客户端
        client.connect(port, host, function (err) {
            if (!!err) {
                reject(err)
            } else {
                // console.log('CONNECTED TO: ' + host + ':' + port)
                //连接上之后注册回调函数
                client.on('data', function (data) {
                    var resultJsonString = data.toString()
                    var response = responseParser(resultJsonString)
                    var id = response.id
                    var callback = callbackStore.getCallback(id)
                    callback(response.result)
                })
                //返回数据库客户端
                resolve(dbClient)
            }
        })
    })
}

module.exports = createDBClient
