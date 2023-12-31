function generatePassword() {
 //Defining variables
  var lowLetters = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,";
  var bigLetters = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,";
  var numericCharacters = "1,2,3,4,5,6,7,8,9,0,"
  var specialCharacters = "!,@,#,$,%,^,&,*,(,),-,_,=,+,[,{,],},|,;,:,',<,>,?,/,"
  var selection = "";
  var numCharacters = prompt("How many characters would you like in your password?")
// Verifying correct number of characters requested
  if (numCharacters<8 || numCharacters>128){
    alert("You need to choose between 8 and 128 characters in your password");
    return "";
  }
// Loop to ensure at least one character type is selected 
  do {
  var yesLowCase = confirm("Would you like lower case letters in your password? ");
  var yesUppCase = confirm("Would you like upper case letters in your password? ");
  var yesNumbers = confirm("Would you like numeric characters in your password? ");
  var yesSpecial = confirm("Would you like special characters in your password? ");

  var yesAndNO =[yesLowCase, yesUppCase, yesNumbers, yesSpecial];
  var combinedCharacterArray = [lowLetters, bigLetters, numericCharacters, specialCharacters]

 // Loop to add selected character libraries to the main library
  for (let k=0; k < yesAndNO.length; k++)
    {
      if (yesAndNO[k]){
        selection += combinedCharacterArray[k];
      }
    }
  // Verification a main library exists
    if (selection===""){
      alert("At least one data type must be selected");
    };
  }while (selection==="");

  // Creating an array from the selected characters (in main library), and selecting randomly to create password.
  var selectionArray = (selection.split(','));
  selectionArray.pop();
  var passwordArray = [];
  for (i=0; i<numCharacters;i++) {
    var randomNum = Math.floor(Math.random()*selectionArray.length);
    passwordArray.push(selectionArray[randomNum])
  }
  // Converting password array to a string, and returning the string value.
  var passwordString = passwordArray.join('');
  return passwordString;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
