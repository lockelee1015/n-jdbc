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
                    that.rollback()
                    throw new Error(`failed update ${sql}`)
                }
            } else {
                resolve()
            }
        })
        var param = { id: id, method: 'executeUpdate', sql: sql }
        client.write(JSON.stringify(param))
    })
}
