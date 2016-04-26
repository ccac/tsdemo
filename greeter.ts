class Student {
    fullname : string;
    constructor(public firstname, middleinitial, public lastname) {
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
}

interface Person {
    firstname: string;
    lastname: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}

var user = new Student("Alan", "M.", "Chen");

enum Color {Red, Green, Blue};
var c: Color = Color.Green;

document.body.innerHTML = greeter(user);
