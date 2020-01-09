# findAnyClassListDOM
function helps get list with part of word in class name. All hyphen class name or another

## Usage
just copy code part in you script
##
## Code
```javascript
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
```
