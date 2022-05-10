let loading = true
document.querySelector(".lds-roller").style = "display:block;"
document.querySelector(".categories button").style = "display:none;"
let j = Math.floor(Math.random() * 500)
// let j = 3
let result = []
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host":
      "list-of-freshwater-aquarium-fish-species.p.rapidapi.com",
    "X-RapidAPI-Key": "27c0185529msh8e889740729f035p1dd26djsn3db436618e85"
  }
}
if (result.length === 0) {
  fetch(
    "https://list-of-freshwater-aquarium-fish-species.p.rapidapi.com/species",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      result = response
      setData()
    })
    .catch((err) => console.error(err))
}
document.querySelector(".categories button").addEventListener("click", () => {
  setData()
})
const setData = async () => {
  document.querySelector(".lds-roller").style = "display:block;"
document.querySelector(".categories button").style = "display:none;"
  for (let i = j; i < j + 3; i++) {
    if (await checkImage(result[i].imageURL)) {
      const newElement = `
        <div>
          <img src="${result[i].imageURL}" alt="" />
          <p>${result[i].name}</p>
        </div>
      `
      document.getElementById("category-card").innerHTML += newElement
    } else {
      j++
    }
  }
  j += 3
  document.querySelector(".lds-roller").style = "display:none;"
document.querySelector(".categories button").style = "display:block;"
}
async function checkImage(url) {
  const res = await fetch(url)
  const buff = await res.blob()

  return buff.type.startsWith("image/")
}
