class Course {

    static all = []
    static coursesContainer = document.getElementById("courses-container")
    static courseForm = document.getElementById("course-form-container")
    
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
            <form id="new-course-form">
                <h2>Add A Course:</h2>
                Name: <input type="text" id="name"><br>
                Address: <input type="text" id="address"><br>
                Description: <input type="text" id="description"><br>
                Website: <input type="text" id="website"><br>
                <input type="hidden" id="destination" value="${d}">
                <input type="submit" id="create" value="Submit">
            </form>
        `
    }
    static removeFromDOM() {
        Course.coursesContainer = "";
    }

    courseHTML() {
       this.element.innerHTML += `
        <div class="box">
            <h2>${this.name}</h2>
            <p>Address: ${this.address}</p>
            <p>Description: ${this.description}</p>
            <a href=${this.website} target="_blank">Visit Site</a>
            <br>
            <button class="delete-btn" data-id=${this.id}">Delete</button>
        </div>
       `
       return this.element
    }
   
    slapOnDom() {
        Course.coursesContainer.append(this.courseHTML())
    }

    handleClick = () => {
       if (event.target.innerText === "Delete") {
           this.element.remove()
           courseService.deleteCourse(this.id)
       }
    }

    
}