const YahooPrice = require("../modules/yahoo.price")

const {Router} = require('express')

const route = Router()

route.get(
    '/price/:id',
    async (req, res) => {
        try {
            const listId = req.params.id
            const list = listId.split(',')
            const arrSend = []

            console.log(list)

            for (let i=0; i < list.length; i++){
                const token = list[i]
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