module.exports = function (sql) {
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
                    throw new Error(`failed query ${sql}`)
                }
            } else {
                resolve(result.result)
            }
        })
        var param = { id: id, connectionId: connectionId, method: 'executeQuery', sql: sql }
        client.write(JSON.stringify(param))
    })
}
