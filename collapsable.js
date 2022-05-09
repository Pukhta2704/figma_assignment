const cards = document.getElementsByClassName("card")
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function (e) {
    this.classList.toggle("active")
      this.children[1].classList.toggle("fa-chevron-up")
      this.children[1].classList.toggle("fa-chevron-down")
  })
}
