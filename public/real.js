console.log("socket");

const socket = io();

socket.on("productos", (data) => {
  //console.log(data);
  const template = data
    .map(
      (each) => `
      <div class="card m-2" style="width: 360px">
        <img src="${each.photo}" style="height: 240px" class="card-img-top object-fit-cover" alt="${each.name}">
        <h5 class="p-2 text-center card-title">${each.name}</h5>
      </div>
    `
    )
    .join("");
  document.querySelector("#productos").innerHTML = template;
});

document.querySelector("#newProduct").addEventListener("click", (product) => {
  product.preventDefault();
  const title = document.querySelector("#title").value;
  const photo = document.querySelector("#photo").value;
  const price = document.querySelector("#price").value;
  const stock = document.querySelector("#stock").value;
  const data = {};
  title && (data.title = title);
  photo && (data.photo = photo);
  price && (data.price = price);
  stock && (data.stock = stock);

  //console.log(data);
  socket.emit("newProducto", data);
});
