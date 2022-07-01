class Destination {

    static all = []
    static destinationsContainer = document.getElementById('destinations-container')
    static destinationForm = document.getElementById('destination-form-container')

    constructor({id, name}){
        this.id = id
        this.name = name

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `destination-${this.id}`
        this.element.addEventListener('click', this.handleClick)
        Destination.all.push(this)
    }

    static renderForm() {
        Destination.destinationForm.innerHTML = `
            <br>
            <form id="new-destination-form">
                <strong>Add A Destination:</strong>
                <br>
                <input type="text" id="name">
                <br>
                <br>
                <input type="submit" id="create" value="Submit">
            </form>
        `
    }

    appendCourses() {
        debugger
    }

    destinationHTML() {
     
        this.element.classList.add("rcorners1");
        this.element.classList.add("content");
        this.element.innerHTML += `
          <h1 id="${this.id}">${this.name}</h1>
          <button class="delete" data-id="${this.id}" value="delete">Delete</button>
          <br>
          <button class="view-btn" data-id=${this.id} id="${this.id}" value="view">View</button>
          <button class='btn-add-course' data-id="${this.id}" value="+">+</button>
          <br>
        `
        return this.element
    }

    slapOnDom() {
        Destination.destinationsContainer.append(this.destinationHTML())
    }

    // CURRENTLY WORKING
    handleClick() {
        // const d = parseInt(this.dataset.id)
        const d = parseInt(event.target.dataset.id)

        if (event.target.value === 'delete') {
            this.remove();
            destinationService.deleteDestination(d);

        } else if (event.target.value === 'view') { 
            debugger
            courseService.getCourses();

        } else if (event.target.value === '+') { 
            Course.renderForm(d);
        }

    }
}