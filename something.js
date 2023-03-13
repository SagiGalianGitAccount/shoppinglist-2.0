const filterFoodBySection = (arr) => {
  console.log(arr.sort((a, b) => (a.section > b.section ? 1 : -1)));
};

var arr = [
  { a: 1, section: "bal" },
  { a: 1, section: "bol" },
  { a: 1, section: "bal" },
  { a: 1, section: "bal" },
  { a: 1, section: "bol" },
];

filterFoodBySection(arr)