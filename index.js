const base_url = "http://127.0.0.1:3000"
const courseService = new CourseService(base_url)
const destinationService = new DestinationService(base_url)
const addCourseBtn = document.getElementById('btn-add-course')
const addDestinationBtn = document.getElementById('btn-add-destination')

addCourseBtn.addEventListener('click', () => {
    const form = Course.renderForm();
    // debugger
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

Course.courseForm.addEventListener('submit', handleSubmit)

// courseService.getCourses();

function handleSubmit() {
    event.preventDefault();
    courseService.createCourse();
    event.target.reset();
}