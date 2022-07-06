class DestinationService {
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getDestinations(){
        fetch(`${this.endpoint}/destinations`)
        .then(resp => resp.json())
        .then(destinations => {
            
            for (const destination of destinations) {
                const d = new Destination(destination)
                d.appendDestinationToDom();
            }  
        })
    } 

    createDestination() {
        const destination = {
            name: document.getElementById('name').value
        }

        const configObj ={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(destination)
        }
 
        fetch(`${this.endpoint}/destinations`, configObj)
        .then(resp => resp.json())
        .then(destination => {
            const d = new Destination(destination)
            d.appendDestinationToDom();
        })
    }

    destinationInfo(id) {
        fetch(`${this.endpoint}/destinations/${id}`)
        .then(resp => resp.json())
        .then(destination => {
            const destinationInfo = destination
            const courses = destinationInfo.courses
            Destination.destinationForm.innerHTML = " ";
            Destination.destinationsContainer.innerHTML = " ";
            Destination.destinationHeading.innerHTML += `
                <h1>${destinationInfo.name} <button class="delete-btn ghost-button" data-id=${destinationInfo.id}">Delete</button></h1>
                
            `
            Course.renderForm(destinationInfo.id)

            for (const course of courses) {
                const c = new Course(course)
                c.appendCourseToDom();
            }  
        })
    }
    
    deleteDestination(id){
        fetch(`${this.endpoint}/destinations/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}