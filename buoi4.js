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

function countOccurrences(arr) {
    const value=arr.reduce(function(previus, curentValue){
        if(curentValue in previus){
            previus[curentValue]++
        } else{
            previus[curentValue]=1
        }
        return previus
    },{})
    console.log(value)

}
countOccurrences(["a", "b", "c", "b", "a", "a"]);

