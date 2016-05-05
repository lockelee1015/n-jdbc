function connection(dbClient, connectionId) {
    this.dbClient = dbClient
    this.connectionId = connectionId
}
connection.prototype.executeQuery = require('./methods/executeQuery.js')
connection.prototype.executeUpdate = require('./methods/executeUpdate.js')
connection.prototype.setAutoCommit = require('./methods/setAutoCommit.js')
connection.prototype.commit = require('./methods/commit.js')
connection.prototype.rollback = require('./methods/rollback.js')
connection.prototype.close = require('./methods/closeConnection.js')
module.exports = connection
