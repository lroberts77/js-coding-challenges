const sevenAte9 = (str) => {
  return [...str]
    .filter(
      (el, idx, arr) =>
        el !== "9" ||
        !(el === "9" && arr[idx - 1] === "7" && arr[idx + 1] === "7")
    )
    .join("");
};

console.log(sevenAte9("797"), "77");
console.log(sevenAte9("7979797"), "7777");
console.log(sevenAte9("165561786121789797"), "16556178612178977");
console.log(sevenAte9("979"), "979");
console.log(sevenAte9("9797979"), "97779");
