const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;

const db_url = process.env.ATLAS_CONNECTION

const settings = {
    reconnectTries: Number.MAX_VALUE,
    autoReconnect: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const getArtists = () => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(db_url, settings, async (err, client) => {
            if (err) {
                console.error('An error occurred connecting to MongoDB: ', err);
                reject(err)
            } else {
                const collection = client.db("plurster").collection("artists");
                // perform actions on the collection object
                const results = await collection.find({}).toArray((err, docs) => {
                    console.log('Read Artists:', docs)
                    resolve(docs)
                });
            }
            client.close();
        });
    })
    return iou;
}

const getArtist = (id) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(db_url, settings, async (err, client) => {
            if (err) {
                console.error('An error occurred connecting to MongoDB: ', err);
                reject(err)
            } else {
                const collection = client.db("plurster").collection("artists");
                // perform actions on the collection object
                const results = await collection.find({ _id: ObjectId(id) }).toArray((err, docs) => {
                    console.log('Read Artist:', docs)
                    resolve(docs)
                });
            }
            client.close();
        });
    })
    return iou;
}

const createArtist = (artist) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(db_url, settings, async (err, client) => {
            if (err) {
                console.error('An error occurred connecting to MongoDB: ', err);
                reject(err)
            } else {
                const collection = client.db("plurster").collection("artists");
                // perform actions on the collection object
                const result = await collection.insertOne(artist);
                console.log('Created Artist:', result)
                resolve(result.result)
            }
            client.close();
        });
    })
    return iou;
}

const updateArtist = (artist, id) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(db_url, settings, async (err, client) => {
            if (err) {
                console.error('An error occurred connecting to MongoDB: ', err);
                reject(err)
            } else {
                const collection = client.db("plurster").collection("artists");
                // perform actions on the collection object
                const result = await collection.updateOne(
                    { _id: ObjectId(id) },
                    { $set: artist }
                );
                console.log('Updated Artist:', result)
                resolve(result)
            }
            client.close();
        });
    })
    return iou;
}


const deleteArtist = (id) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(db_url, settings, async (err, client) => {
            if (err) {
                console.error('An error occurred connecting to MongoDB: ', err);
                reject(err)
            } else {
                const collection = client.db("plurster").collection("artists");
                // perform actions on the collection object
                const result = await collection.remove(
                    { _id: ObjectId(id) }
                );
                console.log('Delete Artist:', result)
                resolve(result)
            }
            client.close();
        });
    })
    return iou;
}

module.exports = {
    getArtists,
    getArtist,
    createArtist,
    updateArtist,
    deleteArtist
}
