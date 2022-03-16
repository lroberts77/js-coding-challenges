const isSantaClausable = (obj) => {
  return ["sayHoHoHo", "distributeGifts", "goDownTheChimney"].every(
    (method) => typeof obj[method] == "function"
  );
};

console.log(
  isSantaClausable({
    sayHoHoHo: function () {},
    distributeGifts: function () {},
    goDownTheChimney: function () {},
    justAnotherMethod: function () {},
  })
);

console.log(
  isSantaClausable({
    sayHoHoHo: function () {},
    goDownTheChimney: function () {},
    justAnotherMethod: function () {},
  })
);

console.log(
  isSantaClausable({
    sayHoHo: function () {},
    harnessReundeers: function () {},
    justAnotherMethod: function () {},
  })
);
