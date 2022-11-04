import init, { greet } from "./pkg";

init();

document.querySelector("#app").innerHTML = `
      <button id="greet">greet</button>
`;

document.getElementById("greet").addEventListener("click", () => {
  greet();
});
