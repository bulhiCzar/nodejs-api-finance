const fetch = require('node-fetch');

const YahooPrice = async (id) => {
    const url = `https://query1.finance.yahoo.com/v10/finance/quoteSummary/${id}?modules=price`
    // console.log("USAStockGetName. url для %s: %s", ID, url);
    try {
        const response = await fetch(url)
        const json = await response.json()
        const value = json.quoteSummary.result[0].price.regularMarketPrice.raw
        // console.log("USAStockGetName. Название для %s: %s", ID, value)
        if (value == 0) return 'нет'
        return value
    } catch (e) {
        console.log('Ошибка в USAStockGetName')
    }
}

module.exports = YahooPrice