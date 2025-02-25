const marvel_heros = ["thor","Ironman","spiderman"]
const DC = ["superman","batman","flash"]
marvel_heros.push(DC) // here another array is become the new object of the existing array
 console.log(marvel_heros);
console.log(marvel_heros[3][1]);


 concat operator
const newArr = marvel_heros.concat(DC) //  this will properly join the two arrays and output should be taken in another array
console.log(newArr); // whole 

spread method
const all_new_heros = [...marvel_heros, ...DC]
console.log(all_new_heros);


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("naman")) // checks wheather it is array or not
console.log(Array.from("naman")) // convert into array
console.log(Array.from({name:"naman"})) // interesting

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1, score2, score3));
