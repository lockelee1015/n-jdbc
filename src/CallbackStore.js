var uuid = require('node-uuid')

function CallbackStore() {
    var callbackSet = {}
    function addCallback(callback) {
        var id = getUUID()
        callbackSet[id] = callback
        return id
    }

    function getCallback(id) {
        var callback = callbackSet[id]
        delete callbackSet[id]
        return callback
    }
    return { addCallback, getCallback }
}

function getUUID() {
    return uuid.v1()
}

module.exports = CallbackStore