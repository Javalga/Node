const showProfessional = async () => {
  let id = document.getElementById('id');
  let idValue = id.options[id.selectedIndex].value;
  let url = `http://localhost:3000/professionals?id=${idValue}`
  let params = {
    headers: {
      "content-type": "application/json; charset=UTF-8"
    },
    method: "GET"
  }
  try {
    let data = await fetch(url, params);
    let result = await data.json()
    let display = document.getElementById('display')
    display.innerHTML = `
        <div class="card" style="width: 25rem;">
          <img src="./images/${idValue}.jpeg" class="card-img-top" alt="...">
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name: ${result.name}</li>
              <li class="list-group-item">Age: ${result.age}</li>
              <li class="list-group-item">Weight: ${result.weight}</li>
              <li class="list-group-item">Height: ${result.height}</li>
              <li class="list-group-item">Is retired?: ${result.isRetired}</li>
              <li class="list-group-item">Nationality: ${result.nationality}</li>
              <li class="list-group-item">Oscars Number: ${result.oscarsNumber}</li>
              <li class="list-group-item">Profession: ${result.profession}</li>
            </ul>
          </div>
        </div>
    `
  } catch (err) {
    console.log(err);
  }
}

const postProfessional = async () => {
  try {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value
    let isRetired = document.getElementById('isRetired');
    let isRetiredvalue = isRetired.options[isRetired.selectedIndex].value;
    let nationality = document.getElementById('nationality').value;
    let oscarsNumber = document.getElementById('oscarsNumber').value;
    let profession = document.getElementById('profession').value
    let professional = new Professional(name, age, weight, height, isRetiredvalue, nationality, oscarsNumber, profession)

    let url = 'http://localhost:3000/professionals'
    let params = {
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(professional),
      method: "POST"
    }
    let data = await fetch(url, params);
    let result = await data.json()
    console.log(result);
    // // adding id selector
    let id = document.getElementById('id');
    let optionTag = `<option value="${result.result.length}">${result.result.length}</option>`
    id.innerHTML += optionTag
  } catch (err) {
    console.log(err);
  }
}

const updateProfessional = async () => {
  let id = document.getElementById('id');
  let idValue = id.options[id.selectedIndex].value;
  let url = `http://localhost:3000/professionals?id=${idValue}`
  let params = {
    headers: {
      "content-type": "application/json; charset=UTF-8"
    },
    method: "PUT"
  }
}