var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors")
var mongoose = require("mongoose")
var Test = require("./model/test.model.js")



var app = express();


// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.set('port', process.env.PORT || 5000);
// console.log("+++++++++++++++" + app.get('port'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

app.use(express.static(path.join("./client/build")))

// app.use(express.static('./client/build'));

// app.use('/api/data', require('./routes/new-index.js'))

// app.get("*", (req, res) => { //our GET route needs to point to the index.html in our build
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });

// error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     res.status(err.status || 500);
//     res.render('error');
// });

app.get("/test", async (req, res) =>{
    const testings = await Test.find();
    console.log(testings)
    res.send(testings)
  })

app.get("/welcome", (req, res) =>{
    res.send("good boy welcome") 
})



mongoose
  .connect("mongodb+srv://tytest:DpHs5wYG2kIVrAbx@cluster0.d4vuglp.mongodb.net/tytesting123?retryWrites=true&w=majority")
  .then(() => {
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`listening on port ${port}`));
  })
  .catch((err) => {
    console.log(err);
  });

// module.exports = app;

// app.listen(app.get('port'), function () {
//     console.log('Express server listening on port ' + app.get('port'));
// });