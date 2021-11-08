const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb+srv://il3sor:0823572165@cluster0.6txrx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" , {
    });
    console.log("success");
  } catch (error) {
    console.log("fail");
  }
}
module.exports = { connect };
