const express = require("express");

const router = express.Router();

let arrayOfNumbers = []



router.post('/', (req, res)=> {

  console.log(req.body.number[0])
  const numbers = req.body.number;
 

  if(!Array.isArray(numbers)){

    return res.status(400).json({
      error: true,
      message: "Please provide an array of numbers",
    });


  }


  if(numbers.length != 1){
    return res.status(400).json({
      error: true,
      message: "Please provide an array of 500 numbers"
,
    })
  }

  const areAllNumbersFunction = (element) => {
    return typeof element === "number"
  }

  const areAllNumbers = numbers.every(areAllNumbersFunction);

  console.log(areAllNumbers);

  if(!areAllNumbers){
    return res.status(400).json({
      error: true,
      message: "Non numeric array elemnts present"
    })


    
  }
  arrayOfNumbers = numbers

  return res.status(200).json({
    error: true,
    message: "Well received",
  });







})



router.get('/', (req,res) => {
  if(arrayOfNumbers.length == 0){
     
  return res.status(200).json({
    error: true,
    message: "empty array",
  });
    

  }

  const sortedArray = arrayOfNumbers.sort((a,b)=> a - b );

  
  
  return res.status(200).json({
    error: false,
    message: sortedArray
  })

})






module.exports = router