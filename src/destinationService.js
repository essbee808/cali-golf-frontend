class DestinationService {
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getDestinations(){
        fetch(`${this.endpoint}/destinations`)
        .then(resp => resp.json())
        .then(destinations => {
            console.log(destinations)
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
            debugger
            const d = new Destination(destination)
            d.appendDestinationToDom();
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