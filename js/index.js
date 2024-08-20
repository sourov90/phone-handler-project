const resul = async (dat) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${dat}`);
  const data = await res.json();
  displayData(data)
}

const displayData = (data) => {
  const dat = data.data
  const container = document.getElementById('display');
  container.innerText=''
  for (let i of dat) {
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src='${i.image}'
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${i.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Show details</button>
    </div>
  </div>
</div>`
    container.appendChild(div)
  }


}

function searchOnClick() {
  const text = document.getElementById("text-input").value;
  resul(text)
}

// resul()