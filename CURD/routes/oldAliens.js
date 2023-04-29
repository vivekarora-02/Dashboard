const express = require('express')
const router = express.Router()
const oldAlien = require('../models/oldAlien')


router.get('/Earth', async (req, res) => {
    try {
        // const alien = await Alien.findById(req.params.id)
        const result = await oldAlien.aggregate([
            {
                $match: {
                    dest: "Earth"
                }
            }
        ]).exec();
        console.log({ result });
        res.json(result)
    } catch (err) {
        console.log({ err })
        res.status(500).send(err);
    }
})

router.get('/sort', async (req, res) => {
    try {
        // const alien = await Alien.findById(req.params.id)
        const result = await oldAlien.aggregate([
            {
                $group: {
                    _id: "$name",
                }
            }

        ]).exec();
        console.log({ result });
        res.json(result)
    } catch (err) {
        console.log({ err })
        res.status(500).send(err);
    }

})


router.get('/', async (req, res) => {
    try {
        const aliens = await oldAlien.find()
        res.json(aliens)
    } catch (err) {
        res.status(500)
        res.send('Error ' + err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const alien = await oldAlien.findById(req.params.id)
        res.json(alien)
    } catch (err) {
        res.status(500)
        res.send('Error ' + err)
    }
})


router.post('/', async (req, res) => {
    const alien = new oldAlien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub,
        from: req.body.from,
        dest: req.body.dest,
    })

    try {
        const a1 = await alien.save()
        res.json(a1)
    } catch (err) {
        res.status(500).send('Error')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const alien = await oldAlien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)
    } catch (err) {
        try {
            const alien = await oldAlien.findById(req.params.id)
            alien.name = req.body.name
            const a1 = await alien.save()
            res.json(a1)
        } catch (err) {
            try {
                const alien = await oldAlien.findById(req.params.id)
                alien.tech = req.body.tech
                const a1 = await alien.save()
                res.json(a1)
            } catch (err) {
                try {
                    const alien = await oldAlien.findById(req.params.id)
                    alien.from = req.body.from
                    const a1 = await alien.save()
                    res.json(a1)
                } catch (err) {
                    try {
                        const alien = await oldAlien.findById(req.params.id)
                        alien.dest = req.body.dest
                        const a1 = await alien.save()
                        res.json(a1)
                    } catch (err) {
                        res.status(500).send('Error')
                    }
                }
            }
        }
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const alien = await oldAlien.findById(req.params.id)
        const a1 = await alien.remove()
        res.json(a1)
    } catch (err) {
        console.log({ err })
        res.status(500).send(err);
    }

})

module.exports = router
