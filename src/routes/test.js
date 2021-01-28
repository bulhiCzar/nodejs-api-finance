const {Router} = require('express')

const route = Router()

route.post(
    '/',
    async (req, res, next) => {
        try {
            console.log(req)

            next()
        } catch (e) {
            res.status(403).json({data: 'Ошибка какая-то, повторите позже'})
        }
    }
)



module.exports = route