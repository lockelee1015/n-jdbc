module.exports = function () {
    var client = this.client
    var callbackStore = this.callbackStore
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
        var param = { id: id, method: 'rollback' }
        client.write(JSON.stringify(param))
    })
}
