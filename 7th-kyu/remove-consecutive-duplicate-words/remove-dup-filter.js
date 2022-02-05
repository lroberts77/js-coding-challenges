const removeConsecutiveDuplicates = (s) => {
    return s
      .split(" ")
      .filter((word, index, arr) => word !== arr[index + 1])
      .join(" ");
}

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));
