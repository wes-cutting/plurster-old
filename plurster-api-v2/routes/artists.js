const express = require("express");
const router = express.Router();
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

/* GET a single Artist. */
router.get("/:id", async (req, res, next) => {
    const result = await getArtist(req.params.id)
    res.send(result)
});

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

module.exports = router;
