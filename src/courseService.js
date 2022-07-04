class CourseService{
    constructor(endpoint){
        this.endpoint = endpoint
    }

    // Create course
    createCourse() {
        const course = {
            name: document.getElementById('name').value,
            address: document.getElementById('address').value,
            description: document.getElementById('description').value,
            website: document.getElementById('website').value,
            destination_id: parseInt(document.getElementById('destination').value)
        }
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(course)
        }

        fetch(`${this.endpoint}/courses`, configObj)
        .then(resp => resp.json())
        .then(course => {
            const c = new Course(course)
            c.slapOnDom();
        })
    }

    // Read/Index
    getCourses() {

        const destinationId = parseInt(event.target.dataset.id)     
        fetch(`${this.endpoint}/destinations/${destinationId}/courses`)
        .then(resp => resp.json())
        .then(courses => {
            if (courses.length < 1) {
                alert(`No courses found. Add a course and help us grow!`)
            } else {
                for (let course of courses) {
                    const c = new Course(course)
                
                    c.slapOnDom();
                }
            }
        })
    }

    // Delete
    deleteCourse(id) {
        fetch(`${this.endpoint}/courses/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}