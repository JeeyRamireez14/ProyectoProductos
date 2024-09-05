let divData = document.getElementById("divData");

function getData() {
  const promesa = fetch("https://freetestapi.com/api/v1/products", { method: "GET" });
  promesa.then((response) => {
    response.json().then(
      (data) => {
        console.log(data);
        createCards(data);  
      }).catch((error) => console.log("Problema con el json", error));
  }).catch((err) => console.log("Existe un problema con lo que se solicitó", err));
}

function createCards(products) {
  divData.innerHTML = ""; 
  let cardsHtml = `<div class="row">`; 

  products.forEach((product) => {
    let card = `
      <div class="col-md-3 mb-3"> <!-- Columna que ocupa 1/4 de la fila -->
        <div class="card" style="width: 100%;">
          <img src="${product.image}" class="card-img-top" 
          alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text"><strong>Price:</strong> $${product.price}</p>
          </div>
        </div>
      </div>
    `;
    cardsHtml += card; 
  });

  cardsHtml += `</div>`; 
  divData.innerHTML = cardsHtml; 
}

getData();

