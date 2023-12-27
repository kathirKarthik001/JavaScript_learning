array1 =['A','B','C','D','E','F','G','H']
array2 =[1,2,3,4,5,6,7,8];

const [a,b] = array1;
console.log(a);
console.log(b);



const [v ,,w , ...rest] = array1;
console.log(v);         // A
console.log(w);         // C
console.log(rest);      //[ 'D', 'E', 'F', 'G', 'H' ]

const arr = [...array1 , ...array2]     // concatinating 2 arrrays
console.log(arr)

function sm (a,b){
    return [ a+b , a*b];
}

const [c ,m] = sm(3 , 4);
console.log(c);       //7
console.log(m);       //12




