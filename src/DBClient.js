var methods = require('./methods')
var connection = require('./connection')
var uuid = require('node-uuid')

var DBClient = function (client, callbackStore) {
    this.client = client
    this.callbackStore = callbackStore
}

DBClient.prototype.getConnection = function (dbname) {
    var client = this.client
    var callbackStore = this.callbackStore
    var that = this
    var connectionId = uuid.v1()
    return new Promise(function (resolve, reject) {
        var id = callbackStore.addCallback(function (result) {
            if (result.status === '-1') {
                if (!!reject) {
                    reject(result.tips)
                } else {
                    throw new Error(`failed connect to ${dbname}`)
                }
            } else {
                var conn = new connection(that, connectionId)
                resolve(conn)
            }
        })
        var param = { id: id, method: 'getConnection', name: dbname, connectionId: connectionId }
        client.write(JSON.stringify(param))
    })
}

DBClient.prototype.close = function () {
    this.client.close()
}

module.exports = DBClient