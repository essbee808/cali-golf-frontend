class Destination {

    static all = []
    static destinationsContainer = document.getElementById('destinations-container')
    static destinationForm = document.getElementById('destination-form-container')


    constructor({id, name}){
        this.id = id
        this.name = name

        this.element = document.createElement('div')
        this.element.dataset.id = this.id
        this.element.id = `destination-${this.id}`
        this.element.addEventListener('click', this.handleClick)
        Destination.all.push(this)
    }

    static renderForm() {
        Destination.destinationForm.innerHTML += `
            <form id="new-destination-form">
                Name: <input type="text" id="name"><br>
                <input type="submit" id="create" value="Add">
            </form>
        `
    }

    destinationHTML() {
        this.element.classList.add("rcorners1");
        this.element.innerHTML += `
            <h3>${this.name}</h3>
            <button class='btn-add-course' data-id="${this.id}">Add Course</button>
            <br>
            <br>
            <button class="view-btn" data-id=${this.id} id="${this.id}">View Courses</button>
            <button class="delete" data-id="${this.id}">Delete</button>
            
        `
        return this.element
    }

    slapOnDom() {

        Destination.destinationsContainer.append(this.destinationHTML())
    }

    handleClick() {
        const d = parseInt(this.dataset.id)
        if (event.target.innerHTML === 'Delete') {
            this.remove();
            destinationService.deleteDestination(d);
        } else if (event.target.innerHTML === 'View Courses') {
            courseService.getCourses(event);
        } else if (event.target.innerHTML === 'Add Course') {
            debugger
            Course.renderForm(d);
        }
    }

}