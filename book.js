let customerID=""
let isCustomerlogedIn
fetch("http://localhost:3000/check").then((userD)=>{
              return userD.json();
            }).then((UseRData)=>{
              if(UseRData==''){

              }
              else{
                customerID=UseRData[0].CUSTID;
                isCustomerlogedIn=true;
              }
            })

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
// let HomepRoomName1= document.querySelector(".HomepRoomName1").textContent;
// let HomeRoomPrice1 = document.querySelector(".HomeRoomPrice1").textContent;

// let HomepRoomName2= document.querySelector(".HomepRoomName2").textContent;
// let HomeRoomPrice2 = document.querySelector(".HomeRoomPrice2").textContent;
// //
// let HomepRoomName3= document.querySelector(".HomepRoomName3").textContent;
// let HomeRoomPrice3 = document.querySelector(".HomeRoomPrice3").textContent;

// const HomeBook1 = document.querySelector("#HomeBook1");
// const HomeBook2 = document.querySelector("#HomeBook2");
// const HomeBook3 = document.querySelector("#HomeBook3");
// // The three rooms in homepage
// HomeBook1.addEventListener("click", () => {
//   modal.showModal();
//   document.querySelector("#RoomName").innerHTML = HomepRoomName1;
//   document.querySelector("#price").innerHTML = HomeRoomPrice1;
// });
// HomeBook2.addEventListener("click", () => {
//   modal.showModal();
//   document.querySelector("#RoomName").innerHTML = HomepRoomName2;
//   document.querySelector("#price").innerHTML = HomeRoomPrice2;
// });
// HomeBook3.addEventListener("click", () => {
//   modal.showModal();
//   document.querySelector("#RoomName").innerHTML = HomepRoomName3;
//   document.querySelector("#price").innerHTML = HomeRoomPrice3;
// });



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

const BookingRecived= document.querySelector(".BookingRecived");
const HidePayMentPopUp= document.querySelector("#HidePayMentPopUp");
const ConfirmationBooking= document.querySelector("#ConfirmationBookingPopUp");


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

// losing the payment pop up
HidePayMentPopUp.addEventListener("click", () => {
  modal.close();
})
ConfirmationBooking.addEventListener("click", () => {
  BookingRecived.close();
})


const Send = document.querySelector("#Send");
Send.addEventListener("click", () => {
    const Acc = document.querySelector("#AccountN").value;
    const checkiIn = document.querySelector("#CheckIndate").value;
    const checkiOut= document.querySelector("#CheckOutdate").value;
    const roomName= document.querySelector("#RoomName").textContent;
    
  // Checking whether user has loged in and whether he has all inputs
  if(customerID==''){
    alert("Login first")
    location.href='login.html'
  }
  else if(Acc==''){
    alert("Enter Accout")
  }
  else if(checkiOut=='' || checkiIn==''){
    alert("Enter Dates")
      }
  else{ 
    const bookData={CUSTID:customerID,CHECK_IN:checkiIn,CHECK_OUT:checkiOut,ACCOUNT:Acc,ROOM_NAME:roomName}
    fetch('http://localhost:3000/book',{
      body:JSON.stringify(bookData),
      method:'POST',
      headers:{
        "Content-type":"Application/json"
      }
    })
  // Confirming to user that his bookings has been received
  modal.close();
  BookingRecived.showModal();
}
});

