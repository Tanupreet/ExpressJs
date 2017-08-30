var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
let sinon= require('sinon')
mongoose.connect('mongodb://localhost/bookstore')
const Book = require('../models/book')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: true
}))

router.get('/', function(req, res) {
    Book.find({})
        .exec((err, emp) => {
            if (err)
                res.send("Error")
            else
                res.json(emp)

        })
})

/*router.post('/', function(req, res, next) {
    Book.create(req.body).then(function(data) {
        res.send(data)
    })

})
*/
router.put('/update/:id', function(req, res, next) {
    Book.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
        Book.findOne({ _id: req.params.id }).then(function(data) {
            res.send(data)

        })
    })
})


router.delete('/del/:id', function(req, res, next) {
    Book.findByIdAndRemove({ _id: req.params.id }).then(function(data) {
        res.send(data)
    })
})

//----------------------------------------------Test Cases----------------------------------------//



router.post('/add/:a/:b',function(req,res) {
        let x=parseFloat(req.params.a)
        let y=parseFloat(req.params.b)
        let c=x+y
        res.send(c.toString())


    })

router.post('/mul/:c/:d',function(req,res){
    let e=parseFloat(req.params.c)
    let f=parseFloat(req.params.d)
    let g=e*f
    res.send(g.toString())
})


router.get('/find', function(req, res) {
    Book.find((err, emp) => {
            if (err)
                res.send("Error")
            else
                res.json(emp)

        })
})

module.exports = router