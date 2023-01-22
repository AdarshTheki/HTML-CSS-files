<h1 align="center"> Basic JavaScript Tutorial </h1> 

---------

### Basic:-

variable define: let, var, const

    let a = null;
    let b = 345;
    let c = true;
    let d = BigInt("549") + BigInt("4")
    let e = 'Harry'
    let f = Symbol("I am a Adarsh Verma")
    let g = undefined
    console.log(a, b, c, d, e, f, g)
    console.log(typeof a, typeof b,  typeof c,  typeof d,  typeof e, typeof f,  typeof g)

    Output:
    null 345 true 553n Harry Symbol(I am a Adarsh Verma) undefined

Object is Java Script (not Dictionary)

    const item = {
        'harry':true,
        'adarsh':false,
        'lovish':67,
        'rohan':undefined }
    console.log(item['harry'])

### Loops:-

    let item = {
        'harry':true,
        'adarsh':false,
        'lovish':67,
        'rohan':undefined   }

- for in loop:-

        for (let a in item){
            console.log("items "+a+" are "+item[a])
        }

- for of loop;-

        for (let b of "harry"){
            console.log("harry "+b)
        }

- while loops:-
 
        n = prompt("Enter the value of n");
        n = Number.parseInt(n)
        let i=0
        while (n>i) {
            console.log("Sun of first "+i+" Natural Number is "+n)
            i++;
        }

- Do while loops:- ( at least one time run condition fail)

        n = prompt("Enter the value of n");
        n = Number.parseInt(n)
        i=5
        do{
            console.log("Sun of first "+i+" Natural Number is "+n)
            i++;
        }while (n>i)
