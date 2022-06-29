const base_url = "http://127.0.0.1:3000"
const courseService = new CourseService(base_url)
const destinationService = new DestinationService(base_url)
const addCourseBtn = document.getElementById('btn-add-course')
const addDestinationBtn = document.getElementById('btn-add-destination')
const viewDestinationBtn = document.getElementById('btn-view-destinations')
const viewCoursesBtn = document.getElementById('btn-view-courses')


viewDestinationBtn.addEventListener('click', () => {
    const destinations = destinationService.getDestinations();
})

addCourseBtn.addEventListener('click', () => {
    const form = Course.renderForm();
    // if (form.style.display === 'none') {
    //     form.style.display = 'block';
    // } else {
    //     form.style.display = 'none';
    // }
})

addDestinationBtn.addEventListener('click', () => {
    const form = Destination.renderForm();
})

// destinationService.getDestinations();
Destination.destinationForm.addEventListener('submit', handleDestinationSubmit)
Course.courseForm.addEventListener('submit', handleCourseSubmit)

function handleDestinationSubmit() {
    event.preventDefault();
    destinationService.createDestination();
    event.target.reset();
}

function handleCourseSubmit() {
    event.preventDefault();
    courseService.createCourse();
    event.target.reset();
}