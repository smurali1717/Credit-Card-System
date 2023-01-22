const express = require('express');
const helmet = require("helmet");
const { check, body, validationResult } = require('express-validator');

const cors = require('cors');
let cardData = require("./Data/Data").cardData;
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(helmet());

app.get('/getAllCards', (req, res) => {
    try{    
        let responseData = cardData.map((data) => {
            return {
                name: data.name,
                cardNumber: data.cardNumber,
                limit: data.limit,
                balance: data.balance
            }
        });
        res.status(200).send(responseData);
    }catch(eException){
        console.log("Catch Block Error" + eException);
        res.status(400).send({ message: 'Bad Request'});
    }
});

app.post(
    '/addNewCard',
    
    /*Data validation rules starts here*/
    /*First validate the customer name in the given format*/
    body('name',"Please provide the name in the write format")
    .isLength({min:3, max:25})
    .notEmpty()   
    .matches(/^[a-z ,.'-]+$/i),
    
    /*Validate the Card Number in the given format*/
    body("cardNumber","Please provide the card number in the right format with 10 digits ")
    .isInt().withMessage("Input should be in number")
    .notEmpty()
    .isLength(10),

    /*Validate the Limit in the given format*/
    body("limit","Please provide the limit in the right format with 5 digits ")
    .isInt().withMessage("Input should be in number")
    .notEmpty()
    .isLength({max:5}),        
    
    (req, res) => {
        try{        
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            let { name, cardNumber, limit } = req.body;
            let balance =0;
            
            if(!cardData.find(data => data.cardNumber == cardNumber)){
                cardData.push({ name, cardNumber, limit, balance });
                res.status(201).send({ message: 'Card added successfully' });
            }else{
                res.status(400).send({ message: 'The card alrady exisits' });
            }
        }catch(eException){
            console.log("Catch Block Error" + eException);
            res.status(400).send({ message: 'Bad Request'});
        }    
    
});

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});


