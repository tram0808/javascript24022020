// 10: Vòng lặp
const arrNumber=[1,2,3,4,5,6,7,8,9,10]
//var i=0       for chỉ tai khởi tạo 1 lần
// for(; i<=arrNumber.length; i++){        //for(bắt đầu; điều kiện; bước nhảy)
//     if(arrNumber[i]%2!=0) continue
//     console.log(arrNumber[i])
// }
var a=0
arrNumber.forEach(function(element){
    if(element%2==0) console.log(element)
    a=element
});
console.log(a)