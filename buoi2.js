// 10: Vòng lặp
// const arrNumber=[1,2,3,4,5,6,7,8,9,10]
//var i=0       for chỉ tai khởi tạo 1 lần
// for(; i<=arrNumber.length; i++){        //for(bắt đầu; điều kiện; bước nhảy)
//     if(arrNumber[i]%2!=0) continue
//     console.log(arrNumber[i])
// }
// var a=0
// arrNumber.forEach(function(element){
//     if(element%2==0) console.log(element)
//     a=element
// });
// console.log(a)
// var a=5
// do {
//     console.log(a)
// } while (a<5)
// var a = [1, 2, 4, 8, 16];
// // //* Sử dụng vòng lặp for để hiển thị ra màn hình các phần tử của mảng a theo thứ tự ngược lại:
// for(var i=a.length-1; i>-1; i--){
//     console.log(a[i])
// }

//11: For in, for of
// const number =[1,2,3,4,5,6,7,8,9,10]
// const teo={
//     name:'teo',
//     age:10
// }
// for(const props in teo){
//     console.log(props)
// }
// for (const value of number){
//     console.log(value)
// }

// var apartment = {
//     bedroom: {
//       area: 20,
//       bed: {
//         type: 'twin-bed',
//         price: 100
//       }
//     }
//   };
// for(const key in apartment){
//     console.log("key apartment "+key)
//     for(const keybedroom in apartment[key]){
//         console.log("key bedroom "+ keybedroom)
//         for(const keybed in apartment[key][keybedroom]){
//             console.log("key bed "+ keybed)
//         }
//     }
// }  

// function getKey(object){
//     for(const key in object){
//         console.log(key)
//         if (typeof object[key]=== 'object')
//         getKey(object[key])
//     }
// }
// getKey(apartment)

//12: array method
// const arrayNames =["teo", "ti","tun"]
// // thêm phần tử cuối mảng
// arrayNames.push("hoa", "tuan")
// //thêm phần tử ở đầu mảng
// arrayNames.unshift("dao","phuong")
// //xóa phần tử cuối mảng
// arrayNames.pop()
// //xóa phần tử đầu
// arrayNames.shift()

//
// console.log(arrayNames)
function multiply(arr){
    var tich=1
    for(const value of arr){
        tich=tich*value
    }
    console.log(tich)
}
console.log(multiply([2,3,4]))