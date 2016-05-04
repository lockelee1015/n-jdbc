module.exports = function () {
    var client = this.client
    var callbackStore = this.callbackStore
    var that = this
    return new Promise(function (resolve, reject) {
        var id = callbackStore.addCallback(function (result) {
            if (result.status === '-1') {
                if (!!reject) {
                    reject(tips)
                } else {
                    throw new Error(`failed to start a transaction`)
                }
            } else {
                resolve()
            }
        })

        client.write(`{id:${id},method:'closeConnection'}`)
    })
}