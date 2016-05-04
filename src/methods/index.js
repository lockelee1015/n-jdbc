module.exports = {
    getConnection: require('./getConnection.js'),
    closeConnection: require('./closeConnection.js'),
    setAutoCommit: require('./setAutoCommit.js'),
    commit: require('./commit.js'),
    rollback: require('./rollback.js'),
    executeQuery: require('./executeQuery.js'),
    executeUpdate: require('./executeUpdate.js')
}