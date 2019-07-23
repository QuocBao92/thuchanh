
let arr1 = [3, 5, -1, 8, 3, 7, 8];
let arr2 = [7, 12, 6, 9, 20, 56, 89] ;
let arr3 = [];
let arr4 = [0, 0, 0, 0, 0, 0];
let t;
function minArray(arr){
    // if(arr.length == 0)
    //     return -1;
    let min = arr[0];
    let t ;
    for (  i = 0; i < arr.length ; i++){
        if (min >= arr[i]){
            min = arr[i];
            t = i;
        }
    }
    return min;
}
console.log(t);
function checkMin(){
    
    let min1 =minArray(arr1) ;
    alert('giá trị nhỏ nhất của mảng arr1: '+ min1 + 'tại vị trí :' + arr1.indexOf(min1));
    let min2 =minArray(arr2);
    alert('giá trị nhỏ nhất của mảng arr2: '+ min2);
    if(arr3.length == 0){
        alert ('Mãng rỗng!');
    }
    else {
        let min3 = minArray(arr3);
        alert('giá trị nhỏ nhất của mảng arr3: '+ min3);
    }
    
    let min4 =minArray(arr4);
    alert('giá trị nhỏ nhất của mảng arr4: '+ min4);

}   
function start(){
    document.getElementById('result1').innerHTML = arr1.join(' ');
    document.getElementById('result2').innerHTML = arr2.join(' ');
    //document.getElementById('result3').innerHTML = arr3.join('');
    document.getElementById('result4').innerHTML = arr4.join(' ');
}

// function addArr(){
    
//     let mang = prompt('nhập số mảng ');
//     let value = prompt('nhập số giá trị trong chuỗi ');
//     for (let i = 1; i<= mang; i++ ){
//         for (let j = 0; j< value; j++){

//         }
//     }
// }

// function addArr(){
//     let arr = [];

//     for( i)
// }

// function minArray(arr) {
//     if(arr.length == 0)
//         return -1;
//     let min = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i];
//         }
//     }
//     return min;
// }    
// let arr1 = [3, 5, 1, 8, -3, 7, 8];
// let arr2 = [7, 12, 6, 9, 20, 56, 89];
// let arr3 = [];
// let arr4 = [0, 0, 0, 0, 0, 0];
// let min1 = minArray(arr1);
// alert(min1);
// let min2 = minArray(arr2);
// alert(min2);
// let min3 = minArray(arr3);
// alert(min3);
// let min4 = minArray(arr4);
// alert(min4)