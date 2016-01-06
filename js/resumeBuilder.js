var work = {};
work.currentJob = "Web Application Designer";
work.currentEmployer = "K+N";
work.yearsWorked = "2016";
work.cityOfBusiness = "Hamburg";

var education = {};
education["lastSchoolAttended"] = "FHV";
education["yearsAttended"] = "2011-2013";
education["cityOfSchool"] = "Dornbirn, Austria";

$("#main").append(work["currentJob"]);
$("#main").append(education.lastSchoolAttended);
