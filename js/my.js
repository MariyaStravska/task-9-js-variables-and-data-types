// Create variables (fullName, phone, hobbies, email, websiteLink, websiteTitle) after this comment
// what type should you use if this variables will not be changed?
const fullName ='Masha';
console.log(fullName);

let phone='8883590';

if (typeof phone ==='number'){
    console.log(phone);
}
else{
    console.log ('error');
}

let hobbies='Running';
console.log(hobbies);

const email='mashastravska@gmail.com';
console.log(email);

const  websiteLink='http//MSY.NY';
console.log( websiteLink);

const websiteTitle='MS info';
console.log(websiteTitle);

/**
 *  Remove '//' before render(.... to uncomment function and make it work
 */

 render(fullName, phone, hobbies, email, websiteLink, websiteTitle);
