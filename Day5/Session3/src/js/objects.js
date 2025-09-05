// 1) Object literal with nested props and method
const person = {
  firstName: "Shubham",
  lastName: "Penti",
  contact: {
    email: "shubhampenti@gmail.com",
    phone: "+91-9112208846",
  },
  skills: ["HTML", "CSS", "JavaScript"],
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log("fullName =", person.fullName());
console.log("email =", person.contact?.email);

// 2) Iterate properties
for (let key in person) {
  console.log(key + ":", person[key]);
}

// 3) Add / modify / delete props
person.location = "India";
console.log("added location =", person.location);
delete person.lastName;
console.log("lastName after delete =", person.lastName); // undefined

// 4) Iterate an array property
for (const skill of person.skills) {
  console.log("skill:", skill);
}

