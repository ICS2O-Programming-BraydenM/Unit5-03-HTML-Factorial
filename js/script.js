// Copyright (c) 2022 Brayden MacMillan All rights reserved
// Created by: Brayden MacMillan
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

 // This function displays the result of a product of two positive integers using a for loop with addition instead of multiplication 
function displayFactorials() {
	
	// get the two positive integers from the user 
	let firstNum = parseInt(document.getElementById('firstNum').value);

  let secondNum = parseInt(document.getElementById('secondNum').value);

	// initialize product as zero
	let product = 0;

  // use a for loop to calculate product of two positive integers solely using addition 
	for (let counter = 1; counter <= secondNum; counter++) {

    product = product + firstNum
  }

  	// return the result back to user
  	document.getElementById('display-results').innerHTML = "The product of these two positive integers is " + product
}