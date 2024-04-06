// const fruit = ['Apple', 'Orange', 'Banana'];

// fruit[4] = 'Mango'; // a valid assignment

// console.log(fruit);

// const bobsFollowers = ['Bryan', 'Zoe', 'Andy', 'Cole'];
// const tinasFollowers = ['Zoe', 'Georgette', 'Andy'];
// let mutualFollowers = [];

// for (i = 0; i < bobsFollowers.length; i++) {
//   for (j = 0; j < tinasFollowers.length; j++) {
//     if (bobsFollowers[i] === tinasFollowers[j]) {
//       mutualFollowers.push(tinasFollowers[j]);
//     }
//   }
// }

// console.log(mutualFollowers);



// const nums = [1, 2, 3];

// for (let i = nums.length - 1; i >= 0; i--) {
//   console.log(nums[i]);
// }

// console.log('Time is up!');


// const str = "hello";

// let horizontalString = "";
// for (let i = 0; i < str.length; i++) {
//   horizontalString += str[i] + " ";
// }

// console.log(horizontalString)

// let = capFave = spaceship.crew['captain']['favorite foods'][0];


// const obj = {
//     name: 'Mr. Obj',
//     pastTime: 'Volley Ball',
//     yearsTraining: [ 1992, 1993, 1994, 1995, 1996],
//   }

// const { name1, pastTime, yearsTraining } = obj;

// console.log(name1);
// console.log(pastTime);

// const obj = {
//     name: 'Mr. Obj',
//     pastTime: 'Volley Ball',
//     yearsTraining: [1992, 1993, 1994, 1995, 1996],
//   }
  
//   const {name, pastTime, yearsTraining} = obj
  
//   console.log(`${name} has trained in ${pastTime} during ${yearsTraining.join(', ')}.`)
  
//   name = 'Mrs. Obj';
//   console.log(name);


// let arr = ['el1', 'el2', 'el3'];

// arr.push('whats');

// // elKey are the property keys
// for (let elKey in arr) {
//   console.log(elKey);
// }

// // elValue are the property values
// for (let elValue of arr) {
//   console.log(elValue)
// }


// function outerFunction() {
//     console.log(`Outside inner function: ${this.name}`);
//     const innerFunction = () => {
//       console.log(`Inside inner function: ${this.name}`);
//     };
//     innerFunction();
//   }
  
//   const obj = {
//     name: 'John',
//     greet: outerFunction
//   };
  
//   obj.greet();

let tempObj = {
    _num: 22,
    get num() {
        return this._num;
    }
};


console.log(tempObj.num)