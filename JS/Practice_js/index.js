
// let row; 
// let n = 16; 
// for (i = 0 ; i < n ; i++){
//   row = " " ;
//   for (j = 0 ; j < n ; j++){
//     if(i==0 || i==n-1 || j==0 || j==n-1 || j==Math.floor(n/2) || i==Math.floor(n/2) || i==j || i+j==n-1 || i+j==Math.floor(n/2)|| i-j==Math.floor(n/2) || i+j == (n-1)+Math.floor(n/2) || j-i ==Math.floor(n/2)) 
//     {
//       row = row + "*"
//     } else {
//       row = row + " " 
//     }
//   }
//   console.log(row);
// }


// let row

// for(let i=1; i<=5;i++){
//     row = " "
//     for(let j=1 ;j<=5;j++){
//     row = row + "*"
//     }
//     console.log(row);
// }

// function cal(product , qtn){
//     console.log(product*qtn);
    
// }
// cal(200,5)


// function check(age){
//     if(age >= 18){
//         console.log("Eligible");
        
//     }else{
//         console.log("not eligible");
        
//     }
// }
// check(12)


// function counts(){
//     let count = 0 
//     function innerfun (){
//         count ++
//         console.log(count);
        
//     }
//         return innerfun
// }
// out = counts()
//  out()
//  out()

// function account(){
   

// }


let arr = [10,15,25,20]
let lar = arr[0]
let sec = arr[0]

for(let i = 0 ; i<arr.length ; i++ ){
    if(arr[i]< lar){
        sec = lar
        lar = arr[i] 
}

    if(arr[i]>sec && arr[i]<lar){
        sec = arr[i]
    }
}

console.log(lar);
console.log(sec);

