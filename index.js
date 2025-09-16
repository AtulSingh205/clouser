function abcd(){
    let count = 0;
    return function(){
         count++
         return count
    }
}
let a = abcd()
console.log(a());
console.log(a());
console.log(a())
console.log(a())

let b = abcd()
console.log(b())