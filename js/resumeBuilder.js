var controller  = new Controller();

var view = new View();
view.render();

function inName(name) {
    var nameArray = name.trim().split(" ");
    var firstName = nameArray[0];
    firstName = firstName[0].toUpperCase() + firstName.slice(1);

    var secondName = nameArray[1];
    secondName = secondName.toUpperCase();

    return firstName + " " + secondName;
}


