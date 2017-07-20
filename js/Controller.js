var Controller = function() {

};

Controller.prototype.getEducationSchools = function() {
    return education.schools;
};

Controller.prototype.getWorkJobs = function() {
    return work.jobs;
};

Controller.prototype.getProjects = function() {
    return project.projects;
};

Controller.prototype.getBioName = function() {
    return bio.name;
};

Controller.prototype.getBioRole = function() {
    return bio.role;
};

Controller.prototype.getWelcomeMessage = function() {
    return bio.welcomeMessage;
};

Controller.prototype.getBioPicture = function() {
    return bio.picture;
};

Controller.prototype.getBioSkills = function() {
    return bio.skills;
};

Controller.prototype.getBioContacts = function() {
    return bio.contacts;
};
