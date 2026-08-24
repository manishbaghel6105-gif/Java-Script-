
let students = [
    {
        name: "Ayaan",
        marks: 56,
    },
    {
        name: "Mansi",
        marks: 46,
    },
    {
        name: "Debadrita",
        marks: 33,
    },
    {
        name: "Shivan",
        marks: 30,
    },
    {
        name: "Alauddin",
        marks: 28
    }
]
const attendence = ["present", "present", "absent", "present", "absent"]

// -> { present : 3 , absent : 2 }

// let obj = {}

// attendence.forEach((value) => {

//     if (obj[value]) {
//         obj[value] = obj[value] + 1
//     } else {
//         obj[value] = 1
//     }

// })

// console.log(obj);


// by reduce

const obj = attendence.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1 ;
    return acc
}, {})

console.log(obj);