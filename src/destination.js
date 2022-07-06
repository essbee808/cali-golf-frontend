class Destination {

    static all = []

    static destinationForm = document.getElementById('destination-form-container')
    static destinationsContainer = document.getElementById('destinations-container')
    static deleteBtn = document.getElementById('delete')
    static destinationHeading = document.getElementById('destination-heading');
    static hiddenDiv = document.getElementById('hidden-div')

    constructor({id, name}){
        this.id = id
        this.name = name

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `destination-${this.id}`
        this.element.addEventListener('click', this.handleInfo)
        this.element.addEventListener('click', this.handleDelete)
        // this.element.addEventListener('click', this.handleClick)

        Destination.all.push(this)
    }

    static renderForm() {
        Destination.destinationForm.innerHTML = `
            <form id="new-destination-form">
                <input type="text" id="name" placeholder="Add a destination here">
                <input type="submit" id="create" value="Submit">
            </form>
        `
    }

    destinationHTML() {
        this.element.classList.add("rcorners");
        this.element.classList.add("content");
        
        this.element.innerHTML += `
        <div class="item" id="destination-content-${this.id}">
            <h3><a class="learn" id="${this.id}" href="#">${this.name}</a></h3>

            <div class="delete-btn">
                <button class="ghost-button" data-id=${this.id}">Remove</button>
            </div>
        </div>
        `
        // <button class="delete-btn" data-id=${this.id} id="${this.id}" value="delete">Delete</button>

        
        return this.element
    }

    appendDestinationToDom() {
        Destination.destinationsContainer.append(this.destinationHTML())
    }

    // handleClick () {
    //     const d = parseInt(this.dataset.id)
    //     if (event.target.classList.value === 'learn') {

    //     } else if (event.target.classList.value === 'ghost-button' && isExecuted === true)
    // }

    handleInfo() {
        const d = parseInt(this.dataset.id)
        if (event.target.classList.value === 'learn') {
            Destination.renderForm(d);
            destinationService.destinationInfo(d)
        }
    }

    handleDelete() {
        
        const d = parseInt(this.dataset.id)
        
        if (event.target.classList.value === 'ghost-button') {

            let isExecuted = confirm("Are you sure you want to delete?");
            if (isExecuted === true) {
       
                this.remove();
                destinationService.deleteDestination(d);
            }    
        }
      
    }

  
}