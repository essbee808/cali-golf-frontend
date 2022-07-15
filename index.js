const base_url = "http://127.0.0.1:3000"
const courseService = new CourseService(base_url)
const destinationService = new DestinationService(base_url)
let insertName = document.querySelector(".insert-name")

// const searchFormContainer = document.getElementById('search')
const searchFormContainer = document.querySelector('#search')

renderSearchForm();
destinationService.getDestinations();
searchFormContainer.addEventListener('submit', handleSearchSubmit)

const ballImg = document.getElementById('ball')
ballImg.addEventListener('click', handleBallClick)

function handleBallClick() {
    clearAll();
    destinationService.getDestinations();
   if (searchFormContainer.innerHTML === "") {
    renderSearchForm();
    } 
}

function clearAll() {
    Destination.destinationsContainer.innerHTML = "";
    Destination.destinationHeading.innerHTML = "";
    Course.coursesList.innerHTML = "";
    Course.courseForm.innerHTML = "";
}

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

function renderSearchForm() {
    let searchForm = `<form>
                    <label>Search for a destination: </label>
                    <input type="text" id="searchQuery"></input>
                    <input type="submit" id="create" value="Search">
                    </form>`
                  
    searchFormContainer.insertAdjacentHTML("afterbegin", searchForm)
}

function handleSearchSubmit() {
    event.preventDefault();
    destinationService.search();
    event.target.reset();
}



