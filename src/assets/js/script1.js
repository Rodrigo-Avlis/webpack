export function hello1() {
  let btn1 = document.querySelector(".btn1");
  btn1.addEventListener("click", () => {
    console.log("btn 1 tudo certo!");
  });
}

export function importAll() {
  const images = require.context("../images/", false, /\.(png|jpe?g|svg)$/);

  const imgarray = images.keys().map(images);

  return imgarray;
}
