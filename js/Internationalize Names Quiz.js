//Internationalize Names Quiz

function inName() {

    var finalName = bio.name;
/*
What is going on here:
 References: http://www.w3schools.com/jsref/jsref_slice_string.asp
             http://www.w3schools.com/jsref/jsref_indexof.asp
"slice" is taking the "bio.name" (eg.: "andre oLIveira") and slicing the name in parts
inside the parenthesis "slice" is searching for the first index ("0")
The comma sets the range, it will keep going until it finds a space ' '
According to w3schools (shame on me, I know):
The indexOf() method returns the position of the first occurrence of a specified value in a string.
Usage example:
    var str = "Hello world, welcome to the universe.";
    var n = str.indexOf("welcome");
*/
    var firstName = bio.name.slice(0, bio.name.indexOf(' '));
/*
    This instance of slice is taking the NOW divided first part of the complete name, ie. firstName.
    Its first letter is being taken (0,1) and it sets this letter to upper case.
    After that the rest of the first name is forced to lower case using the slice method.
    Notice that only the first parameter is set, the start. According to w3schools:
    Syntax
    string.slice(start,end)
    start
    Required.
    The position where to begin the extraction. First character is at position 0
    end
    Optional.
    The position (up to, but not including) where to end the extraction. If omitted, slice() selects all characters from the start-position to the end of the string
    After that, all the values are returned to the already declared variable firstName
*/
    firstName = firstName.slice(0,1).toUpperCase() + firstName.slice(1).toLowerCase();
/*
    Now we declare the lastName variable. Again we take the first complete name parameter, the bio.name (eg.:"andre oLIveira") and slice it. Now instead of 0 we set the parameter as the first space ' ' + 1, since we do not want to include the space in the lastName variable.
    Notice that again slice is using only the start parameter, meaning that the "slice" will keep going until it reaches the end of the string. After we capture the whole last name we assign the values to the variable lastName
*/
    var lastName = bio.name.slice(bio.name.indexOf(' ')+1);
/*
    This next one is easy. With the last name captured we reset the complete variable to uppercase and assign the new value again to the variable
*/
    lastName = lastName.toUpperCase();
/*
    Almost done. Now we are going to overwrite the initial value of finalName (that was in the beginning 'bio.name'). We use the now correctly formatted variables firstName and lastName, plus we add a space between the variables
*/
    finalName = (firstName + ' ' + lastName);
/*
    At last we return the now correctly formated complete name. It was "andre oLIveira", now it should be "Andre OLIVEIRA"
*/
    console.log(finalName);
    $('#name').text(finalName);
    return finalName;
};

$('#main').append(internationalizeButton);
