const userEl = document.querySelectorAll(".span");
const aboutEl = document.querySelectorAll(".between");
const time1El = document.querySelectorAll(".time1");
const time2El = document.querySelectorAll(".time2");
const time3El = document.querySelectorAll(".time3");
const linksEl = document.querySelectorAll(".links");
const linkEl = document.querySelectorAll(".link");
const boxesEl = document.querySelectorAll(".box");
const headerEl = document.querySelector(".header")
const contentEL =document.querySelector(".content")


async function api() {
    respon = await fetch("http://localhost:3000/all");
    return respon.json();
  }
