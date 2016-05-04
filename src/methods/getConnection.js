module.exports = function (dbname) {
    var client = this.client
    var callbackStore = this.callbackStore
    var that = this
    return new Promise(function (resolve, reject) {
        var id = callbackStore.addCallback(function (result) {
            if (result.status === '-1') {
                if (!!reject) {
                    reject(tips)
                } else {
                    throw new Error(`failed connect to ${dbname}`)
                }
            } else {
                resolve()
            }
        })
        var param = { id: id, method: 'getConnection', name: dbname }
        client.write(JSON.stringify(param))
    })
}

