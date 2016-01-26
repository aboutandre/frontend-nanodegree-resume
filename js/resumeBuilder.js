var work = {
    "jobs": [
        {
            "employer": "K+N",
            "title": "Web Application Designer",
            "location": "Hamburg, Germany",
            "dates": "2016",
            "description": "Development of eCommerce solutions"
},
        {
            "employer": "Compart",
            "title": "UI Designer",
            "location": "Stuttgart, Germany",
            "dates": "2013-2015",
            "description": "Development of Document Output Management solution"
}
]
};

//Add project information

var projects = {
    "project": [
        {
            "title": "aro",
            "dates": "2011",
            "description": "How to offer personalised coffee, user friendly usability and a sustainbable economic model?",
            "images": [
    "https://aboutandre.com/wp-content/uploads/2014/11/07.jpg_-filename_UTF-807-150x150.jpg",
    "https://aboutandre.com/wp-content/uploads/2014/11/02.jpg_-filename_UTF-802-150x150.jpg",
    "https://aboutandre.com/wp-content/uploads/2014/11/11.jpg_-filename_UTF-811-150x150.jpg"
  ]
},
        {
            "title": "song jelly",
            "dates": "2012",
            "description": "How to discover music in a novel way? Use a mix of radio and pre-selected meta-data.",
            "images": [
    "https://aboutandre.com/wp-content/uploads/2014/12/003-150x150.png",
    "https://aboutandre.com/wp-content/uploads/2014/12/007-150x150.png",
    "https://aboutandre.com/wp-content/uploads/2014/12/011-150x150.png"
  ]
},
        {
            "title": "résonance",
            "dates": "2010",
            "description": "How to make an exhibition of an international known artist with decades of works with a low budget? Make an exhibition with cardboards on a 1:2 scale",
            "images": [
    "https://aboutandre.com/wp-content/uploads/2015/05/resonance_sp-56-150x150.jpg",
  "https://aboutandre.com/wp-content/uploads/2015/05/resonance_sp-45-2-150x150.jpg",
  "https://aboutandre.com/wp-content/uploads/2015/05/resonance_sp-38-150x150.jpg"
]
}
]
};

//Add bio information

var bio = {
    "name": "Andre Oliveira",
    "role": "Web Designer",
    "welcomeMessage": "Hi, I'm Andre and this is my project showcase",
    "contacts": [
        {
            "mobile": "+4915730000555",
            "email": "info@aboutandre.com",
            "github": "aboutandre",
            "twitter": "_oliveirandre",
            "location": "Hamburg"
  }
],
    "skills": ["CSS", "HTML", "Illustrator", "Photoshop", "Project Management"]
};

//Add education information

var education = {
    "schools": [
        {
            "name": "HTWG - Konstanz",
            "location": "Constance, Germany",
            "degree": "B.A.",
            "majors": "Communication Design",
            "dates": "2009-2011",
            "url": "http://www.htwg-konstanz.de/"
},
        {
            "name": "FHV",
            "location": "Dornbirn, Austria",
            "degree": "M.A.",
            "majors": "Intermedia",
            "dates": "2011-2013",
            "url": "http://www.fhv.at/"
}
],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer",
            "school": "Udacity",
            "dates": "2015-2016",
            "url": "https://www.udacity.com"
  },
        {
            "title": "Intro to Computer Science",
            "school": "Udacity",
            "dates": "2015-2016",
            "url": "https://www.udacity.com"
  }
]
};

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formatedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formatedSkill);
    }
}

$("#header").append(HTMLheaderName.replace("%data%", bio.name));
//$("#main").append(work["currentJob"]);
//$("#main").append(education.lastSchoolAttended);