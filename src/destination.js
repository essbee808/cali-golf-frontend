class Destination {

    static all = []

    static destinationForm = document.getElementById('destination-form-container')
    static destinationsContainer = document.getElementById('destinations-container')
    static destinationHeading = document.getElementById('destination-heading')

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
            <form id="new-destination-form">
                <label for="name">New Destination:</label>
                <input type="text" id="name" placeholder="Add a destination here">
                <input type="submit" id="create" value="Submit">
            </form>
        `
    }

    destinationHTML() {
        this.element.classList.add("rcorners");
        this.element.classList.add("content");
        
        this.element.innerHTML += `
        <div id="destination-content-${this.id}">
            <h2 data-id=${this.id} class="view">${this.name}</h2>
            
            <br>
        </div>
        `
        // <button class="view-btn" data-id=${this.id} id="${this.id}" value="view">View</button>
        //     <button class="delete-btn" data-id=${this.id} id="${this.id}" value="delete">Delete</button>
        return this.element
    }

    appendDestinationToDom() {
        Destination.destinationsContainer.append(this.destinationHTML())
    }

    handleInfo() {

        const d = parseInt(this.dataset.id)
        if (event.target.classList.value === 'view') {
         
            Destination.renderForm(d);
            destinationService.destinationInfo(d)
        }
      
    }

    handleDelete() {
        const d = parseInt(this.dataset.id)
        if (event.target.classList.value === 'delete') {
            this.remove();
            destinationService.deleteDestination(d);
        }
    }

  
}