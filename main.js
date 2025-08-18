import { studentData } from './data.js';

var currentpage = window.location.pathname.split('/').pop().replace(".html", "")

var currentStudentData = studentData[currentpage]
console.log(currentStudentData)


function stu(name, phonenumber, short, whatsapp, fb, ig, sn, tktk) {
	return `
<div class="card mb-3" id="card" style="max-width: 540px; margin-top: 50px; border-color: purple;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="Profile Pisc/${name.toLowerCase()}.jpg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title text-white">${name}</h5>
        <p class="card-text text-white" id="new">${phonenumber}</p>
        <p class="card-text text-white"><small class="text-body-secondary">${short}</small></p>
    <div class="container-fluid social">
      <button type="button" class="btn btn-dark" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="bottom popover">
      <i class="bi bi-whatsapp">${whatsapp}</i>
      </button>  
      <button type="button" class="btn btn-dark" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="bottom popover">
      <i class="bi bi-snapchat">${sn}</i>
      </button>  
      <button type="button" class="btn btn-dark" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="bottom popover">
      <i class="bi bi-facebook">${fb}</i>
      </button>  
      <button type="button" class="btn btn-dark" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="bottom popover">
      <i class="bi bi-instagram">${ig}</i>
      </button>  
      <button type="button" class="btn btn-dark" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="bottom popover">
      <i class="bi bi-tiktok">${tktk}</i>
      </button>  
   
     </div>
      </div>
    </div>
  </div>
</div>
	`
}

let collation = [];
currentStudentData.forEach((item, i) => {
   var data = stu(item.name, item.phone_number, item.short_quote, item.whatsapp_number, item.facebook_name, item.instagram, item.snapchat, item.tiktok)
   collation.push(data)
})

let sentCollation = collation.join("<br>");
document.querySelector("#cardz").innerHTML = sentCollation

var elem = document.querySelector("#new")
//console.log(elem)
elem.innerHTML = studentData[0]