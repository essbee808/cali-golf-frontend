class DestinationService {
    constructor(endpoint){
        this.endpoint = endpoint
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
        debugger
        fetch(`${this.endpoint}/destinations`, configObj)
        .then(resp => resp.json())
        .then(destination => {
            debugger
            const d = new Destination(destination)
            d.slapOnDom();
        })
    }
    getDestinations(){
        fetch(`${this.endpoint}/destinations`)
        .then(resp => resp.json())
        .then(destinations => {
            for (const destination of destinations) {
                const d = new Destination(destination)
                d.slapOnDom();
            }
        })
    }    
}