const testReq = () =>{
    var arr = []

    // var TEXT = 1001145; // text
    // var TICKER = 1000041; // text

    // var query = db.getAPIQuery("/biotechdatabase/2"); // получаем объект запроса для листа с путем к листу

    // var entry = query.getAPIEntry(id);
    // var data = query.getAPIResultList(); // получаем объект записи для текущей записи

    var data = ['ADCT', 'PRVL', 'PRLD', 'BCAB', '1167.HK', 'ABCL']

    // for (var i = 0; i < data.length; i++) {
    data.forEach( async (item)=>{
        // var entry = data[i];
        // var token = entry.getFieldValue(TICKER)
        var token = item

        // SHPYY4HRR193JF3O
        // https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=SHPYY4HRR193JF3O
        // var res = await fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol='+token+'&apikey=SHPYY4HRR193JF3O')
        var res = await fetch('https://query1.finance.yahoo.com/v10/finance/quoteSummary/'+token+'?modules=price')
        res = await JSON.parse(res)
    // res = await res.json()

        var result = null

        if(res){
            console.log(res)
            result = res.quoteSummary.result[0].price.regularMarketPrice.raw
        }else{
            result = 'requre not has bin'
        }
        //var result = res.slice(0, 30)
        //var result = res
        // var text = result[0].regularMarketPrice.row

        arr.push(result)
        //entry.setFieldValue(TEXT, result)
        // entry.save();
        
    })
    return arr
}

//
console.log(testReq())

