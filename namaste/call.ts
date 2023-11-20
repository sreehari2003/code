let name1 = {
  firstname: "Ram",
  lastname: "Sharma",
  printFullName: function () {
    console.log(this.firstname + " " + this.lastname);
  },
};

let name2 = {
  firstname: "Sachin",
  lastname: "Tendulkar",
};

// Print firstname and lastname of name2 object using name1 printFullName
// function without modifing existing objects or creating new object.

name1.printFullName.apply(name2,"");
