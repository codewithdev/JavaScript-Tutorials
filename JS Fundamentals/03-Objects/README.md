### JavaScript Object or 'O'

## Objective


- Create an object in JS
- Access a value from an object
- Add a key-value pair to an object
- Delete a key-value pair from an object


<h5 style="align-items:center"> Introduction </h5>


"An Object is an Key-Value Pair like and Dictionary.That means in Object we can look something by its key and get back to its Value."

<h4> Creating the Object </h4>

We can create Object in Two ways...


 - Literal Method
 - Object Constructor

 1. **Literal Method:**  
                     `` var language= {};``

     _the curly braces are an object_                

    Now initializing the Object with Key-Value Pair
    
    ``var lang= {
    	        front-End: "JavaScript","Ruby","ReactJS","HTML","CSS",
    	        back-end: 'C++','Python','Rust','Go','Java','JavaScript'
    	        };``

 2. **Object Constructor:**

                    var lang = new Object();
                    var lang= new Object({Key: 'Value'})



<h4 style="color: #212313;"> Top Tip: we can use variables as object keys. You have to wrap the key in Square Bracket</h4>