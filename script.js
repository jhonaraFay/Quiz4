let coursesData = [];

fetch('courses.json')
    .then(response => response.json())
    .then(data => {
        coursesData = data.courses; // Store data globally for search
        displayCourses(coursesData);
    })
    .catch(error => console.error('Error loading JSON:', error));

function displayCourses(courses) {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = ""; // Clear previous content
    courses.forEach(course => {
        let li = document.createElement('li');
        li.innerHTML = `${course.year_level} Year, ${course.sem} Sem - ${course.code}: ${course.description} (${course.credit.replace(/\n/g, '<br>')} Credits\n)`;
        courseList.appendChild(li);
    });
}

function filterCourses() {
    const searchText = document.getElementById('search-bar').value.toLowerCase();
    const filteredCourses = coursesData.filter(course => 
        course.description.toLowerCase().includes(searchText)
    );
    displayCourses(filteredCourses);
}