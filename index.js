// const button = document.querySelector('#bt')
// button.addEventListener("click", () => {
//     document.body.style.backgroundImage = "url('/scscopy.jpg')"
// });
const button = document.getElementById("bt").addEventListener("click", openpop)
function openpop() {
    let pop = window.open('text.html', null, 'popup,width = 3500,height= 4000,left=200,top=300')
}