const YahooPrice = require("../modules/yahoo.price")

const {Router} = require('express')

const route = Router()

route.get(
    '/price/:id',
    async (req, res) => {
        try {
            const listId = req.params.id
            const list = listId.split(',')
            const arr = []

            for (let i=0; i < list.length; i++){
                try {
                    const token = list[i]
                    const res = await YahooPrice(token)
                    arr.push(res)
                } catch (e) {
                    arr.push({price: 0, cap: 0})
                }
            }
            console.log(arr)


            res.status(200).json({data: arr})
        } catch (e) {
            console.log(e)
            res.status(403).json({data: 'Ошибка какая-то, повторите позже'})
        }
    }
)


route.post(
    '/price',
    async (req, res) => {
        try {
            const {list} = req.body

            const arr = []
            for (let i=0; i < list.length; i++){
                try {
                    const token = list[i]
                    const res = await YahooPrice(token)
                    arr.push(res)
                } catch (e) {
                    arr.push(0)
                }
            }


            res.status(200).json({data: arr})
        } catch (e) {
            console.log(e)
            res.status(403).json({data: 'Ошибка какая-то, повторите позже'})
        }
    }
)


module.exports = route