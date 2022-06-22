class Course {

    static all = []
    static coursesContainer = document.getElementById("courses-container")
    static courseForm = document.getElementById('course-form-container')
    
    constructor({id, name, address, description, website, destination_id}){
        this.id = id
        this.name = name
        this.address = address
        this.description = description
        this.website = website
        this.destination_id = destination_id
    }
}