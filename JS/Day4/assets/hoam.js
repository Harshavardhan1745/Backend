function  createemp(){
    let salary =20000
    const updatedsalary = (amount) =>{
        salary = salary + amount    
        
    }

    return updatedsalary
}

const updatedsalary = createemp ()  

console.log(updatedsalary(5000));
