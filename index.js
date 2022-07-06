const base_url = "http://127.0.0.1:3000"
const courseService = new CourseService(base_url)
const destinationService = new DestinationService(base_url)

const main = document.getElementById('main')


const ballImg = document.getElementById('ball')
ballImg.addEventListener('click', handleBallClick)

function handleBallClick() {
    Destination.destinationForm.innerHTML = " ";
    Destination.destinationsContainer.innerHTML = " ";
    Course.courseForm.innerHTML = " ";
    Course.coursesList.innerHTML = " ";
    Destination.destinationHeading.innerHTML = " ";
    Destination.renderForm();
    destinationService.getDestinations();
}

Destination.renderForm();
destinationService.getDestinations();

// form event listeners
Destination.destinationForm.addEventListener('submit', handleDestinationSubmit)
Course.courseForm.addEventListener('submit', handleCourseSubmit)

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


// Practice


{/* <div id="destination-content-${this.id}">
<h2 data-id=${this.id} class="view">${this.name}</h2>

<button class="delete-btn" data-id=${this.id} id="${this.id}" value="delete">Delete</button>
<br>
</div> */}