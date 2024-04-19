const excuses = {
  intro: ["The dog", "My grandma", "The mailman", "My bird"],
  action: ["ate", "peed", "crushed", "broke"],
  what: ["my homework", "y phone", "the car"],
  when: [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ]
};

const randomElement = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const randomExcuse = () => {
  const intro = randomElement(excuses.intro);
  const action = randomElement(excuses.action);
  const what = randomElement(excuses.what);
  const when = randomElement(excuses.when);

  const excuseMessage = `${intro} ${action} ${what} ${when}`;
  document.getElementById("excuse").innerHTML = excuseMessage;
};

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#excuse-button");

  button.addEventListener("click", randomExcuse);
});
