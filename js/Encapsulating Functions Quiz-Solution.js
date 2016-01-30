projects.display = function() {
    for (project in projects.project) {
	$("#projects").append(HTMLprojectStart);

	var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedProjTitle);

	var formattedProjDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedProjDates);

	var formattedProjDescription = HTMLprojectDescription.replace("%data", projects.projects[project].description);
	$(".project-entry:last").append(formattedProjDescription);

	if (projects.projects[project].images.length > 0) {
		for (image in projects.projects[project].images) {
			var formattedProjImage = HTMLprojectImage.replace("%data", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedProjImage);
		}
	}
}
