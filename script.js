function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    //pegar a tag img
    img.setAttribute("src", "./assets/assets/avatar3.png")
  } else {
    // mudar a img dependendo do mode
    img.setAttribute("src", "./assets/assets/avatar2.png")
  }

  const alt = document.querySelector("#profile img")
  if (html.classList.contains(`light`)) {
    alt.setAttribute("alt", 'Foto do "Abroba", gato de óculos escuros')
  } else {
    alt.setAttribute(
      "alt",
      'Foto do "Abroba", Jesus segurando uma Loli dormindo'
    )
  }
}
