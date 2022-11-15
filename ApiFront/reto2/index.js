const print_pokemon = async () => {
  let inputVal = document.getElementById('nav_bar').value
  let card_container = document.getElementById('card-container')
  let table_container = document.getElementById('table_container')
  let moveset_container = document.getElementById('moveset_container')
  let url = `https://pokeapi.co/api/v2/pokemon/${inputVal}/`
  let params = {
    headers: {
      'content-type': 'application/json; charset=UTF-8'
    },
    method: 'GET'
  }
  try {
    let data = await fetch(url, params)
    let result = await data.json()
    table_container.style.visibility = 'visible'
    let types = ''
    console.log(result);
    for (let slot of result.types) {
      types += `${slot.type.name}\t`
    }
    for (let move of result.moves) {
      moveset_container.innerHTML += `<li class='list-group-item'>${move.move.name}</li>`
    }
    card_container.innerHTML = `
                <div class="card" style="width: 18rem;">
                <img src="${result.sprites.other.dream_world.front_default}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${result.name}</h5>
                    <ul id='stats'>
                      <li>Type:\t<strong>${types}</strong></li>
                      <li>Order:\t<strong>${result.order}</strong></li>
                      <li>ID:\t<strong>${result.id}</strong></li>
                    </ul>
                </div>
            </div>
    `
  } catch (err) {
    console.log(err);
  }
} 