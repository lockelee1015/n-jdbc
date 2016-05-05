module.exports = function () {
    var dbClient = this.dbClient
    var connId = this.connId
    var callbackStore = dbClient.callbackStore
    var client = dbClient.client
    var that = this
    return new Promise(function (resolve, reject) {
        var id = callbackStore.addCallback(function (result) {
            if (result.status === '-1') {
                if (!!reject) {
                    reject(tips)
                } else {
                    throw new Error(`failed to closeConnection`)
                }
            } else {
                resolve()
            }
        })

        client.write(`{id:'${id}',connId: '${connId}',method:'closeConnection'}`)
    })
}