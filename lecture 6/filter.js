
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

const failedStudents = students.filter((student) => student.marks < 33).map((student) => student.name)  // [ { name: 'Shivan', marks: 30 }, { name: 'Alauddin', marks: 28 } ]

//filter ak use krke agar hmko names hi dikhane h marks nhi to sir
// const failedStudentsName  = failedStudents.map((student) => student.name) 
// console.log(failedStudents );


let marks = [56, 24, 62, 73, 78]

let totalMarks = 0

// marks.forEach((mark) => totalMarks = totalMarks + mark)

// const totalMarks = marks.reduce((totalMarks , mark) =>   totalMarks + mark , 0)

// const totalMarks = students.reduce((totalMarks , student) =>   totalMarks + student.marks , 0)

// console.log(totalMarks); 


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
