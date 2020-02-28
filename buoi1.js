//1 :khai bao bien
//var x= 5
//var y=8
//console.log(x)

// 2.kieu du lieu
//cac truong hop gap undefined
// th1: khai báo không truyền giá trị
// var let không khai báo thì undefined nhưng const thì ko đc
 //const a
 //console.log(a)
//th2: gọi thuộc tính ko tồn tại trong object
// th3: phương thức ko có return hoặc chỉ có từ khóa return
 //3: object
// var teo={name:"Nguyen Van Teo",age:10}
 //console.log(teo.name)
 //console.log(teo['name'])

 //4: kiểu array
 // const ko lấy arrayNymber = 1 cái khác mà thay đổi giá trị trong mảng đc
//  const arrayNumber=[]
//  arrayNumber[0]=10
//  console.log(arrayNumber)

//5: toán tử
// + - * / % ++ -- 
// var a=5
// var b=6
// var c= ++a - --b + ++b + a-- - b++ 
// console.log(c)
// 6 - --b + ++b + a-- - b++    a:6, b=6
//6 - 5 + ++b + a-- - b++     a:6, b=5
// 6 - 5 + 6 + a-- - b++    a:6, b=6
// 6 - 5 + 6 + 6 - 6    a:6, b=6
//7

//biểu thức 3 ngôi

//7: funcion 
// function showName(){
//     return
// }
// console.log(showName())

//8: object methond
// const teo = {
//     name="Nguyen Van Teo",
//     age=10,
//     getName : function(){
//         return this.name
//     }
// }
// console.log(teo.getName())

//template string
//bt 8
const rectangle = {
    width = 5,
    height = 7,
    getWidth : function(){
        return this.width
    },
    getHeight : function(){
         return this.height
    },
    getArea : function(){
        return `dien tich  ${this.width * this.height}`
    }
}
console.log(rectangle.getWidth())
console.log(rectangle.getHeight())
console.log(rectangle.getArea())