const btn = document.querySelector("#btn");
btn.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("bharat")
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const number = document.querySelector("#number").value;
    const message = document.querySelector("#message").value;
    // alert(`Your Name is ${name} : Your Email is ${email} : Your Phone Number ${number} and Your message is ${message}`)
    alert("Thank You for contact us")
    window.open("http://127.0.0.1:5500/thanks.html")
})