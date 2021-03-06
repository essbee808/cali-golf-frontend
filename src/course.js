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
        this.element.addEventListener('click', this.handleDelete)
        Course.all.push(this)
    }

    static renderForm(d) {
        let html = `
        <div>
            <form id="new-course-form">
                <h2>Add A Course:</h2>
                <input type="text" id="name" placeholder="Name"><br>
                <input type="text" id="address" placeholder="Address"><br>
                <input type="text" id="description" placeholder="Description"><br>
                <input type="text" id="website" placeholder="Website"><br>
                <input type="hidden" id="destination" value="${d}">
                <input type="submit" id="create" value="Submit">
            </form>
        </div>
        `

        Course.courseForm.insertAdjacentHTML("afterbegin", html)
    }

    courseHTML() {
       this.element.innerHTML += `
            <div class="course-info" id="box-${this.id}">
                <h3><a href=${this.website} target="_blank"><strong>${this.name}</strong></a></h3>
                
                <p><strong>Address:</strong> ${this.address}</p>
                <p><strong>Description:</strong> ${this.description}</p>
                <div class="delete-btn">
                    <button class="ghost-button" data-id=${this.id}">Remove</button>
                </div>
                
            </div>
       `
       return this.element
    }
   
    appendCourseToDom() {
        Course.coursesList.append(this.courseHTML())
    }

    handleDelete() {
        const d = parseInt(this.dataset.id)
        if (event.target.innerText === 'Remove') {
            const isExecuted = confirm("Are you sure you want to delete?");
            if (isExecuted === true) {
                this.remove();
                courseService.deleteCourse(d)
            }    
        }
    }

    
}