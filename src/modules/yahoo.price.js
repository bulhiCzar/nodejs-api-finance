const fetch = require('node-fetch');

const YahooPrice = async (id) => {
    const url = `https://query1.finance.yahoo.com/v10/finance/quoteSummary/${id}?modules=price`
    try {
        const response = await fetch(url)
        const json = await response.json()

        const price = json.quoteSummary.result[0].price.regularMarketPrice.raw
        const capRAW = json.quoteSummary.result[0].price.marketCap.raw

        const cap = (capRAW / 1000000).toFixed(1)

        if (!price) return { price: 0, cap: 0}

        return {
            price,
            cap,
        }
    } catch (e) {
        throw e
    }
}

module.exports = YahooPrice