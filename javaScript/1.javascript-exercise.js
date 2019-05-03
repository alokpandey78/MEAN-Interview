/* 
** 1 Remove duplicate from array and output should ne [1,2,5,6,7] 
*/ 
let numbers = [1,2,2,5,5,6,7];
console.log([ ...new Set(numbers)]);

/*
**  2 Difference between let and const
 */
let letAndConst = function() {
    {
        let let1 = 'let';
        var v = 'var';
    }
    console.log(v);
    // console.log(let1);
    
}

letAndConst();
    //O/P var
    // ReferenceError: let1 is not defined

// 3 Immediately scope function

let scopeFun = function() {
    { 
        (function(){
            let l = 'let';
            var v = 'var';
        })();
    }
    // console.log(l);
    // console.log(v);
    
}

scopeFun();
    // ReferenceError: l is not defined
    // ReferenceError: v is not defined

//4 what will will be O/p ?
console.log(5<6<7); 
    // true<7  // 1<7 // true
console.log(5>6>7); 
    // true > 6 // true means 1 false

// 5 what will will be o/p 
let a = () => arguments;
    // console.log('arguments',a("hi"));

// 6 what will will be o/p
let b = (...n) => {return n};
console.log(b("hi"));
    // o/p hi

// 7 what will will be o/p

let x  = function(){
    return {
        mess:'hi'
    }
}
console.log('x in function',x());
    // o/p  {mess: "hi"}

// 8 how to prevent addding property

let profile = {
    name:'vikash'
}
profile.age = 3;
console.log(profile);
    // use Object.freeze(profile)

//  9 update propery only not to add

 Object.seal(profile)

//10 Add property but read only

let profilePor = {
    name:'vikash'
}

// Object.defineProperties(profilePor,'age',{
//     value:3,
//     writable:false
// })
// profilePor.name = 'verma';
// profilePor.age = 14;
// console.log(profilePor);


// 11 why infinte
console.log(Math.max()); // - infinity 

//12 get only array from object 

// 1.way
let x1 = {
    a:1,
    b:2
};
const xArr = Object.entries(x1);
    console.log("12.get only array from object",xArr);
    // 12.get only array from object [ [ 'a', 1 ], [ 'b', 2 ] ]
// 2nd way
const Arrayx = []
for(let i in x1){
    Arrayx.push(i);
}
console.log("12.get only array from object",Arrayx);
    // 12.get only array from object [ 'a', 'b' ]

// 13 reverse string
let xHi = "hi";
let yHi = "ih";

const reverseStr = (str) =>{
    return str.split('').reverse().join('')
}
    console.log("13.reverseStr",reverseStr(xHi));
    console.log(reverseStr(xHi) === yHi);
    // 13.reverseStr ih
    // true

// 14 object value

// is this correct
const obj  = {
    a:1,
    b:2,
    getA(){
        console.log(this.a);
    },
    getB(){
        console.log(this.b);
    }
}

// obj.getA().getB();
// no

// correct one is 
const objOne  = {
    a:1,
    b:2,
    getA(){
        console.log(this.a);
        return this; // have to return
    },
    getB(){
        console.log(this.b);
    }
}

// objOne.getA().getB();
console.log("14",objOne.getA().getB());


// 15 print this
// [1,2].print();   // 1,2

// 1st way
Array.prototype.print = () => {
    console.log(`${this[0]} , ${this[1]}`);
} 

// 16 reverse string
const aReverse =function(x){
    this.x = x;
}
const bReverse =function(x,y){
    this.y = y;
}
// const newB = new b('x','y');
// newB.getX();
// newB.getY();

// 17 clone 
const objClone = {
    a:{
        b:{
            c:1
        }
    }
}
const clone  = Object.assign({},objClone);

clone.a.b.c = 2;
    // console.log(obj.a.b.c);

// 18 reverse string
const aaReverse = [1,2,3,3];
const bbReverse = [2,56,8,7];

const c = aaReverse.concat(bbReverse).sort((aaReverse,bbReverse) => aaReverse>bbReverse );


// 19 reverse string
const objReverse1 = {
    x:1,
    getX(){
        const inner = function() {
            console.log(this.x)
        }
        inner;
    }
}

objReverse1.getX();

// 20 reverse string
const objReverse2 = {
    x:1,
    getX(){
        const inner = function() {
            console.log(this.x) // bind
        }
        inner.call(this);
    }
}

objReverse2.getX();
