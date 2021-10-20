htmlspecialchars = (formData) => formData.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

console.log(htmlspecialchars("<h2>Hello World</h2>"));
console.log(htmlspecialchars("Hello, how would you & I fare?"));
console.log(htmlspecialchars('How was "The Matrix"?  Did you like it?'));