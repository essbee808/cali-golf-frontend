class Destination {

    static all = []

    static destinationForm = document.getElementById('destination-form-container')
    static destinationsContainer = document.getElementById('destinations-container')
    static deleteBtn = document.getElementById('delete')
    static destinationHeading = document.getElementById('destination-heading');

    constructor({id, name}){
        this.id = id
        this.name = name

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `destination-${this.id}`
        this.element.addEventListener('click', this.handleInfo)
        this.element.addEventListener('click', this.handleDelete)
        this.element.addEventListener('click', this.handleEdit)

        Destination.all.push(this)
    }

    static renderForm() {
        let html = `
        <form id="new-destination-form">
            <input type="text" id="name" placeholder="Add a destination here">
            <input type="submit" id="create" value="Submit">
        </form>
        `
        Destination.destinationForm.insertAdjacentHTML("afterbegin", html)
    
    }

    destinationHTML() {

        this.element.classList.add("rcorners");
        this.element.classList.add("content");
        let html = `
            <div class="item" id="destination-content-${this.id}">
            <h3><a class="info" id="${this.id}" href="#">${this.name}</a></h3>

            <div class="delete-btn">
                <button class="ghost-button" data-id=${this.id}">Remove</button>
            </div>
            </div>
            ` 
        this.element.insertAdjacentHTML("afterbegin", html)
        return this.element
    }

    appendDestinationToDom() {
        Destination.destinationsContainer.append(this.destinationHTML())
    }

    handleInfo() {
        searchFormContainer.innerHTML ="";
        const d = parseInt(this.dataset.id)
        if (event.target.classList.value === 'info') {
            destinationService.destinationInfo(d)
        }
    }

    handleDelete() {
        const datasetId = parseInt(this.dataset.id)
 
        if (event.target.innerText === 'Remove') {

            const isExecuted = confirm("Are you sure you want to delete?");
            if (isExecuted === true) {
                this.remove();
                destinationService.deleteDestination(datasetId);
            }    
        }
      
    }

}