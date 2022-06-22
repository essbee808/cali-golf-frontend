class Course {

    static all = []
    static coursesContainer = document.getElementById("courses-container")
    static courseForm = document.getElementById('course-form-container')
    
    constructor({id, name, address, description, website, destination_id}){
        this.id = id
        this.name = name
        this.address = address
        this.description = description
        this.website = website
        this.destination_id = destination_id

        this.element = document.createElement('li')
        this.element.dataset.id = this.id 
        this.element.id = `course-${this.id}`
        this.element.addEventListener('click', this.handleClick)
        Course.all.push(this)
    }

    static renderForm() {
        Course.courseForm.innerHTML += `
            <form id="new-course-form">
                Name: <input type="text" id="name"><br>
                Address: <input type="text" id="address"><br>
                Description: <input type="text" id="description"><br>
                Website: <input type="text" id="website"><br>
                <input type="submit" id="create" value="+">
            </form>
        `
        return this.element
    }
}