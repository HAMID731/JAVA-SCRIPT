function logObjectProperties(obj) {
    for (let property in obj) {
        if (obj.hasOwnProperty(property)) {
            console.log(property + ": " + obj[property]);
        }
    }
}

// Example usage:
const exampleObject = {
    name: "Jane",
    age: 30,
    city: "Lagos"
};

logObjectProperties(exampleObject);
