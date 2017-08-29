let express = require('express')
let router= express.Router()
let bodyParser= require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
	extended:true
}))

router.post('/:a/:b',function(req,res) {
        let x=parseFloat(req.params.a)
		let y=parseFloat(req.params.b)
		let c=x+y
        res.send(c.toString())
    })
module.exports= router
