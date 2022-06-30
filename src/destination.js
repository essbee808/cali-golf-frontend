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
            <form id="new-destination-form">
                Name: <input type="text" id="name">
                <input type="submit" id="create" value="Add">
            </form>
        `
    }

    destinationHTML() {
        this.element.classList.add("rcorners1");
        this.element.innerHTML += `
          <h1 id="${this.id}">${this.name}</h1>
          <button class='btn-add-course' data-id="${this.id}">+</button>

          <button class="view-btn" data-id=${this.id} id="${this.id}">View</button>
          <button class="delete" data-id="${this.id}">Delete</button>
        `
        
        return this.element
    }

    slapOnDom() {
        Destination.destinationsContainer.append(this.destinationHTML())
    }

    // handleClick() {
    //     debugger
    //     let red = this.style.background
    //     this.style.background = "purple";
    //     const d = parseInt(this.dataset.id)
        
    // }

    handleClick() {
        // const d = parseInt(this.dataset.id)
        const d = parseInt(event.target.dataset.id)
        if (event.target.innerText === 'Delete') {
            this.remove();
            destinationService.deleteDestination(d);
        } else if (event.target.innerText === 'View') { 
            event.target.innerText = 'Hide'
            courseService.getCourses();
        } else if (event.target.innerText === 'Hide') {
            event.target.innerText = 'View'
            Course.removeCourses();
        } else if (event.target.innerText === '+') { 
            event.target.innerText = '-'
            Course.renderForm(d);
        } else if (event.target.innerText === '-') {
            event.target.innerText = '+'
            Course.removeForm(d);
        }
    }

}