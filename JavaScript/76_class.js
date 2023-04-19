class RailwayForm {
    submit(){
        console.log(this.name ,'form submitted');
    }
    cancel(){
        console.log(this.name , 'This is form cancelled');
    }
    fill(givenName){
        this.name = givenName 
    }
}
let harryForm = new RailwayForm()
harryForm.fill('harry')
let AdarshForm = new RailwayForm()
harryForm.fill('adarsh')


harryForm.submit()
AdarshForm.submit()
AdarshForm.cancel()