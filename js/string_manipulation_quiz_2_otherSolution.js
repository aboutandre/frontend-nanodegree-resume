function inName() {
    /* var name = window.name; */ /* Gives comma-separated array */
    /*  var name = bio.name;   */ /* bio.name gives space-separated array */

    var name = bio.name.trim().split(" "); // Turn into an array ["AlbERt" "EINstEiN"]. Trim off whitespace.
    console.log("name: " + name);
    var firstName = name[0].slice(0,1).toUpperCase()+ name[0].slice(1).toLowerCase(); // Get and change the first name;
    var lastName = name[1].toUpperCase(); // Get and change the last name;
    console.log("firstName: " + firstName);
    console.log("lastName: " + lastName);
    var oldSpelling = $('#name').text();
    var newSpelling = firstName + " " + lastName;
    $('#name').text( newSpelling );
    console.log(newSpelling);
}

$("#main").prepend(internationalizeButton);
