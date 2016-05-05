var connection = require('../connection')
var uuid = require('node-uuid')
module.exports = function (dbname) {
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
                var conn = new connection(this, connectionId)
                resolve(conn)
            }
        })
        var param = { id: id, method: 'getConnection', name: dbname, connectionId: connectionId }
        client.write(JSON.stringify(param))
    })
}

