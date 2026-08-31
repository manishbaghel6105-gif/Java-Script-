// Create an array of email addresses and use filter() to get only the emails that include "@gmail.com".
// Example:
// Input:
// ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"]
// Output:
// ["rahul@gmail.com", "aman@gmail.com"]

const emailAddresses =["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"]

const filteremail  = emailAddresses.filter(emailAddresses => emailAddresses.includes("gmail.com") )
console.log(filteremail);