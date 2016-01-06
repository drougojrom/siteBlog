// Scriptfile with routes for our blogsite

// layout
Router.configure({
	layoutTemplate: "layout"

});


// homepage

Router.route("/", function(){

	this.render("home");
});


// projects page

Router.route("/projects", function(){
	this.render("projects");

});


// news and updates

Router.route("/news", function(){
	this.render("news");
});


// some biography information
Router.route("/bio", function(){
	this.render("bio");
});