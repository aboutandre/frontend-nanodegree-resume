var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
var firstName = oldName.slice(0,oldName.indexOf(' '));
    firstName = firstName.slice(0,1).toUpperCase() + firstName.slice(1).toLowerCase();
    var lastName = oldName.slice(oldName.indexOf(' ')+1);
    lastName = lastName.toUpperCase();
    finalName = (firstName + ' ' + lastName);

    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));
