class Destination {

    static all = []

    static destinationForm = document.getElementById('destination-form-container')
    static destinationsContainer = document.getElementById('destinations-container')

    constructor({id, name}){
        this.id = id
        this.name = name

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `destination-${this.id}`
        this.element.addEventListener('click', this.handleInfo)
        this.element.addEventListener('click', this.handleDelete)

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

    destinationHTML() {
        this.element.classList.add("rcorners1");
        this.element.classList.add("content");
        
        this.element.innerHTML += `
        <div id="destination-content-${this.id}">
            <h2 id="${this.id}">${this.name}</h2>
            <button class="delete" data-id="${this.id}" value="delete">Delete</button>
            <br>
            <button class="view-btn" data-id=${this.id} id="${this.id}" value="view">View</button>
            <button class='btn-add-course' data-id="${this.id}" value="+">+</button>
            <br>
        </div>
        `
        return this.element
    }

    appendCoursesToDom() {
        debugger
    }

    appendDestinationToDom() {
        Destination.destinationsContainer.append(this.destinationHTML())
    }

    handleInfo() {
        const d = parseInt(this.dataset.id)
        if (event.target.value === 'view') {
            destinationService.destinationInfo(d)
        }
      
    }

    handleDelete() {
        const d = parseInt(this.dataset.id)
        if (event.target.value === 'delete') {
            this.remove();
            destinationService.deleteDestination(d);
        }
    }

  
}