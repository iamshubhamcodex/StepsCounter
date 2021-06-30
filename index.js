const stp = document.querySelector(".steps");
const pcl = document.querySelector(".container p");
var mul = document.querySelector(".inp");
var i = 0;

pcl.addEventListener("click", () => {
    i++;
    stp.innerHTML = (i*(mul.value)).toString();
    pcl.innerHTML =  i.toString() +  " times Clicked";
})