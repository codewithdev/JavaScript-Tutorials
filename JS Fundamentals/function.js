function addTwo(num){
	return num*2;
}


const finalAnswer= addTwo(5);
console.log(finalAnswer);




const myHomeCity= "Kanpur Nagar";
const myHomeState= "Uttar Pradesh";
const myHomeCountry= "India";


function logoutHome(city, state, country){
	console.log(`You are from ${myHomeCountry} and living in ${myHomeState}`);
}
logoutHome(myHomeCity,myHomeState,myHomeCountry);


//Scope

function addFive(number) {
  const someVariable = "you can't see me outside this function";
  return number + 5;
}

addFive(10);
console.log(someVariable);


let friendsAtYourParty = 0;
for (let i = 0; i <= 10; i++) {
  friendsAtYourParty++;
}
console.log(i);