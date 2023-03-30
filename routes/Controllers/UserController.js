const express = require('express')
const router = express.Router()
const db = require('../../database/models/User')
router.use(express.json());

router.post('/api/user/register', async (req, res) => {
    try {
        let insertResult = (await db.insert(req.body))
        if(insertResult.status == 1){
            res.json({
                status: 1,
                message: 'Usuario registrado correctamente'
            })
        }else{
            res.json({
                status: 0,
                message: 'Ocurrió un error al registrar el usuario'
            })
        }
    } catch (error) {
        console.log(error)
        res.json({
            status: 0,
            message: 'Ocurrió un error interno al registrar el usuario'
        })
    }
})

module.exports = router