/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
function itIsLong(str) {
    if(str.length >20 ) {
      return "That's a long string!";

  }
}
function isItMedium(str) {
  if (str.length >= 10 && str.length <= 20) {
    
     return "That's a regular sized string!";
  }

}

function isItShort(str) {
   if (str.length < 10) {
    return "That's a small string!";
   } else {
    return "That's not a small string!";
   }
}

function howLongIsMyString (str) {
  if(str.length > 20) {
    return "That's a long string!";
  }
   else if (str.length >=10 && str.length <=20) {
    return "That's a regular sized string!";
  } else {
    return "That's a small string!";
  }
}

function personsHeight(name) {

  if (name == "Shaq") {
    return 85;
  }
  if (name == "Zooey") {
    return 65;
  }

    return "I don't know everyone's height!";




  switch (name){
    case "Shaq":
      return 85;
    case "Zooey":
      return 65;
    default:
      return "I don't know everyone's height!";

  }

}



/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof personsHeight === 'undefined') {
  personsHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  personsHeight,
}