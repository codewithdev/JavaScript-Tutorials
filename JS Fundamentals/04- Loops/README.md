# Intro to Looping

## Objective

- Build a for loop
- Build a while loop
- Build a do-while loop
- Explain the purpose of a loop
- Explain the difference between each type of loop in JS


**Can You stop the Deadpool from its Action?**


![Deadpool](https://i.imgur.com/qR77BXg.gif)

This is an Simple Example of Loop. In programming, we also often need to complete tasks repeatedly. Say we wanted to count from one to five using console.log. We could write:

```js
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5) 
```

and this logs     ```
                    1
                    2
					3
					4
					5
					```

In JS we have three loops ```for Loop```, ```while```, and ```do-while```

<h2>For Loop</h2>


### Syntax

```js
for (let num = 1; num < 6; num += 1) {
  console.log(num)
}
````


<h2> While Loop</h2>

``A while loop is often used when we don't know how many times a loop needs to run - that is, the condition is dependent on a dynamic function/return value. However, we can actually write any for loop as a while loop if we choose.``

Examples

### Syntax

```js
while ([condition]) {
  [loopBody];
}
```

**Example**

```js
let num = 1
 
while (num < 6) {
  console.log(num)
  num += 1
}
```

<h2> do-While loop </h2>


### Syntax

```js
do {
  [loopBody];
} while ([condition]);

```


**Example**

```js
let i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}
 
do {
  console.log("doo-bee-doo-bee-doo");
} while (incrementVariable() < 5);

```




