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
            console.log('return', course)
        })

    }
}