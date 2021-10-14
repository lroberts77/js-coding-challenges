htmlspecialchars = (formData) => {
    return formData.replace(/[<>"&]/g, a =>"&"+(a=="<" ? "lt" : a==">" ? "gt" : a=='"' ? "quot" : "amp")+";");
}

console.log(htmlspecialchars("<h2>Hello World</h2>"));
console.log(htmlspecialchars("Hello, how would you & I fare?"));
console.log(htmlspecialchars('How was "The Matrix"?  Did you like it?'));