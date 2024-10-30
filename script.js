// greet();  // Output: Hello!
// const greet = function() {
//     console.log("Hello!");
//   };

// const greet = function() {
//     console.log("Hello, World!");
//   };

//   greet();  // Output: Hello, World!
// setTimeout(function() {
//     console.log("This message is delayed by 2 seconds.");
//   }, 2000);
// (function() {
//     console.log("This runs immediately!");
//   })();
// function person (name,age){
//     this.name = name ;
//     this.age =age;
//     }

//     person.prototype.greet=function () {
//         console.log(this.name,this.age,"dumdum");

//     }

//     let person1 = new person("hijas",23);
//     let person2 = new person("don",24)

//     person1.greet()
//     person2.greet()
///////////////////////////////////////////////////////////////////////////////
// function createSecretHolder(secret) {
//     let _secret = secret;
//     return {
//       getSecret: function() {

//         return _secret;
//       },
//       setSecret: function(newSecret) {

//         _secret = newSecret;
//       }
//     };
//   }

//   const secretHolder = createSecretHolder("initial secret");
//   console.log(secretHolder.getSecret()); // "initial secret"
//   secretHolder.setSecret("new secret");
//   console.log(secretHolder.getSecret()); // "new secret"
////////////////////////////////////////////
// const obj = {
//   value: 10,
//   regularFunction: function() {
//     console.log(this.value); // 10, `this` refers to `obj`
//   },
//   arrowFunction: () => {
//     console.log(this.value); // undefined, `this` refers to the outer context (usually `window`)
//   }
// };

// obj.regularFunction();
// obj.arrowFunction();

// const user = {
//   name: "Alice",
//   friends: ["Bob", "Charlie", "Dave"],
//   showFriends: function() {
//     const self = this; // Store `this` context
//     self.friends.forEach(function(friend) {
//       console.log(self.name + " is friends with " + friend);
//     });
//   }
// };

// user.showFriends();
// Output:
// Alice is friends with Bob
// Alice is friends with Charlie
// Alice is friends with Dave
//   function sum() {
//     return Array.from(arguments).reduce((acc, num) => acc + num, 0);
//   }
//   console.log(sum(1, 2, 3, 4)); // 10

//   const sum2 = function (...args){return args.reduce((acc, num) => acc + num, 0);}
// console.log(sum2(1, 2, 3, 6)); // 10
// const obj = {
//   name: "JavaScript",
//   regularFunc: function() {
//     console.log(this.name); // 'JavaScript' (own `this` context)
//   },
//   arrowFunc: () => {
//     console.log(this.name); // undefined (inherits `this` from outer scope)
//   }
// };

// obj.regularFunc(); // Output: JavaScript
// obj.arrowFunc(); // Output: undefined
// function greet(greeting, punctuation,dum) {
//   console.log(`${greeting}, ${this.name}${punctuation},,,${dum}`);
// }

// const person = { name: "Alice" };

// greet.call(person, "Hello", "!","red"); // Output: Hello, Alice!
// greet.apply(person, ["Hi", "?","yellow"]); // Output: Hi, Alice?
// const boundGreet = greet.bind(person, "Hey","blue");
// boundGreet("."); // Output: Hey, Alice.
// const num = "5";
// console.log(num.padStart(9, "0")); // Output: "005"
// console.log(num.padEnd(5, "0"));   // Output: "500"
const array = [2, 5, 4, 5, 1];

// const newarray= array.map(num=>num*2);

// console.log(newarray);

// const newarray = array.filter(num=> num%2==0);

// console.log(newarray);

// const newarray = array.reduce((acumulator, num) => acumulator + num, 0);
// console.log(newarray);
// const newarray = array.sort((a,b) => a-b);

// console.log(newarray);
// const newarray = array.slice(1,3);
// console.log(newarray);
// const newarray = array.splice(1,3);
// console.log(newarray);
// const newarray = array.push("hijas");
// console.log(array);
// array.pop()
// console.log(array);
// array.shift()
// console.log(array);
// array.unshift("hijas");
// console.log(array);
// array.forEach(num=>console.log(num+1))


// function fetchingdata(callback){
//     let data = "khsdgjkf" ;
//     if(data == null ){
//         return console.log("error is hapent");
//     }
//     return callback(data)
    
// }
// function displaydata(name,error){
// if(error){
//     console.log(error);
    
// }else{
//     console.log("data:"+name);
// }
// }

// fetchingdata(displaydata)

// function sum(num1,num2,callback){

//     if(num1==0){
//         return console.log("error message");
        
//     }

//     return callback(num1+num2)

// }
// function multiple(num1,num2,callback){

//     if(num1==0){
//         return console.log("error message");
        
//     }

//     return callback(num1*num2)

// }

// function display(sum,error){
// if(error){
//     console.log(error);
    
// }else{
//     console.log(sum);
//     function nextdatafetch(result,error) {
//         console.log(result);
        
//     }
//   multiple(sum,sum,nextdatafetch)
// }
// }
// sum(2,3,display)

// // Mock function to fetch user data
// function getUserData(callback) {
//     setTimeout(() => {
//       const user = { id: 1, name: "Hijas" };
//       console.log("User data fetched:", user);
//       callback(user);
//     }, 1000);
//   }
  
//   // Mock function to fetch posts by user ID
//   function getPosts(userId, callback) {
//     setTimeout(() => {
//       const posts = [
//         { id: 101, title: "Post 1" },
//         { id: 102, title: "Post 2" },
//       ];
//       console.log(`Posts for user ${userId} fetched:`, posts);
//       callback(posts);
//     }, 1000);
//   }
  
//   // Mock function to fetch comments for a post ID
//   function getComments(postId, callback) {
//     setTimeout(() => {
//       const comments = [
//         { id: 201, text: "Comment 1" },
//         { id: 202, text: "Comment 2" },
//       ];
//       console.log(`Comments for post ${postId} fetched:`, comments);
//       callback(comments);
//     }, 1000);
//   }
  
//   // Callback hell example
//   getUserData((user) => {
//     getPosts(user.id, (posts) => {
//       getComments(posts[0].id, (comments) => {
//         console.log("Final Comments:", comments);
//       });
//     });
//   });
  