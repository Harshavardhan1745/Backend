
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

let arr = [1,2,3,4,5,6,7,8]

for (let i= arr.length; i>=0 ; i--){
    console.log(arr[i]);
    
}

for(let x in arr){
    console.log(x);
    
}

