class Course {

    static all = []
    static coursesContainer = document.getElementById("courses-container")
    static courseForm = document.getElementById("course-form-container")
    static coursesList = document.getElementById("courses-list")

    
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

    static renderForm(d) {
        Course.courseForm.innerHTML += `
        <div id="new-course-form">
            <form>
                <h2>Add A Course:</h2>
                Name: <input type="text" id="name"><br>
                Address: <input type="text" id="address"><br>
                Description: <input type="text" id="description"><br>
                Website: <input type="text" id="website"><br>
                <input type="hidden" id="destination" value="${d}">
                <input type="submit" id="create" value="Submit">
            </form>
        </div>
        `
    }

    courseHTML() {
       this.element.innerHTML += `
            <div class="course-info" id="box-${this.id}">
                <h3><strong>${this.name}   <button class="delete-btn ghost-button" data-id=${this.id}">Delete</button></strong></h3>
                <p><strong>Address:</strong> ${this.address}</p>
                <p><strong>Description:</strong> ${this.description}</p>
                <a href=${this.website} target="_blank">Learn More</a>
                <br>
            </div>
       `
       return this.element
    }
   
    appendCourseToDom() {
        Course.coursesList.append(this.courseHTML())
    }

    handleClick = () => {
       if (event.target.innerText === "Delete") {
           this.element.remove()
           courseService.deleteCourse(this.id)
       }
    }

    
}