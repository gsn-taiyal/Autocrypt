const rowA = document.querySelector(".sec-a");
const headA = document.querySelector(".row-a-head");
const btnA = document.querySelector(".btn-f-a");
rowA.addEventListener("mouseenter", (e) => {
    headA.classList.remove("text-white");

    headA.classList.add("text-sky-300");
    btnA.classList.remove("bg-sky-100");
    btnA.classList.add("bg-sky-500");
})

rowA.addEventListener("mouseleave", (e) => {
    headA.classList.remove("text-sky-300");
    headA.classList.add("text-white");

    btnA.classList.remove("bg-sky-500");
    btnA.classList.add("bg-sky-100");
})