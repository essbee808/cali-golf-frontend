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
        
        //     let destinations = data;

        //     destinations.map(function(destination) {
       
                // let li = document.createElement('li');
                // let name = document.createElement('h2');
                // let removeButton = document.createElement('button');
                // // removeButton.id = `${this}`
                
                // name.innerHTML = `${destination.name}`;
                // removeButton.innerText = "Remove";
                // removeButton.id = `${destination.id}`

                // li.appendChild(name);
                // li.appendChild(removeButton);
                // Destination.destinationsContainer.appendChild(li)
        //     });
        // })
    
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

            if (results.length < 1) {
                let message = document.createElement('h2');
                message.innerHTML = `No results found. Try another search or <a href="#" onClick="Destination.renderForm()">create a new destination.</a>`
                Destination.destinationsContainer.appendChild(message)

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
 
            Destination.destinationHeading.innerHTML += 
            `
                <h1>${destinationInfo.name}</h1>
            ` 
            Course.renderForm(destinationInfo.id)
            for (const course of courses) {
                const c = new Course(course)
                c.appendCourseToDom()
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