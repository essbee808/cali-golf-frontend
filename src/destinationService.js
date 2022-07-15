class DestinationService {
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getDestinations(){

        fetch(`${this.endpoint}/destinations`)
        .then(resp => resp.json())
        .then(destinations => {
        
            for (let destination of destinations) {
                const d = new Destination(destination)
                d.appendDestinationToDom();
            }
            })
        }
    
    search() {
        const query = {
            name: document.getElementById('searchQuery').value
        }

        fetch(`${this.endpoint}/destinations`)
        .then(resp => resp.json())
        .then(data => {
            const results = data.filter(el => {
                return el.name.toLowerCase().includes(query.name.toLowerCase());
            })

            Destination.destinationsContainer.innerHTML = "";

            if (results.length === 0) {
                let message = '<p>No results found. Try another search.';
                Destination.destinationsContainer.insertAdjacentHTML("afterbegin", message)
            } else {
                for (const result of results) {
                    const d = new Destination(result)
                    d.appendDestinationToDom();
                }
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
            debugger
            const d = new Destination(destination)
            destinationService.destinationInfo(d.id)
        })
    }

    destinationInfo(id) {

        fetch(`${this.endpoint}/destinations/${id}`)
        .then(resp => resp.json())
        .then(destination => {
      
            const destinationInfo = destination
            const courses = destinationInfo.courses
      
            Destination.destinationsContainer.innerHTML = "";
            let destinationHTML = `
                <h1 class="insert-name">${destinationInfo.name}</h1>
            `
            Destination.destinationHeading.insertAdjacentHTML("afterbegin", destinationHTML)
            Course.renderForm(destinationInfo.id)
            for (const course of courses) {
                const c = new Course(course)
                c.appendCourseToDom()
            }
        })
    }
    
    deleteDestination(id){
        renderSearchForm();
        fetch(`${this.endpoint}/destinations/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}