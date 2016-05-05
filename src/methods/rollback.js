module.exports = function () {
    var dbClient = this.dbClient
    var connectionId = this.connectionId
    var callbackStore = dbClient.callbackStore
    var client = dbClient.client
    var that = this
    return new Promise(function (resolve, reject) {
        var id = callbackStore.addCallback(function (result) {
            if (result.status === '-1') {
                if (!!reject) {
                    reject(result.tips)
                } else {
                    throw new Error(`failed rollback transaction`)
                }
            } else {
                resolve()
            }
        })
        var param = { id: id, connectionId: connectionId, method: 'rollback' }
        client.write(JSON.stringify(param))
    })
}
