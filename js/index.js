const resul = async (dat,showBtn) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${dat}`);
  const data = await res.json();
  displayData(data,showBtn)
}
// const spinner = document.getElementById('loding-spinner')
const displayData = (data,showBtn) => {
  let dat = data.data
  
  const container = document.getElementById('display');
  container.innerText=''
  const btn = document.getElementById('showBtn')
  if(dat.length > 20 && !showBtn){
    btn.classList.remove('hidden')
  }else{
    btn.classList.add('hidden')
  }
  if(!showBtn){
   dat=dat.slice(0,5)
 }
  
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
lodingSpinner(false)

}

function searchOnClick(showbtn) {
  const text = document.getElementById("text-input").value;
  resul(text,showbtn)
  lodingSpinner(true)
}

function lodingSpinner(isLoding){
  const spiner = document.getElementById('loding-spinner')
  if(isLoding){
    spiner.classList.remove('hidden')
  }else{
    spiner.classList.add('hidden')
  }
}




function handleShowAllbtn(){
  searchOnClick(true)
}