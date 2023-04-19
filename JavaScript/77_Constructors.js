class RailwayForm {
    
    constructor(givenName, trainNo) {
        this.name = givenName
        this.trainNo = trainNo
        console.log('constructor called', givenName, trainNo);
    }
    submit(){
        console.log(this.name ,'Your form is submitted for train number', this.trainNo);
    }
    cancel(){
        console.log(this.name , 'This form is cancelled for train number:', this.trainNo);
    }
}
let harryForm = new RailwayForm('Harry', 768)
// harryForm.fill('harry')
// let AdarshForm = new RailwayForm()
// harryForm.fill('harry', 6890)


harryForm.submit()
harryForm.cancel()
// AdarshForm.submit()
// AdarshForm.cancel()