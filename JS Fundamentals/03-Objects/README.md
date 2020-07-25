### JavaScript Object or 'O'

## Objective


- Create an object in JS
- Access a value from an object
- Add a key-value pair to an object
- Delete a key-value pair from an object


## Introduction


"An Object is an Key-Value Pair like and Dictionary.That means in Object we can look something by its key and get back to its Value."

## Creating the Object 

We can create Object in Two ways...


 - Literal Method
 - Object Constructor

 1. **Literal Method:**  
                     ```js var language= {};```  


     _the curly braces are an object_                

    Now initializing the Object with Key-Value Pair
    
    ``var lang= {
    	        front-End: "JavaScript","Ruby","ReactJS","HTML","CSS",
    	        back-end: 'C++','Python','Rust','Go','Java','JavaScript'
    	        };``

 2. **Object Constructor:**

                    var lang = new Object();
                    var lang= new Object({Key: 'Value'})



<h4 style="color: blue;"> Top Tip: we can use variables as object keys. You have to wrap the key in Square Bracket</h4>


## Accessing the Object

 Object can be accessed by either using  ``.`` or ``[]``

``var sweetMeal = 'dessert'``

``meals[sweetMeal] = 'cake';``

``meals.dessert // 'cake'``

``meals[sweetMeal] // 'cake' ``



## Adding a Key-Value Pair to Object

**Object.assign()**

We can use Object.assign() to create a new object and pass it properties from existing objects. The first value is the target object that gets modified. All the values afterward can be any number of objects. It then copies them from left to right onto the target object (so if two objects share a key, the right-most object's value for that key will win). Let's try it out:

``Object.assign({}, { foo: 'bar' })
// { foo: 'bar' }``

`` Object.assign({ eggs: 3 }, { flour: '1 cup' })
// { eggs: 3, flour: '1 cup' }``

**Syntax:**

 ```js 
      Object.assign({},objName, {[key]:value}); 
 ```





## Deleting a Key-Value Pair

Let's say we want to delete breakfast since its 2 PM.

```js
var meals = { breakfast: "oatmeal", lunch: "turkey sandwich", dinner: "steak and potatoes" };	``

//**_The `delete` operator returns True or False._** 

  delete meals.breakfast  
  meals; //returns {lunch: "turkey sandwich", dinner:"steak and potatoes"}
