// var form = document.querySelector("#loginCredentials");
// function getInputVal(id) {
//   return document.getElementById(id).value;
// }

// form.addEventListener("submit", submitData);
// async function submitData(e) {
//   e.preventDefault();
//   // window.location.href='index.html'
//   var password = getInputVal("password");
//   var username = getInputVal("username");
//   var loginDetails = { EMAIL: username, PSD: password };

//   await fetch("http://localhost:3000/login", {
//     body: JSON.stringify(loginDetails),
//     method: "POST",
//     headers: {
//       "Content-type": "Application/json",
//     },
//   })
//   // .then((res)=>{
//   //   console.log(res.json())}).catch((err)=>alert(err))

// }