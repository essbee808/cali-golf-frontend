class Destination {

    static all = []
    // static destinationsContainer = document.getElementById('destinations-container')
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
//    static renderMenu() {
//        debugger
//         destinationService.getDestinations();
//         debugger
//         Destination.destinationsContainer.innerHTML = `
//         <form>  
//             <b>Select a destination:</b>  
//             <select id="myList" onchange="practiceChange()">  
//             <option> Select One </option>  
//             <option value="destination-1" id="1"> Destination 1 </option>  
//             <option value="destination-2" id="2"> Destination 2 </option>  
//             </select>  
//         </form> 
//         `
//     }
    destinationHTML() {
        this.element.classList.add("rcorners1");
        this.element.classList.add("content");
        
        this.element.innerHTML += `
        <div id="destination-content-${this.id}">
            <h1 id="${this.id}">${this.name}</h1>
            <button class="delete" data-id="${this.id}" value="delete">Delete</button>
            <br>
            <button class="view-btn" data-id=${this.id} id="${this.id}" value="view">View</button>
            <button class='btn-add-course' data-id="${this.id}" value="+">+</button>
            <br>
        </div>
        `
        return this.element
    }

    appendDestinationToDom() {
        Destination.destinationsContainer.append(this.destinationHTML())
    }

    handleInfo() {
        debugger
        if (event.target.value === 'view') {
            main.innerHTML = '';
            
        }
        // if (event.target.innerText === 'Delete') {
        //     this.remove();
        //     destinationService.deleteDestination(d);
        // } else if (event.target.innerText === 'View') {
        //     event.target.innerText = 'Hide';
        //     courseService.getCourses();
        // } else if (event.target.innerText === 'Hide'){
        //     event.target.innerText === 'View'
        //     Course.coursesContainer = "";
        // }
    }

    handleDelete() {
        const d = parseInt(this.dataset.id)
        if (event.target.value === 'delete') {
            this.remove();
            destinationService.deleteDestination(d);
        }
    }

  
}