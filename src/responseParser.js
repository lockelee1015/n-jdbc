function responseParser(data) {
    var response = JSON.parse(data)
    return {
        id: response.id,
        result: { result: response.result, status: response.status, tips: response.tips }
    }
}

module.exports = responseParser