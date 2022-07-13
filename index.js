const base_url = "http://127.0.0.1:3000"
const courseService = new CourseService(base_url)
const destinationService = new DestinationService(base_url)

const searchFormContainer = document.getElementById('search')
renderSearchForm();
searchFormContainer.addEventListener('submit', handleSearchSubmit)

const main = document.getElementById('main')

const ballImg = document.getElementById('ball')
ballImg.addEventListener('click', handleBallClick)

function handleBallClick() {
    Destination.destinationHeading.innerHTML = " ";
    Course.courseForm.innerHTML = " ";
    Course.coursesList.innerHTML = " ";
    if (searchFormContainer.innerText === "") {
        renderSearchForm();
        destinationService.getDestinations();
    } 
    
    // Destination.destinationForm.innerHTML = " ";
    // Destination.destinationsContainer.innerHTML = " ";
   
    
    // destinationService.getDestinations();
}

// Destination.renderForm();
// destinationService.getDestinations();

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


// PRACTICE

// 1. render search on load 
// 2. add event listener for click event 
// 3. handle form submission and get value
// 4. run filter method

function renderSearchForm() {
    searchFormContainer.innerHTML += `
        <form>
            <label>Search for a destination: </label>
            <input type="text" id="searchQuery"></input>
            <input type="submit" id="create" value="Search">
        </form>
    `
}

function handleSearchSubmit() {
    event.preventDefault();
    destinationService.search();
    event.target.reset();
}





