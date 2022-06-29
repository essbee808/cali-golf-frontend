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
            destination_id: 1
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
    getCourses(event) {
        const destinationId = parseInt(event.target.id)
        debugger
        
        fetch(`${this.endpoint}/destinations/${destinationId}/courses`)
        .then(resp => resp.json())
        .then(courses => {
            for (let course of courses) {
                const c = new Course(course)
                c.slapOnDom();
            }
        })
       
    }

    // Edit request


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