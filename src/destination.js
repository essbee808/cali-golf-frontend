class Destination {

    static all = []
    static destinationsContainer = document.getElementById('destinations-container')
    static destinationForm = document.getElementById('destination-form-container')


    constructor({id, name}){
        this.id = id
        this.name = name

        this.element = document.createElement('h3')
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
        debugger
        this.element.innerHTML += `
            <h2>${this.name}</h2>
            <p>Check it out!</p>
            <button class="delete" data-id="${this.id}">Delete</button>
        `
        return this.element
    }

    slapOnDom() {
        debugger
        Destination.destinationsContainer.append(this.destinationHTML())
    }

    handleClick() {
        debugger
        const d = parseInt(this.dataset.id)
        if (event.target.innerHTML === 'Delete') {
            debugger
            this.remove();
            destinationService.deleteDestination(d);
        }
    }

}