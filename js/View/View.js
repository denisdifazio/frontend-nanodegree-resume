var View = function() {

};

View.prototype.render = function() {
    this.renderBio();
    this.renderWork();
    this.renderProject();
    this.renderEducation();

    $("#main").append(internationalizeButton);
    $("#mapDiv").append(googleMap);
};

View.prototype.renderEducation = function() {

    var schools = controller.getEducationSchools();
   
	for(school in schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%", schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", schools[school].degree);
    var formattedDates = HTMLschoolDates.replace("%data%", schools[school].dates);
    	var formattedLocation = HTMLschoolLocation.replace("%data%", schools[school].location);
		var formattedLocation = HTMLschoolLocation.replace("%data%", schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", schools[school].majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}

};

View.prototype.renderProject = function() {

    var projects = controller.getProjects();
   
  for (i = 0; i < projects.length; i++) {
    var project = projects[i];

    $("#projects").append(HTMLprojectStart);

    var title = HTMLprojectTitle.replace("%data%", project.title);
    title = title.replace("#", project.url);
    $(".project-entry:last").append(title);

    var dates = HTMLprojectDates.replace("%data%", project.dates);
    $(".project-entry:last").append(dates);

    var description = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(description);

    if (project.images.length > 0) {
      for (j = 0; j < project.images.length; j++) {
        var image = HTMLprojectImage.replace("%data%", project.images[j]);
        $(".project-entry:last").append(image);
      }
    } 
  }


};

View.prototype.renderWork = function() { 
    var jobs = controller.getWorkJobs(); 
  for (job in jobs) {
    $("#workExperience").append(HTMLworkStart);
    var employer = HTMLworkEmployer.replace("%data%", jobs[job].employer);
    var title = HTMLworkTitle.replace("%data%", jobs[job].title);
    $(".work-entry:last").append(employer + title);
    $(".work-entry:last").append(HTMLworkDates.replace("%data%", jobs[job].dates));
  }
};

View.prototype.renderBio = function() {   
      $("#header").append(HTMLheaderName.replace("%data%", controller.getBioName()));
      $("#header").append(HTMLheaderRole.replace("%data%", controller.getBioRole()));
      $("#header").append(HTMLwelcomeMsg.replace("%data%", controller.getWelcomeMessage()));
      $("#header").append(HTMLbioPic.replace("%data%", controller.getBioPicture()));

      var skills = controller.getBioSkills();

      if (skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (index = 0; index < skills.length; ++index) {
          var formattedSkills = HTMLskills.replace("%data%", skills[index]);
          $("#skills").append(formattedSkills.replace("%data%", skills[index]));
        }
      }

      var contacts = controller.getBioContacts();

      $("#footerContacts").append(HTMLgithub.replace("%data%", contacts.github));
      $("#footerContacts").append(HTMLemail.replace("%data%", contacts.email));
      var contact = HTMLcontactGeneric.replace("%contact%", "skype");
      $("#footerContacts").append(contact.replace("%data%", contacts.skype));


};