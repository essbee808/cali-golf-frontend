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
                debugger
                d.slapOnDom();
            }
        })
    }    
}