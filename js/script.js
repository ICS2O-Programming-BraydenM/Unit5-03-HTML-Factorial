// Copyright (c) 2022 Brayden MacMillan All rights reserved
// Created by: Brayden MacMillan
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

   // This function displays the factorial of numbers 
  function displayFactorials() {

  // initialize counter to zero and factorial to 1 
	let counter = 1;
  let facAnswer = 1;
	
	// get a positive integer from the user 
	let userNum = parseInt(document.getElementById('userNum').value);

  // use a do..while loop to calculate the factorial of a number 
	do {
   facAnswer = facAnswer * counter 
   //increment the counter 
   counter = counter + 1
  } while (counter <= userNum)

  // return the result back to user
  document.getElementById('display-results').innerHTML = "The factorial of this positive integer is " + facAnswer;
}