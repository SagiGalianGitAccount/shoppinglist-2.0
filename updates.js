const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const uri =
  "mongodb+srv://sagi:sagi@cluster0.k5awmqw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const collection = client.db("shopping-list").collection("lists");

function setUpdates(newUpdates) {
  collection
    .updateOne(
      { _id: ObjectId("6419d09f4d4a516e20739347") },
      { $set: { updates: newUpdates } }
    )
    .then((res) => {
      console.log("Successfuly updated");
    })
    .catch((err) => {
      console.error(err);
    });
}

const newUpdates = ["עידכון 2.0 פרטים",
                    "-------------------",
                "*" + "שדה המחלקה כעת נמצא מתחת לשם הפריט",
                 "*" + "כרטיס הפריט עוצב בצורה שונה",
                "*", + "יוסף רואה עידכון",]

setUpdates(newUpdates)