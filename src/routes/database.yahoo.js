const YahooPrice = require("../modules/yahoo.price")

const {Router} = require('express')

const route = Router()

route.post(
    '/price',
    async (req, res) => {
        try {
            const {arr} = req.body
            const arrSend = []

            console.log(req.body)

            for (let i=0; i < arr.length; i++){
                const token = arr[i]
                const res = await YahooPrice(token)
                arrSend.push(res)
            }
            console.log(arrSend)


            res.status(200).json({data: arrSend})
        } catch (e) {
            res.status(403).json({m: 'Ошибка какая-то, повторите позже'})
        }
    }
)


module.exports = route