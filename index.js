const base_url = "http://127.0.0.1:3000"
const courseService = new CourseService(base_url)

Course.courseForm.addEventListener('submit', handleSubmit)

Course.renderForm();
// courseService.createCourse();

function handleSubmit() {
    event.preventDefault();
    courseService.createCourse();
    event.target.reset();
}