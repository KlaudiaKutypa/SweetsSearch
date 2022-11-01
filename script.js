// const search = document.querySelector(".search");
// const list = document.querySelectorAll("li");

// search.addEventListener("keyup", function(e){

//     const input = e.target.value.toLowerCase();

//     list.forEach((el) => {
//         if(el.textContent.toLowerCase().indexOf(input) !== -1){
//             el.style.display = "block";
//         } else {
//             el.style.display = "none";
//         }
//     })
// } )

const search = document.querySelector(".search");
const list = document.querySelectorAll("li");

search.addEventListener("keyup", function(e){

    const input = e.target.value.toLowerCase();

    list.forEach((el) => {
        if(el.textContent.toLowerCase().includes(input) == true){
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }
    })
} )