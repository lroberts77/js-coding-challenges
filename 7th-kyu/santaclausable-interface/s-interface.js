const isSantaClausable = (obj) => {
  return (
    typeof obj.sayHoHoHo === "function" &&
    typeof obj.distributeGifts === "function" &&
    typeof obj.goDownTheChimney === "function"
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
