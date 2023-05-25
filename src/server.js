import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const uri =
  "mongodb+srv://prashanth:P0neglyph@andromeda.w5ekd35.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.post("/", async (req, res) => {
  try {
    await client.connect();
    const result = await client
      .db("Mirach")
      .collection("formData")
      .insertOne(req.body);
    console.log("Data inserted successfully: ", result.insertedId);
    res.send({id: result.insertedId});
  } catch (error) {
    console.log("Error inserting data in Mongodb: ", error);
  } finally {
    await client.close();
  }
});

app.post("/appDetails", async (req, res) => {
  try {
    const {id} = req.body;
    await client.connect();
    const document = await client.db("Mirach").collection("formData").findOne({_id: new ObjectId(id)});
    res.send({document});
  } catch (error) {
    console.log("Error getting data from mongodb: ", error);
  } finally {
    await client.close();
  }
})

app.listen(3000, () => {
  console.log("server started at port 3000");
});
