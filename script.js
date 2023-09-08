// Assignment code here
function generatePassword() {
  var lowLetters = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,";
  var bigLetters = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,";
  var numericCharacters = "1,2,3,4,5,6,7,8,9,0,"
  var specialCharacters = "!,@,#,$,%,^,&,*,(,),-,_,=,+,[,{,],},|,;,:,',<,>,?,/,"
  const bigAndSmallLetters = bigLetters.split(',');
  var select1 = "";
  console.log(bigAndSmallLetters);
  var numCharacters = prompt("How Many Characters In Your Password?")
  console.log(numCharacters);

  if (numCharacters<8 || numCharacters>128){
    alert("You need to choose between 8 and 128 characters in your password");
    return;
  }
  var yesLowCase = confirm("Would you like lower case letters in your password?");
  var yesUppCase = confirm("Would you like upper case letters in your password?");
  var yesNumbers = confirm("Would you like numbers in your password?");
  var yesSpecial = confirm("Would you like special characters in your password?");

  var yesAndNO =[yesLowCase, yesUppCase, yesNumbers, yesSpecial];
  var combinedCharacterArray = [lowLetters, bigLetters, numericCharacters, specialCharacters]

  for (let k=0; k < yesAndNO.length; k++)
    {
      if (yesAndNO[k]){
        select1 += combinedCharacterArray[k];
        console.log(select1);
      }
      
    }

  var select2 = (select1.split(','));
  select2.pop();
  console.log(select2);
  var randomNum = 0;
  var passwordArray = [];
  for (i=0; i<numCharacters;i++) {
    randomNum = Math.floor(Math.random()*select2.length);
    passwordArray.push(select2[randomNum])
  }
  console.log(passwordArray);
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
