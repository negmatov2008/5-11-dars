done();
links();

let son = 1;
let uniq = [];

linkEl.forEach((link) => {
  link.addEventListener("click", () => {
    uniq.push({
      id: Math.ceil(Math.random() * 10000),
      ot: link.textContent,
    });
    search();
  });
});

function search() {
  if (uniq.length) {
    headerEl.classList.remove("hid");
    if (uniq.length > 0 && uniq.length < 2 && !uniq[-1]) {
      contentEL.innerHTML += `<div class="card">
    <div class="cont c1">${uniq[0].ot}</div>
    <img onclick="del(${uniq[0].id}) "src="./images/x.svg" alt="" />
  </div>`;
    }
    if (uniq.length > 1 && uniq.length < 3 && uniq[0]) {
      contentEL.innerHTML += `<div class="card">
    <div class="cont c2">${uniq[1].ot}</div>
    <img onclick="del(${uniq[1].id})" src="./images/x.svg" alt="" />
  </div>`;
    }
    if (uniq.length > 2 && uniq.length < 4) {
      contentEL.innerHTML += `<div class="card">
    <div class="cont c3">${uniq[2].ot}</div>
    <img onclick="del(${uniq[2].id})" src="./images/x.svg" alt="" />
  </div>`;
    }
    if (uniq.length > 3 && uniq.length < 5) {
      contentEL.innerHTML += `<div class="card">
    <div class="cont c4">${uniq[3].ot}</div>
    <img onclick="del(${uniq[3].id})" src="./images/x.svg" alt="" />
  </div>`;
    }
    if (uniq.length > 4 && uniq.length < 6) {
      contentEL.innerHTML += `<div class="card">
    <div class="cont c5">${uniq[4].ot}</div>
    <img onclick="del(${uniq[4].id})" src="./images/x.svg" alt="" />
  </div>`;
    }
  } else {
    contentEL.textContent = "";
  }
}

function del(id) {
 uniq = uniq.filter(e => e.id != id)
  search();
}
