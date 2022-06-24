class Destination {

    static all = []
    static destinationsContainer = document.getElementById('destinations-container')
    static destinationForm = document.getElementById('destination-form-container')


    constructor({id, name}){
        this.id = id
        this.name = name
        debugger
        this.element = document.createElement('h2')
        this.element.dataset.id = this.id
        debugger
        this.element.id = `destination-${this.id}`
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
        console.log(this)
        this.element.innerHTML += `
            <a href="${base_url}/destinations/${this.id}">${this.id.name}</a>
            <p>${this.id.courses.length} courses</p>
        `
        return this.element
    }

    slapOnDom() {
        Destination.destinationsContainer.append(this.destinationHTML())
    }

}