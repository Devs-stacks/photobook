import { studentData } from './data.js';

var currentpage = window.location.pathname.split('/').pop().replace(".html", "")

var currentStudentData = studentData[currentpage]
console.log(currentStudentData)


// Enable all popovers
document.addEventListener("DOMContentLoaded", () => {
  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  popoverTriggerList.map(el => new bootstrap.Popover(el))
})


function stu(name, phonenumber, short, whatsapp, fb, ig, sn, tktk) {
  return `
<div class="card mb-3" style="max-width: 540px; margin-top: 50px; border-color: purple;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="Profile Pisc/${name.toLowerCase()}.jpg" class="img-fluid rounded-start" alt="${name}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title text-white">${name}</h5>
        <p class="card-text text-white">${phonenumber}</p>
        <p class="card-text text-white"><small class="text-body-secondary">${short}</small></p>
        <div class="d-flex flex-wrap gap-2 social">
          <button type="button" class="btn btn-dark" data-bs-toggle="popover" data-bs-content="${whatsapp}">
            <i class="bi bi-whatsapp"></i>
          </button>
          <button type="button" class="btn btn-dark" data-bs-toggle="popover" data-bs-content="${sn}">
            <i class="bi bi-snapchat"></i>
          </button>
          <button type="button" class="btn btn-dark" data-bs-toggle="popover" data-bs-content="${fb}">
            <i class="bi bi-facebook"></i>
          </button>
          <button type="button" class="btn btn-dark" data-bs-toggle="popover" data-bs-content="${ig}">
            <i class="bi bi-instagram"></i>
          </button>
          <button type="button" class="btn btn-dark" data-bs-toggle="popover" data-bs-content="${tktk}">
            <i class="bi bi-tiktok"></i>
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

