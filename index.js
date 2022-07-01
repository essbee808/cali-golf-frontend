const base_url = "http://127.0.0.1:3000"
const courseService = new CourseService(base_url)
const destinationService = new DestinationService(base_url)

// const addCourseBtn = document.getElementById("btn-add-course")
const addDestinationBtn = document.getElementById('btn-add-destination')
// const viewDestinationBtn = document.getElementById('btn-view-destinations')

// addCourseBtn.addEventListener('click', () => {
//     const form = Course.renderForm();
// })

Destination.renderForm();
destinationService.getDestinations();


// form event listeners
Destination.destinationForm.addEventListener('submit', handleDestinationSubmit)


// handle form submission
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