const express = require('express');
const router = express.Router();
const User = require('../models/User')
// const Axios = require('axios')

router.get('/', (req, res, next) => {
    User.find({})
        .then((users) => res.json(users))
        .catch(next);
});

router.get('/:id', async (req, res, next) => {
    try {
        const users = await User.findById(req.params.id)
        if (users) {
            res.json(users)
        } else {
            res.sendStatus(404)
        }
    } catch (err) {
        next(err)
    }
})

router.route('/').post((req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const newUser = new User({
        name,
        age
    })
    newUser.save()
})

router.put('/:id', async (req, res, next) => {
    try {
        const userToUpdate = await User.findOneAndUpdate(

            parseInt(req.params.id),
            req.body,
            {
                new: true
            }
        )
        console.log(req.params)

        if (userToUpdate) {
            res.json(userToUpdate)
        } else {
            res.sendStatus(404)
        }

    } catch (err) {
        next(err)
    }
})


router.delete('/:id', async (req, res, next) => {
    try {
        const userToDelete = await User.findByIdAndDelete(req.params.id)
        console.log(req.params)
        if (userToDelete) {
            res.sendStatus(204)
        } else {
            res.sendStatus(404)
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router;
