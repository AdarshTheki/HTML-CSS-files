class Animal {
    constructor(name, color){
        this.name = name
        this.color = color
    }
    run(){
        console.log(`${this.name} is Running`);
    }
    shout(){
        console.log(`${this.name} is Banking`);
    }
}

class Monkey extends Animal {
    eatBanana(){
        console.log(`${this.name} is Eating Banana`);
    }
    hide(){
        console.log(`${this.name} is Hiding`);
    }
}

let ani_Obj = new Animal('Bruno_Animal', 'white')
let mon_Obj = new Monkey('Adarsh_Monkey', 'orange')

ani_Obj.shout()
mon_Obj.eatBanana()
mon_Obj.hide()
// ani_Obj.hide() this is throw Error