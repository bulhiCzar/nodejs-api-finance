const fetch = require('node-fetch');

const YahooPrice = async (id) => {
    const url = `https://query1.finance.yahoo.com/v10/finance/quoteSummary/${id}?modules=price`
    try {
        const response = await fetch(url)
        const json = await response.json()
        const value = json.quoteSummary.result[0].price.regularMarketPrice.raw
        if (!value) return 0
        console.log(value)
        return value
    } catch (e) {
        console.log('err yahoo')
        throw e
    }
}

module.exports = YahooPrice