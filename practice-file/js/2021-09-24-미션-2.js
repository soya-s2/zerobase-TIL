const body = document.querySelector('body');
const table = document.querySelector('table');
const caption = document.querySelector('caption');
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tr = document.querySelectorAll('tbody tr');
const td = document.querySelectorAll('tbody td');
const trans_mode_btn = document.getElementById('trans-mode-btn');
const trans_mode_btn_style = trans_mode_btn.style;
const bigger_text_btn = document.getElementById('bigger-text-btn');
const go_top_btn = document.getElementById('go-top-btn');

for (let i = 0; i < tr.length; i++) {
  if (i % 2 === 1) {
    tr[i].classList.add("odd");
  } else {
    tr[i].classList.add("even");
  }
}

const tr_odd = document.querySelectorAll('tbody .odd');
const tr_even = document.querySelectorAll('tbody .even');

let trans_mode_btn_click = function() {
  if (trans_mode_btn.innerText === "dark mode") {
    body.style.backgroundColor = "#2b2b2b";
    caption.style.color = "white";
    trans_mode_btn.innerText = "light mode";
    trans_mode_btn_style.backgroundColor = "#eee";
    trans_mode_btn_style.color = "black";
    for (let i = 0; i < td.length; i++) {
      td[i].style.border = "1px dotted #dedede";
    }
    for (let i = 0; i < tr_odd.length; i++) {
      tr_odd[i].style.backgroundColor = "#9c9c9c";
    }
    for (let i = 0; i < tr_even.length; i++) {
      tr_even[i].style.backgroundColor = "#b5b5b5";
    }
  } else {
    body.style.backgroundColor = "white";
    caption.style.color = "black";
    trans_mode_btn.innerText = "dark mode";
    trans_mode_btn_style.backgroundColor = "rgb(65, 65, 65)";
    trans_mode_btn_style.color = "white";
    for (let i = 0; i < td.length; i++) {
      td[i].style.border = "1px dotted rgb(155, 155, 155)";
    }
    for (let i = 0; i < tr_odd.length; i++) {
      tr_odd[i].style.backgroundColor = "rgb(241, 241, 241)";
    }
    for (let i = 0; i < tr_even.length; i++) {
      tr_even[i].style.backgroundColor = "white";
    }
  }
}

trans_mode_btn.addEventListener('click', trans_mode_btn_click);

let go_top_btn_click = function () {
  window.scrollTo(0, 0);
}

go_top_btn.addEventListener('click', go_top_btn_click);

let bigger_text_btn_click = function () {
  if (bigger_text_btn.innerHTML === "bigger text") {
    bigger_text_btn.classList.remove("bigger");
    bigger_text_btn.innerHTML = "normal text"
    table.style.width = "1700px";
    thead.style.fontSize = "3em";
    tbody.style.fontSize = "3em";
  } else {
    bigger_text_btn.classList.add("bigger");
    bigger_text_btn.innerHTML = "bigger text"
    thead.style.fontSize = "2em";
    tbody.style.fontSize = "2em";
  }
}

bigger_text_btn.addEventListener('click', bigger_text_btn_click);