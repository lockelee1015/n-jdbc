var methods = require('./methods')

var DBClient = function (client, callbackStore) {
    this.client = client
    this.callbackStore = callbackStore
}

DBClient.prototype.getConnection = methods.getConnection

module.exports = DBClient