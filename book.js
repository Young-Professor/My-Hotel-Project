
let roomdesc1 = document.querySelector("#roomDesc1").textContent;
let roomprice1 = document.querySelector("#roomPrice1").textContent;
//
let roomdesc2 = document.querySelector("#roomDesc2").textContent;
let roomprice2 = document.querySelector("#roomPrice2").textContent;
//
let roomdesc3 = document.querySelector("#roomDesc3").textContent;
let roomprice3 = document.querySelector("#roomPrice3").textContent;
//
let roomdesc4 = document.querySelector("#roomDesc4").textContent;
let roomprice4 = document.querySelector("#roomPrice4").textContent;
//
let roomdesc5 = document.querySelector("#roomDesc5").textContent;
let roomprice5 = document.querySelector("#roomPrice5").textContent;
//
let roomdesc6 = document.querySelector("#roomDesc6").textContent;
let roomprice6 = document.querySelector("#roomPrice6").textContent;
//
let roomdesc7 = document.querySelector("#roomDesc7").textContent;
let roomprice7 = document.querySelector("#roomPrice7").textContent;
//
let roomdesc8 = document.querySelector("#roomDesc8").textContent;
let roomprice8 = document.querySelector("#roomPrice8").textContent;
//
let roomdesc9 = document.querySelector("#roomDesc9").textContent;
let roomprice9 = document.querySelector("#roomPrice9").textContent;
//
let roomdesc10 = document.querySelector("#roomDesc10").textContent;
let roomprice10 = document.querySelector("#roomPrice10").textContent;
// //
let roomdesc11 = document.querySelector("#roomDesc11").textContent;
let roomprice11 = document.querySelector("#roomPrice11").textContent;

let roomdesc12 = document.querySelector("#roomDesc12").textContent;
let roomprice12 = document.querySelector("#roomPrice12").textContent;
//
const RoomL = document.querySelector(".BookingButtons");
const Room1 = document.querySelector("#Room1");
const Room2 = document.querySelector("#Room2");
const Room3 = document.querySelector("#Room3");
const Room4 = document.querySelector("#Room4");
const Room5 = document.querySelector("#Room5");
const Room6 = document.querySelector("#Room6");
const Room7 = document.querySelector("#Room7");
const Room8 = document.querySelector("#Room8");
const Room9 = document.querySelector("#Room9");
const Room10 = document.querySelector("#Room10");
const Room11 = document.querySelector("#Room11");
const modal = document.querySelector(".proceedRoom");
const Submited = document.querySelector("#Send");

Room1.addEventListener("click", () => {
  modal.showModal();
  document.querySelector("#RoomName").innerHTML = roomdesc1;
  document.querySelector("#price").innerHTML = roomprice1;
});
Room2.addEventListener("click", () => {
  modal.showModal();
  document.querySelector("#RoomName").innerHTML = roomdesc2;
  document.querySelector("#price").innerHTML = roomprice2;
});
Room3.addEventListener("click", () => {
  modal.showModal();
  document.querySelector("#RoomName").innerHTML = roomdesc3;
  document.querySelector("#price").innerHTML = roomprice3;
});
Room4.addEventListener("click", () => {
  modal.showModal();
  document.querySelector("#RoomName").innerHTML = roomdesc4;
  document.querySelector("#price").innerHTML = roomprice4;
});
Room5.addEventListener("click", () => {
  modal.showModal();
  document.querySelector("#RoomName").innerHTML = roomdesc5;
  document.querySelector("#price").innerHTML = roomprice5;
});
Room6.addEventListener("click", () => {
  modal.showModal();
  document.querySelector("#RoomName").innerHTML = roomdesc6;
  document.querySelector("#price").innerHTML = roomprice6;
});
Room7.addEventListener("click", () => {
  modal.showModal();
  document.querySelector("#RoomName").innerHTML = roomdesc7;
  document.querySelector("#price").innerHTML = roomprice7;
});
Room8.addEventListener("click", () => {
  modal.showModal();
  document.querySelector("#RoomName").innerHTML = roomdesc8;
  document.querySelector("#price").innerHTML = roomprice8;
});
Room9.addEventListener("click", () => {
  modal.showModal();
  document.querySelector("#RoomName").innerHTML = roomdesc9;
  document.querySelector("#price").innerHTML = roomprice9;
});
Room10.addEventListener("click", () => {
  modal.showModal();
  document.querySelector("#RoomName").innerHTML = roomdesc10;
  document.querySelector("#price").innerHTML = roomprice10;
});
Room11.addEventListener("click", () => {
  modal.showModal();
  document.querySelector("#RoomName").innerHTML = roomdesc11;
  document.querySelector("#price").innerHTML = roomprice11;
});
Submited.addEventListener("click", () => {
  const Accc = document.querySelector("#AccountN").value;
  const checkiInn = document.querySelector("#CheckIndate").value;
  const checkiOutt= document.querySelector("#CheckOutdate").value;
  if(Accc!=""){
    if(checkiOutt!="" && checkiInn!=""){
      modal.close();
    }
    else{
      alert("Please enter dates")
    }
  }
  else alert("Please enter account number")
});


const Send = document.querySelector("#Send");
Send.addEventListener("click", () => {
  const Acc = document.querySelector("#AccountN").value;
  const checkiIn = document.querySelector("#CheckIndate").value;
  const checkiOut= document.querySelector("#CheckOutdate").value;
  const roomName= document.querySelector("#RoomName").textContent;
  // alert(`Account: ${Acc}`)
  // alert(`Check in: ${Date1}`)
  // alert(`Check out: ${roomName}`)

  const bookData={CHECK_IN:checkiIn,CHECK_OUT:checkiOut,ACCOUNT:Acc,ROOM_NAME:roomName}
  fetch('http://localhost:3000/book',{
    body:JSON.stringify(bookData),
    method:'POST',
    headers:{
      "Content-type":"Application/json"
    }
  })
});

