htmlspecialchars = (formData) => {
    return formData.split('').map((e) => {
      if(e == '<') {
        return '&lt;'
      } else if (e == '>') {
        return '&gt;'
      } else if (e == '"') {
        return '&quot;'
      } else if (e == "&") {
        return '&amp;'
      } else {
        return e
      }
    }
  ).join('')}

  console.log(htmlspecialchars("<h2>Hello World</h2>"));
  console.log(htmlspecialchars("Hello, how would you & I fare?"));