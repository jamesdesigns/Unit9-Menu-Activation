// JavaScript Document
/*jslint browser:true */
"use strict";

// Grab the location of the full URL / current page and drop it into a variable
var test = location.href;
console.log(test);

// Remove any # signs within the link ( in the WITHIN page links (#) )
var resultsArray = test.split('#');
console.log(resultsArray);

// var numberOfParts = resultsArray.length;
// console.log(numberOfParts);

var pieceIwant = resultsArray[0];
console.log('>>>' + pieceIwant);





// Target the GET info
var  getResultsArray = pieceIwant.split('?');
console.log(getResultsArray);

var numberOfParts = getResultsArray.length;
console.log(numberOfParts);

// This removes any trailing GET information from the URL (?)
var updatedUrl = getResultsArray[0];
console.log('>>>' + updatedUrl);

var urlParts = updatedUrl.split('/');
var pageName = urlParts[urlParts.length - 1];

// Gets all the () UL#mainmenu li a ) elements - the MENU items
var testList = document.querySelectorAll("ul#mainmenu li a");
console.log(testList);


// How to get the URL and reduce it to the page name
//var drill = "drill.php";
// var hammer = "hammer.php";

// Loop through all the links on the page
var i;
for (i=0; i<testList.length; i++) {
    var myPage = testList[i].getAttribute("href");
    console.log(myPage);


    // Compare the links on the page
    if (myPage.startsWith(pageName)) {
        testList[i].parentNode.className="active";
        if(testList[i].parentNode.parentNode.parentNode.tagName === 'LI'){
          testList[i].parentNode.parentNode.parentNode.className="parent";
        }
    } else {
        // IF there is NOT a match then turn it off
        testList[i].parentNode.className="";
    }

    /*
    // Compare the links on the page
    if (hammer === myPage) {
        testList[i].parentNode.className="active";
        testList[i].parentNode.parentNode.parentNode.className="parent";
    } else {
        // IF there is NOT a match then turn it off
        testList[i].parentNode.className="";
    }
    */



} // End of loop
