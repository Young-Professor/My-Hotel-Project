const mysql = require("mysql2");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
const cors = require("cors");
const { nextTick, title } = require("process");
const app = express();
const dotevn=require("dotenv").config();

app.use(express.json());
app.use(cors());


app.use(express.static(path.join(__dirname, "/")));// sends the index page by default
app.use(express.urlencoded({extended: true}));

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.password,
  database:process.env.DB ,
});

db.connect((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database connected");
  }
});


// create account
app.post("/signup", (req, res) => {
  const FNAME = req.body.FNAME;
  const LNAME = req.body.LNAME;
  const EMAIL = req.body.EMAIL;
  const PSD = req.body.PSD;
  const sqlInsert =
    "insert into customer(FNAME,LNAME,EMAIL,PSD) values(?,?,?,?)";
  db.query(sqlInsert, [FNAME, LNAME, EMAIL, PSD], (err, result) => {
    if (err) console.log(err);
    else console.log(result);
  });
});
// login
var thereIsUser=false;
var userdetails=""
app.post("/login", encoder, (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  db.query(
    "select * from customer  where EMAIL= ? AND PSD= ?",
    [username, password],
    (err, result) => {
      if(result.length > 0 && username=='Admin1@gmail.com' || username=='Admin2@gmail.com' ){
        res.redirect('/Admin.html')
      }
      else if (result.length > 0) {
        res.redirect('/Accomodation.html')
        console.log("User logged in");
        thereIsUser=true;
        userdetails=result;
       
      } else {
        res.send('Incorect cridentials!! please try again')
        console.log("Error: wrong cridentials");
      }
    }
    );
  });
  app.get('/check',(req,resss)=>{
    // let user='Hem'
    resss.send(userdetails);
   
  })

// -----------------------Displaying Bookings to html--------------------------------------------------
app.get("/availablebookings", (req, res) => {
 const sqlGetBookings='SELECT FNAME,BOOK_ID,CHECK_IN,CHECK_OUT,ACCOUNT,BOOKING_DATE,ROOM_NAME FROM book LEFT JOIN CUSTOMER ON book.CUSTID=CUSTOMER.CUSTID'
 db.query(sqlGetBookings,(err,bookings)=>{
  if(err) console.log(err);
  else{ 
     res.send(bookings);}
 })
});

// -----------------------Displaying Messages to html--------------------------------------------------
app.get("/Messages", (req, res) => {
  const sqlGetBookings='SELECT FNAME,MESSAGES FROM Messages LEFT JOIN CUSTOMER ON Messages.CUSTID=CUSTOMER.CUSTID'
  db.query(sqlGetBookings,(err,bookings)=>{
   if(err) console.log(err);
   else{ 
      res.send(bookings);}
  })
 });
//  =============================
// -----------------------Displaying Total number of customers to html--------------------------------------------------
app.get("/TotalCustomers", (req, res) => {
  const TotalCustomer='SELECT count(*) As TotalCustomers from customer'
  db.query(TotalCustomer,(err,TotalCustomer)=>{
   if(err) console.log(err);
   else{ 
      res.send(TotalCustomer);}
  })
 });
//  =============================
// -----------------------Displaying Total number of Bookings to Admin--------------------------------------------------
app.get("/TotalBookings", (req, res) => {
  const TotalBookings='SELECT count(*) As TotalBookings from book'
  db.query(TotalBookings,(err,TotalBookings)=>{
   if(err) console.log(err);
   else{ 
      res.send(TotalBookings);}
  })
 });
//  =============================
// update rooms
app.post("/roomUpdate", (req, res) => {
  const CHECK_IN = req.body.CHECK_IN;
  const CHECK_OUT = req.body.CHECK_OUT;
  const ACCOUNT = req.body.ACCOUNT;
  const ROOM_TYPE = req.body.ROOM_TYPE;
  const ROOMS_AVAILABLE = req.body.ROOMS_AVAILABLE;

  const sqlInsertRooms =
    "insert into rooms(CHECK_IN,CHECK_OUT,ACCOUNT,ROOM_TYPE,ROOMS_AVAILABLE) values(?,?,?,?,?)";
  db.query(
    sqlInsertRooms,
    [CHECK_IN, CHECK_OUT, ACCOUNT, ROOM_TYPE, ROOMS_AVAILABLE],
    (err, result) => {
      if (err) console.log(err);
      else console.log(result);
    }
  );
});
// Feedback and messages from the customer
app.post("/messages", encoder,(req,res)=>{
  var MESSAGES = req.body.Ohmy;
  var CUSTID=userdetails[0].CUSTID;
 
    const queryMessage=("Insert into messages (MESSAGES,CUSTID) values(?,?) ")
    db.query(queryMessage,[MESSAGES,CUSTID,],(err,ressp)=>{
      if(err){
        res.send("login first")
        } 
      else{
        res.send("Message was sent successfully")
        // var respData={
        //   Messag: "Message was sent successfully",
        //   content:MESSAGES
        // }
        // const finalMessage= JSON.stringify(respData);
        // res.status(204).send()
        // app.get('/messageee',(req,resss)=>{
        //   resss.send(finalMessage);
        // })
      }
    });
})


// ........................................................
app.post("/book", (req, res) => {
  const CUSTID = req.body.CUSTID;
  const CHECK_IN = req.body.CHECK_IN;
  const CHECK_OUT = req.body.CHECK_OUT;
  const ACCOUNT = req.body.ACCOUNT;
  const ROOM_NAME = req.body.ROOM_NAME;

  const sqlInsertBookings =
    "insert into book(CUSTID,CHECK_IN,CHECK_OUT,ACCOUNT,ROOM_NAME) values(?,?,?,?,?)";
  db.query(
    sqlInsertBookings,
    [CUSTID,CHECK_IN, CHECK_OUT, ACCOUNT, ROOM_NAME],
    (err, result) => {
      if (err) console.log(err);
      else console.log(result);
    }
  );
// axios.post(' https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query',
// {
//   "BusinessShortCode": "174379",
//   "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTkwOTIzMDc0MTIw",
//   "Timestamp": "20190923074120",
//   "CheckoutRequestID": "ws_CO_260520211133524545"
//   }
// )
});
//-----------------------------------------------------

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on port 3000");
  }
});
