//15:hàm reduce

// // trả về số người đã vote
// function totalVotes(arr){
//     console.log = arr.reduce(function(previus, curentValue){
//         if(curentValue.voted){
//             return previus+1
//         }
//         return previus
//     },0);
//     console.log(value)

// }
// var voters =[
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
  
// ];
// totalVotes(voters) // 7

// // bài 2: tính tổng giá trị các món bên dưới
// function shoppingSpree(arr) {
//     console.log = arr.reduce(function(previus, curentValue){
//         return previus+ curentValue.price
//     },0)
//     console.log(value)
// }

// var wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 }
// ];
// shoppingSpree(wishlist) // 227005

// //bài tập 3
// function countOccurrences(arr) {
//     const value=arr.reduce(function(previus, curentValue){
//         if(curentValue in previus){
//             previus[curentValue]++
//         } else{
//             previus[curentValue]=1
//         }
//         return previus
//     },{})
//     console.log(value)

// }
// countOccurrences(["a", "b", "c", "b", "a", "a"]);

// const arraySinhvien =[
//     {name:'teo', age:10},
//     {name:'ti', age:20},
//     {name:'tuan', age:15}
// ]
// //kết hợp phương thức map và reduce để tính tổng tuổi
//     const total= arraySinhvien.map(function(sinhvien){
//         return sinhvien.age
//     }).reduce(function(previus, curent){
//         return previus+curent
//     })
// console.log(total)

// 16: hàm sort
// const arayNumber =[9,1,2,5,4,3,6,8,7]
// // const arrayChar=['a','b', 'e','c','f','d']
// // const newArrayChar = arayNumber.sort             // nó tự sắp xếp theo bảng mã unicode
// const newArrayChar = arayNumber.sort(function(a,b){
//     // return a-b  //tăng dần
//     return b-a      //giảm dần
// })
// console.log(newArrayChar)

//17:khởi tạo ra object
// function Sinhvien(name, age, address){
//     this.name = name;       //this:tượng trưng cho đối tượng gọi thuộc tính
//     this.age = age;
//     this.address = address;
//     this.sayHello=function(){
//         return "hello"
//     }
// }
// // Sinhvien.prototype.schoolName={name:'sai gon'}    //thuộc tính dùng chung
// Sinhvien.prototype.schoolName=function(){
//     return "saigon"
// }
// const teo =  new Sinhvien ('teo', 20, '38 nguyen lam')
// const ti =  new Sinhvien ('ti', 15, '37 nguyen lam')

// // delete teo.address      //xóa thuộc tính
// // console.log(teo.sayHello==ti.sayHello)      //false do ss vùng nhớ
// console.log(ti.schoolName==teo.schoolName)      //true do cùng vùng nhớ

//18: toán tử 3 ngôi
// bieuthuc ? true : false     //false trả về sau dấu :

// Sử dụng ternary operator thay thế cho if else sao cho đoạn code sau không thay đổi logic
// function doSomething(a) {
//     var b;
//     if (a > 0) {
//       b = 1;
//     } else if (a < 0) {
//       b = 2;
//     } else {
//       b = 3;
//     }
//     return b;
//   }
  
//   function doSomethingTernary(a) {
//       const b = a < 0 ? 2 : (a>0 ? 1 :3) 
//       return b
    
//   }
//   console.log(doSomethingTernary(3))
//   console.log(doSomething())
  
//java nâng cao

//1: var, let, const
let name = "teo"
function showName(){
    let name ="ti"
    return name
}
console.log(showName())