const num=[1,2,3,4,5,6,7,8];
 const part =num.slice(2,5);
const removed=num.splice(2,3,88,77,99);
console.log(removed);
 console.log(part);
console.log(num);
const together=num.join(" ami, ");
console.log(together);