const express = require("express");
const router = express.Router();
const { artistSchema, validateAgainstSchema } = require('../data/validate')
const { getArtists, 
    getArtist, 
    createArtist, 
    updateArtist, 
    deleteArtist 
} = require('../data/access/artists')

/* GET Artists. */
router.get("/", async (req, res, next) => {
    const results = await getArtists()
    res.send(results)
});

// /* GET a single Artist. */
// router.get("/:id", async (req, res, next) => {
//     const result = await getArtist(req.params.id)
//     res.send(result)
// });

/* POST an Artist. */
router.post("/", async (req, res, next) => {
    const body = req.body
    const result = await createArtist(body)
    res.send(result)
});

/* PUT Artists. */
router.put("/:id", async (req, res, next) => {
    const body = req.body
    const result = await updateArtist(body, req.params.id)
    res.send(result)
});

/* DELETE Artists. */
router.delete("/:id", async (req, res, next) => {
    const result = await deleteArtist(req.params.id)
    res.send(result)
});

const artist = {
    "_id": { "$oid": "5d76acf2ad9763104fb29438" },
    "birthName": "Daniela Niederer",
    "stageName": "Nora En Pure",
    "dob": "1990-07-20",
    "country": "Switzerland",
    "image": "https://images1.miaminewtimes.com/imager/u/745xauto/8926569/nora-en-pure.jpg",
    "desc": "She's da best",
    "website": "https://www.noraenpure.com/",
    "genres": ["Deep House", "Tech House", "Alternative Dance"],
    "crafts": ["Producer", "DiscJockey"],
    "groups": [""],
    "events": ["Imagine 2017", "Voodoo 2018"],
    "likes": [""]
}
router.get("/test", async (req, res, next) => {
    const result = validateAgainstSchema(artist, artistSchema)
    res.send(result)
});


module.exports = router;
