var passwordLength;
var passwordLowercase;
var passwordUppercase;
var passwordNumeric;
var passwordSpecialCharacters;

var lC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uC = lC.map(function(x){ return x.toUpperCase(); });
var nB = ["0","1","2","3","4","5","6","7","8","9"];
var sC = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","_","{","|","}","~"];

function length () {
    passwordLength = prompt("Please insert the length of your password. \n (at least 8 characters and no more than 128 characters) ", "enter a number between 8 - 128");
    if (passwordLength >= 8 && passwordLength <=128) {
        characterSelector();
    } else if (passwordLength === null) {
        return;
    } else {
        window.alert("enter a number between 8 - 128");
        length();} 
}

// asked for character types to include in the password
function characterSelector () {
passwordLowercase = confirm("Do you want to include lowercase in the password?");
passwordUppercase = confirm("Do you want to include uppercase in the password? ");
passwordNumeric = confirm("Do you want to include number in the password? ");
passwordSpecialCharacters = confirm("Do you want to include special characters in the password? ");

// my input should be validated and at least one character type should be selected
if (!passwordLowercase && !passwordUppercase &&
    !passwordNumeric && !passwordSpecialCharacters) {
    window.alert ("at least one character type should be selected!" );
    characterSelector ();
} else {
    writePassword ();
}}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {  
    var password ="";
    var password1="";
    var password0="";
 
if (passwordLowercase && passwordUppercase && passwordNumeric &&
    passwordSpecialCharacters){

        var password0lC = lC[Math.floor(Math.random() * lC.length)];
        var password0uC = uC[Math.floor(Math.random() * uC.length)];
        var password0nB = nB[Math.floor(Math.random() * nB.length)];
        var password0sC = sC[Math.floor(Math.random() * sC.length)];
        var lCuCnBsC0 = password0lC.concat(password0uC,password0nB,password0sC);

        var lCuCnBsC = lC.concat(uC,nB,sC);

        for(var i = 4; i < passwordLength; i++){
            var password0 = Math.floor(Math.random() * lCuCnBsC.length);
            password1 += lCuCnBsC[password0];}
            password = lCuCnBsC0.concat(password1); 
            
        
} else if (!passwordLowercase && passwordUppercase && passwordNumeric &&
    passwordSpecialCharacters){

    var password0uC = uC[Math.floor(Math.random() * uC.length)];
    var password0nB = nB[Math.floor(Math.random() * nB.length)];
    var password0sC = sC[Math.floor(Math.random() * sC.length)];
    var uCnBsC0 = password0uC.concat(password0nB,password0sC);

    var uCnBsC = uC.concat(nB,sC);
    for(var i = 3; i < passwordLength; i++){
        var password0 = Math.floor(Math.random() * uCnBsC.length);
        password1 += uCnBsC[password0];
        } ;
        password = uCnBsC0.concat(password1)

} else if (passwordLowercase && !passwordUppercase && passwordNumeric &&
    passwordSpecialCharacters){

    var password0lC = lC[Math.floor(Math.random() * lC.length)];
    var password0nB = nB[Math.floor(Math.random() * nB.length)];
    var password0sC = sC[Math.floor(Math.random() * sC.length)];
    var lCnBsC0 = password0lC.concat(password0nB,password0sC);

    var lCnBsC = lC.concat(nB,sC);
    for(var i = 3; i < passwordLength; i++){
        var password0 = Math.floor(Math.random() * lCnBsC.length);
        password1 += lCnBsC[password0];}
    
    password = lCnBsC0.concat(password1); 

} else if (passwordLowercase && passwordUppercase && !passwordNumeric &&
    passwordSpecialCharacters){

    var password0lC = lC[Math.floor(Math.random() * lC.length)];
    var password0uC = uC[Math.floor(Math.random() * uC.length)];
    var password0sC = sC[Math.floor(Math.random() * sC.length)];
    var lCuCsC0 = password0lC.concat(password0uC,password0sC);

    var lCuCsC = lC.concat(uC,sC);
    for(var i = 3; i < passwordLength; i++){
        var password0 = Math.floor(Math.random() * lCuCsC.length);
        password1 += lCuCsC[password0];} 
    
    password = lCuCsC0.concat(password1);    

} else if (passwordLowercase && passwordUppercase && passwordNumeric &&
    !passwordSpecialCharacters){

    var password0lC = lC[Math.floor(Math.random() * lC.length)];
    var password0uC = uC[Math.floor(Math.random() * uC.length)];
    var password0nB = nB[Math.floor(Math.random() * nB.length)];
    var lCuCnB0 = password0lC.concat(password0uC,password0nB);

    var lCuCnB = lC.concat(uC,nB);
    for(var i = 3; i < passwordLength; i++){
        var password0 = Math.floor(Math.random() * lCuCnB.length);
        password1 += lCuCnB[password0];}

    password = lCuCnB0.concat(password1);     

} else if (!passwordLowercase && !passwordUppercase && passwordNumeric &&
    passwordSpecialCharacters){

    var password0nB = nB[Math.floor(Math.random() * nB.length)];
    var password0sC = sC[Math.floor(Math.random() * sC.length)];
    var nBsC0 = password0nB.concat(password0sC);

    var nBsC = nB.concat(sC);
    for(var i = 2; i < passwordLength; i++){
        var password0 = Math.floor(Math.random() * nBsC.length);
        password1 += nBsC[password0];}

var password = nBsC0.concat(password1);          

} else if (!passwordLowercase && passwordUppercase && !passwordNumeric &&
    passwordSpecialCharacters){
    
    var password0uC = uC[Math.floor(Math.random() * uC.length)];
    var password0sC = sC[Math.floor(Math.random() * sC.length)];
    var uCsC0 = password0uC.concat(password0sC);

    var uCsC = uC.concat(sC);
    for(var i = 2; i < passwordLength; i++){
        var password0 = Math.floor(Math.random() * uCsC.length);
        password1 += uCsC[password0];}

    var password = uCsC0.concat(password1);           

} else if (!passwordLowercase && passwordUppercase && passwordNumeric &&
    !passwordSpecialCharacters){
    
    var password0uC = uC[Math.floor(Math.random() * uC.length)];
    var password0nB = nB[Math.floor(Math.random() * nB.length)];
    var uCnB0 = password0uC.concat(password0nB);

    var uCnB = uC.concat(nB);
    for(var i = 2; i < passwordLength; i++){
        var password0 = Math.floor(Math.random() * uCnB.length);
        password1 += uCnB[password0];}
        
    password = uCnB0.concat(password1);        

} else if (passwordLowercase && !passwordUppercase && !passwordNumeric &&
    passwordSpecialCharacters){

var password0lC = lC[Math.floor(Math.random() * lC.length)];
var password0sC = sC[Math.floor(Math.random() * sC.length)];
var lCsC0 = password0lC.concat(password0sC);

    var lCsC = lC.concat(sC);
    for(var i = 2; i < passwordLength; i++){
        var password0 = Math.floor(Math.random() * lCsC.length);
        password1 += lCsC[password0];}
    
password = lCsC0.concat(password1);

} else if (passwordLowercase && !passwordUppercase && passwordNumeric &&
    !passwordSpecialCharacters){

    var password0lC = lC[Math.floor(Math.random() * lC.length)];
    var password0nB = nB[Math.floor(Math.random() * nB.length)];
    var lCnB0 = password0lC.concat(password0nB);

    var lCnB = lC.concat(nB);
    for(var i = 2; i < passwordLength; i++){
        var password0 = Math.floor(Math.random() * lCnB.length);
        password1 += lCnB[password0];}
    
    password = lCnB0.concat(password1);        

} else if (passwordLowercase && passwordUppercase && !passwordNumeric &&
    !passwordSpecialCharacters){

    var password0lC = lC[Math.floor(Math.random() * lC.length)];
    var password0uC = uC[Math.floor(Math.random() * uC.length)];
    var lCuC0 = password0lC.concat(password0uC);

    var lCuC = lC.concat(uC);
    for(var i = 2; i < passwordLength; i++){
        var password0 = Math.floor(Math.random() * lCuC.length);
        password1 += lCuC[password0];}
    
    password = lCuC0.concat(password1);         

} else if (!passwordLowercase && !passwordUppercase && !passwordNumeric &&
    passwordSpecialCharacters){
    for(var i = 0; i < passwordLength; i++){
        var password0 = Math.floor(Math.random() * sC.length);
        password += sC[password0];} 

} else if (!passwordLowercase && !passwordUppercase && passwordNumeric &&
    !passwordSpecialCharacters){

    for(var i = 0; i < passwordLength; i++){
        var password0 = Math.floor(Math.random() * nB.length);
        password += nB[password0];
      } 

} else if (!passwordLowercase && passwordUppercase && !passwordNumeric &&
     !passwordSpecialCharacters){

    for(var i = 0; i < passwordLength; i++){
        var password0 = Math.floor(Math.random() * uC.length);
        password += uC[password0];} 

} else if (passwordLowercase && !passwordUppercase && !passwordNumeric &&
    !passwordSpecialCharacters){

    for(var i = 0; i < passwordLength; i++){
        var password0 = Math.floor(Math.random() * lC.length);
        password += lC[password0];}}

var passwordText = document.querySelector("#password");
passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", length);


 // WHEN the password is generated
    // THEN the password is either displayed in an alert or written to the page