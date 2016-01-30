//Work Information

var work = {
    "jobs": [
        {
            "employer": "K+N",
            "title": "Web Application Designer",
            "location": "Hamburg, Germany",
            "dates": "2016 to present",
            "description": "Development of eCommerce solutions. I am the sole designer of my company. My team consists of 60 programmers and me. We are responsible for the whole company software suite UI, which encompasses over 10 applications. I have been responsible for the redesign of our major applications as well as the new design of features and stand-alone enterprise software. During this time, I have also planned and conducted usability tests. My activities have led me to work with the back and front end developers, as well as test and documentation departments. My development planning embraces from simple sketches going through mockups up to a final prototype. It is a mixed environment where both English and German are used alternatively."
},
        {
            "employer": "Compart",
            "title": "UI Designer",
            "location": "Stuttgart, Germany",
            "dates": "2013-2015",
            "description": "Development of Document Output Management solution. I am the sole designer of my company. My team consists of 3 programmers and me. We are responsible for the whole company software suite UI, which encompasses over 10 applications. I have been responsible for the redesign of our major applications as well as the new design of features and stand-alone enterprise software. During this time, I have also planned and conducted usability tests. My activities have led me to work with the back and front end developers, as well as test and documentation departments. My development planning embraces from simple sketches going through mockups up to a final prototype. It is a mixed environment where both English and German are used alternatively."
}
]
};

//Add work information to the resume

work.display = function () {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployerTitle);

        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedWorkDescription);
    }
}

//Add project information

var projects = {
    "project": [
        {
            "title": "aro",
            "dates": "2011",
            "description": "How to offer personalised coffee, user friendly usability and a sustainbable economic model?<br>In february 2011 I started my Bachelor Project in the Konstanz University of Applied Sciences, in Germany. The project was a challenge. I wanted to do a full automated coffee machine that would make the best coffee possible, with the best usability and still cheaper than the current models in the market.",
            "images": [
    "https://aboutandre.com/wp-content/uploads/2014/11/07.jpg_-filename_UTF-807-150x150.jpg",
    "https://aboutandre.com/wp-content/uploads/2014/11/02.jpg_-filename_UTF-802-150x150.jpg",
    "https://aboutandre.com/wp-content/uploads/2014/11/11.jpg_-filename_UTF-811-150x150.jpg"
  ]
},
        {
            "title": "song jelly",
            "dates": "2012",
            "description": "How to discover music in a novel way? Use a mix of radio and pre-selected meta-data.<br>Song Jelly is an App concept that turns your iPhone© into a music discovery device. The App has access to a databank of music that would enable the user to browse the whole catalog using some simple filters to find content that fit certain parameters.<br>In the beginning of 2012, Gerhard Breuss and I started to develop the concept. We wanted to offer the most complete catalog that there is taking users outside their entourage and encouraging people to discover artists that even though are not directly related could still be adequate to a certain style.",
            "images": [
    "https://aboutandre.com/wp-content/uploads/2014/12/003-150x150.png",
    "https://aboutandre.com/wp-content/uploads/2014/12/007-150x150.png",
    "https://aboutandre.com/wp-content/uploads/2014/12/011-150x150.png"
  ]
},
        {
            "title": "résonance",
            "dates": "2010",
            "description": "How to make an exhibition of an international known artist with decades of works with a low budget? Make an exhibition with cardboards on a 1:2 scale<br>Charlotte Perriand (1903-1999) is mostly known for her the years that she worked in the atelier from Le Corbusier and Pierre Jeanneret. But she worked for over 50 years more, producing fascinating, multi-faceted and unique works.<br>She was a born globetrotter. In the 1940s she went to Japan, where she promoted industrial design with local culture. In the 1960s she went to Rio de Janeiro. Amazed by the nature of it’s people and the landscape she fell in love with the city. During this same time she was always in touch with Paris, mixing both influences to create distinctive pieces of design.",
            "images": [
    "https://aboutandre.com/wp-content/uploads/2015/05/resonance_sp-56-150x150.jpg",
  "https://aboutandre.com/wp-content/uploads/2015/05/resonance_sp-45-2-150x150.jpg",
  "https://aboutandre.com/wp-content/uploads/2015/05/resonance_sp-38-150x150.jpg"
]
}
]
};

//Add projects to the resume

projects.display = function () {
    for (project in projects.project) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
        var formattedProjDate = HTMLprojectDates.replace("%data%", projects.project[project].dates);
        var formattedProjDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);

        $(".project-entry:last").append(formattedProjTitle);
        $(".project-entry:last").append(formattedProjDate);
        $(".project-entry:last").append(formattedProjDescription);

        if (projects.project[project].images.length > 0) {
            for (image in projects.project[project].images) {
                var formattedProjImage = HTMLprojectImage.replace("%data%", projects.project[project].images[image]);
                $(".project-entry:last").append(formattedProjImage);
            }
        }

    }
}


//Add bio information

var bio = {
    "name": "Andre Oliveira",
    "role": "Web Designer",
    "welcomeMessage": "Hi, I'm Andre and this is my project showcase",
    "contacts": [
        {
            "mobile": "+4915730000555",
            "email": "info@aboutandre.com",
            "github": "https://github.com/aboutandre",
            "twitter": "https://twitter.com/oliveirandre_",
            "location": "Hamburg, Germany"
  }
],
    "skills": ["CSS", "HTML", "Illustrator", "Photoshop", "Project Management"],
    "biopic": "https://aboutandre.com/wp-content/uploads/2016/01/IMG_0017.jpg"
};

bio.display = function () {

    $("#header").append(HTMLheaderName.replace("%data%", bio.name));
    $("#header").append(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts[0].mobile));
    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts[0].email));
    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts[0].github));
    $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts[0].twitter));
    $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts[0].location));

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formatedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formatedSkill);
        }
    }
}

//Add education information

var education = {
    "schools": [
        {
            "name": "Fachhochschule Vorarlberg",
            "location": "Dornbirn, Austria",
            "degree": "Master of Arts",
            "major": "Intermedia <br> It was a term used in the mid-sixties by Fluxus artist Dick Higgins to describe various inter-disciplinary art activities that occurred between genres in the 1960s.Thus, the areas such as those between drawing and poetry, or between painting and theatre could be described as 'intermedia'. With repeated occurrences, these new genres between genres could develop their own names (e.g. visual poetry or performance art).",
            "dates": "2011-2013",
            "url": "http://www.fhv.at/"
},
        {
            "name": "HTWG - Konstanz",
            "location": "Constance, Germany",
            "degree": "Bachelor of Arts",
            "major": "Communication Design <br>It is a mixed discipline between design and information-development which is concerned with how media intermission such as printed, crafted, electronic media or presentations communicate with people. A communication design approach is not only concerned with developing the message aside from the aesthetics in media, but also with creating new media channels to ensure the message reaches the target audience. Some designers use graphic design and communication design interchangeably due to overlapping skills.",
            "dates": "2009-2011",
            "url": "http://www.htwg-konstanz.de/"
},
        {
            "name": "PUC-Rio - Rio de Janeiro",
            "location": "Rio de Janeiro, Brazil",
            "degree": "Diplom of Arts",
            "major": "Industrial Design <br>It is a process of design applied to products that are to be manufactured through techniques of mass production. Its key characteristic is that design is separated from manufacture: the creative act of determining and defining a product's form takes place in advance of the physical act of making a product, which consists purely of repeated, often automated, replication. This distinguishes industrial design from craft-based design, where the form of the product is determined by the product's creator at the time of its creation",
            "dates": "2005-2009",
            "url": "www.puc-rio.br/"
        }

],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer",
            "school": "Udacity",
            "dates": "2015-2016",
            "url": "https://www.udacity.com",
            "description": "Learn the fundamentals of how the web works and gain a working knowledge of the three foundational languages that power each and every website: HTML, CSS and JavaScript. This Nanodegree will provide a guided, efficient path for you to learn to build beautiful, responsive websites optimized for security and performance. You’ll see the efforts of your work with each click of the browser’s refresh button! <br> By the end of the Nanodegree you'll have built a diverse portfolio of projects to show employers. You'll also have the opportunity to prepare for your new career with reviews of your online presence (resume, LinkedIn, portfolio), prepare for interviews, take part in workshops covering topics like networking and salary negotiation as well as take part in a new program facilitating job placement."
  },
        {
            "title": "Intro to Computer Science",
            "school": "Udacity",
            "dates": "2015-2016",
            "url": "https://www.udacity.com",
            "description": "If you have zero programming knowledge, completing this Nanodegree will give you the basic understanding and skills you need to get started in the world of programming.<br>This Nanodegree equips you with the foundational knowledge and skills that all programmers use whether they program mobile apps, create web pages, or analyze data. You won’t just learn to code, you will learn what it means to “think like a programmer” and you’ll have your own web page and a portfolio of programs you’ve built to prove it. <br> Successful completion of this program will enhance your skills, broaden your opportunities, and lay the groundwork for a future in technology. It is not a career-track degree, but for beginners, it is a critical step forward"
  }
]
};

//Add education information to the resume
education.display = function () {


    for (item in education.schools) {
        $("#education").append(HTMLschoolStart);
        var schoolName = HTMLschoolName.replace("%data%", education.schools[item].name);
        schoolName = schoolName.replace("#", education.schools[item].url);
        var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[item].degree);
        var schoolDates = HTMLschoolDates.replace("%data%", education.schools[item].dates);
        var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[item].location);
        var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[item].major);
        $(".education-entry:last").append(schoolName + schoolDegree + schoolDates + schoolLocation + "<br>" + schoolMajor + "<br>");
    };

    $("#education").append(HTMLonlineClasses);

    for (item in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var onlineCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[item].title);
        var onlineCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[item].title);
        onlineCourseTitle = onlineCourseTitle.replace("#", education.onlineCourses[item].url);
        var onlineCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[item].school);
        var schoolDates = HTMLonlineDates.replace("%data%", education.onlineCourses[item].dates);
        var onlineCourseDescription = HTMLonlineDescription.replace("%data%", education.onlineCourses[item].description);


        $(".education-entry:last").append(
            onlineCourseTitle +
            onlineCourseSchool +
            schoolDates +
            "<br>" +
            onlineCourseDescription +
            "<br>"
        );
    };

};

bio.display();
work.display();
projects.display();
education.display();

//Appends the google maps
$("#mapDiv").append(googleMap);

//Everthing below here is only for reference

//Click locations Quiz

clickLocations = [];

function logClicks(x, y) {
    clickLocations.push({
        x: x,
        y: y
    });
    console.log('x location: ' + x + '; y location: ' + y);
}
$(document).click(function (loc) {
    // your code goes here
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

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
    firstName = firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase();
    /*
        Now we declare the lastName variable. Again we take the first complete name parameter, the bio.name (eg.:"andre oLIveira") and slice it. Now instead of 0 we set the parameter as the first space ' ' + 1, since we do not want to include the space in the lastName variable.
        Notice that again slice is using only the start parameter, meaning that the "slice" will keep going until it reaches the end of the string. After we capture the whole last name we assign the values to the variable lastName
    */
    var lastName = bio.name.slice(bio.name.indexOf(' ') + 1);
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