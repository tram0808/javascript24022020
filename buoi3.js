//13: call back là gọi lại chức năng   5/0=infinity
// function getName(name, dosth){
//     return dosth(name)
// }
// function sayHi(value){
//     return "Say Hi " +value
// }

// console.log(getName("Tram",sayHi))

// function ArrDouble(numbers, dosth){
//     for(var i=0; i<numbers.length; i++){
//         numbers[i]=dosth(numbers[i])
//     }
//     return numbers
// }
// function doubleNumber(numbers){
//     return numbers *numbers
// }
// console.log(ArrDouble([1,2,3,4,5],doubleNumber))

// function getName(dosth){
//     dosth()
// }
// getName(console.log)      //ko có dấu ngoặc tròn

//bài tập: 1 -100, in số chẳn, số lẻ, số chia 3 dư 1, số chín phương


//     for (var i = 1; i <= 100 ; i++){
//         if( i%2 ==0) console.log(i)
//     }

// for (var y = 1; y <= 100 ; y++){
//     if( y%2 ==1) console.log(y)
// }
// for (var z = 1; z <= 100 ; z++){
//     if( i%3 ==1) console.log(z)
// }
// for (var e = 1; e <= 100 ; e++){
//     if( Math.sqrt(e)%1 ==0) console.log(e)
// }

// function handleNumber(sodu, sochia){
//     for (var i = 1; i <= 100 ; i++){
//         if( i % sochia == sodu) console.log(i)
//     }
// }
// handleNumber(1,2)

// function handleNumber(dosth){
//     for (var i = 1; i <= 100 ; i++){
//         const dk = dosth(i)
//         if (dk) console.log(i)
//     }
// }

// handleNumber(function(number){
//     if(number%2 ==0) return true     //sử lý điều kiện thì để vào if
//     return false
// })

//14: Hàm map
const numbers=[1,2,3,4,5,6,7,8,9,10]
const newNumbers = numbers.map(function(value){     //ko sử dụng value thì function(_ ,index )
    if(value > 5 ) return value*2
    return value
})
console.log(newNumbers)