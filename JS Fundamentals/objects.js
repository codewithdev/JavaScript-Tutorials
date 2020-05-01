

//Basic Creation of Objects


const person= {
	name: "Dev",
	DL No: 54883
};

console.log(person);
console.log(person[name]);   //If you want to access to the member of the object


//Objects can have Functions too

const person= {
	name: "Bunty",
	location: "India",
	Breed: "Leopard"
	speak(){
		console.log("Bhau! Bhau!");
	}
};

Bunty.speak();



//Nesting with the Objects

const person= {
	name:{
		firstname: "Dev",
		last_name: "Sharma"
	},
	location:{
		country: "US",
		State: "WA",
		city: "Seattle"
	}
};
console.log(person);


//Using the function to print the individual object and its member


const student = {
	name: {
		fname: "Dev",
		lname: "Sharma"
	},
	contact :{
		email: "idevprakaash@gmail.com",
		portfolio: "www.codewithdev.me",
		mob: 8933089007,
	},
	location:{
		country: "India",
		state: "Uttar Pradesh",
		city: "Kanpur"
	},
	
	getdetails(){
		return `${this.name.fname} ${this.name.lname}
${this.contact.email} ${this.contact.portfolio} ${this.contact.mob}
${this.location.country}${this.location.state}${this.location.city}`;
	}
};

console.log(studen.getdetails());