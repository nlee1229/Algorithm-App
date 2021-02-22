const router = require('express').Router(); // need this b/c this is a route we're creating
let User = require('../models/user.model'); // require mongoose model we created

// first route
router.route('/').get((req, res) => {
    User.find() // get all users
        .then(users => res.json(users)) // return something in json format(users we got from database)
        .catch(err => res.status(400).json('Error: ' + err)); // if there's an error, return status 400 and error message
});

router.route('/add').post((req, res) => {
    const username = req.body.username; // req.body.username (new username) will be assigned to the const username variable

    const newUser = new User({username}); // creating a new instance of a user using username

    newUser.save() // user is saved to the MongoDB atlas database
        .then(() => res.json('User added!')) // after saved, return 'User added!' 
        .catch(err => res.status(400).json('Error: ' + err)); // or return error message
});

module.exports = router;

