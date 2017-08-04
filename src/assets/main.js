$(document).ready(function() {

	$.ajax({
		url: 'https://www.codeschool.com/users/icsdigital.json',
		dataType: 'jsonp',
		success: function(response) {
			addCourses(response.courses.completed);
		}
	});

	function addCourses(courses) {
		
		var $badges = $('#badges');

		courses.forEach(function(course) {
			var $course = $('<div />', {
				'class' : 'course'
			}).appendTo($badges);

			$('<h3 />', {
				text: course.title
			}).appendTo($course);
			$('<img />', {
				src: course.badge
			}).appendTo($course);
			$('<a />', {
				'class' : 'btn btn-primary',
				text: 'See Course',
				target: '_blank',
				href: course.url
			}).appendTo($course);
		})
	}
});
