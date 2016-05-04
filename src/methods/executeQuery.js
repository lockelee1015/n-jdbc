module.exports = function (sql) {
    var client = this.client
    var callbackStore = this.callbackStore
    var that = this
    return new Promise(function (resolve, reject) {
        var id = callbackStore.addCallback(function (result) {
            if (result.status === '-1') {
                if (!!reject) {
                    reject(tips)
                } else {
                    throw new Error(`failed query ${sql}`)
                }
            } else {
                resolve()
            }
        })
        var param = { id: id, method: 'executeQuery', sql: sql }
        client.write(JSON.stringify(param))
    })
}