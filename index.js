function getAllElemWithClassName(youClassName){
    let mass = []
    document.querySelectorAll("*").forEach(element => {
        if (element.className.includes(youClassName)){
            mass.push(element);
            };
        });
    return mass;
}
console.log(getAllElemWithClassName("youClassName"))
