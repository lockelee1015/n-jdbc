var methods = require('./methods')

function connection(dbClient, connectId) {
    this.dbClient = dbClient
    this.connectId = connectId
}

connection.prototype.executeQuery = methods.executeQuery
connection.prototype.executeUpdate = methods.executeUpdate
connection.prototype.setAutoCommit = methods.setAutoCommit
connection.prototype.commit = methods.commit
connection.prototype.rollback = methods.rollback
connection.prototype.close = methods.closeConnection

module.exports = connection
