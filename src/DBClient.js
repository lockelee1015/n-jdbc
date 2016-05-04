var methods = require('./methods')

var DBClient = function (client, callbackStore) {
    this.client = client
    this.callbackStore = callbackStore
}

for (var method in methods) {
    DBClient.prototype[method] = methods[method]
}

module.exports = DBClient