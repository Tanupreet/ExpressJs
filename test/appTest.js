const assert = require('chai').assert
let expect = require('chai').expect

const supertest = require('supertest');
const express = require('express');
const sinon = require('sinon')
const Book = require('../models/book')
let modelStub = sinon.stub(Book, 'find')
var url = supertest("http://localhost:3000")
const app = require('../app')


describe("Unit Testing", function(err) {
    it("should return addition", function(done) {
        url
            .post('/api/add/5/5')

            .end(function(err, res) {
                if (err)
                    throw err
                assert.equal(res.text, 10)
                done()
            })
    })

    it("should return multiplication", function(done) {
        url
            .post('/api/mul/5/5')
            .end(function(err, res) {
                if (err) throw err
                assert.equal(res.text, 25)
                done()
            })
    })


    /*beforeEach(()=>{
		
    	  modelStub.yields(null, [{name:'tanu'}])
    })*/
    it("find name", function(done) {
        modelStub.yields(null, [{ name: 'tanu' }])
        url
            .get('/api/find')
            .end(function(err, res) {
                if (err) throw err
                //console.log(res.body)
                expect({ name: 'tanu' }).to.deep.equal({ name: res.body[0].name });
                done()
            })
    })



})


/*

const assert= require('chai').assert
const api= require('../routes/new')
const express = require('express');
const app=express()

let supertest = require('supertest')
var url=supertest("http://localhost:3000")

describe("addition",function(err){
	it("should return addition",function(done){
		
		supertest(router)
		.post("/")
		.expect(200)
		.end(function(errapp.use('/api',api);,res){
			if(err)
				return err
		})
		assert.equal(10,post(5,5))
	})
})

const express = require('express')
 
const app = express();
 
api.get('/', function(req, res) {
  res.status(200).json({ name: 'tanu' });
});
 
request(api)
  .get('/')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });


  describe('GET /', function() {
  it('respond with json', function(done) {
    request(api)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});





describe('bookstore', function(){
	it('app should return string',function(){
		//let result= app;
		assert.equal(app, "hello")
	})
})


*/