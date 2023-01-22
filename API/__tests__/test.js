const request = require('supertest');
const express = require('express');
const { check, body, validationResult } = require('express-validator');
const app = express();

let cardData = require("./../Data/Data").cardData;

console.log("Data is "+cardData)
app.use(express.json());


const baseURL = "http://localhost:3000"



describe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
  })

describe('GET /getAllCards', () => {
   
    it('It should return a 200 status and all records',async () =>{
        const response = await request(baseURL).get('/getAllCards');
        expect(response.statusCode).toBe(200);        
        expect(response.body).toEqual(cardData);
    })
});

describe('POST /addNewCard', () => {
    it('It should return a 201 status and a success message', async () => {
        const response = await request(baseURL)
            .post('/addNewCard')
            .send({ name: 'John Doe', cardNumber: '1234567890', limit: '10000' });
        expect(response.statusCode).toBe(201);
        expect(response.body).toEqual({ message: 'Card added successfully' });
        
    });

    it('It should return a 400 status and an error message if the card number already exists', async () => {
        const response = await request(baseURL)
            .post('/addNewCard')
            .send({ name: 'John Doe', cardNumber: '1234567890', limit: '10000' });
        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ message: 'The card alrady exisits' });
        
    });

    it('It should return a 400 status and an error message if the name is not in the correct format', async () => {
        const response = await request(baseURL)
            .post('/addNewCard')
            .send({ name: "John12", cardNumber: "1234567890", limit: "10000" });
        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ errors: [{value:"John12", param:"name",location:"body",msg: "Please provide the name in the write format"}] });
        
        
    });
});
