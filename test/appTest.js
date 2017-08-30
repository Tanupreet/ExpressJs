const assert = require('chai').assert
let expect = require('chai').expect

const supertest = require('supertest');
const express = require('express');
const sinon = require('sinon')
const Book = require('../models/book')
let modelStub = sinon.stub(Book, 'find')
let modelStubPost = sinon.stub(Book.prototype, 'save')
let modelStubDel = sinon.stub(Book, 'remove')
var url = supertest("http://localhost:3000")
const app = require('../app')


describe("Unit Testing", function(err) {
   /* beforeEach(()=>{
    
        modelStub.yields(null, [{name:'tanu'}])
    })*/
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

 it("should return subtraction", function(done) {
        url
            .post('/api/sub/6/5')
            .end(function(err, res) {
                if (err) throw err
                assert.equal(res.text, 1)
                done()
            })
    })

 it("should return division", function(done){
 	url
 		.post('/api/div/6/6')
 		.end(function(err,res){
 			if (err) throw err
 				assert.equal(res.text,1)
 			done()
 		})
 })

  
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


    it("add name", function(done) {
   
        modelStubPost.yields(null, { name: 'tanu' })
        //request(app)
         url
            .post('/api/add')
            
            .end(function(err, res) {
                if (err) throw err
             //   console.log(res.body)
                expect({ name: 'tanu' }).to.deep.equal(res.body );
                done()
            })
    })


  it("delete name", function(done) {
      let st={name: 'tanu'}
        modelStubDel.withArgs({name: 'tanu'})
        .yields(null, { id: 1 })
        url
            .delete('/api/delete/tanu')
        
            .end(function(err, res) {
                if (err) throw err
             // console.log(res.body)
                expect({ id: 1 }).to.deep.equal(res.body);
                
            })
            done()
    })

})


