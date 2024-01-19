const express = require('express');
const router = express.Router();
const electionController = require('../controllers/electionsController');


router.post("/create", electionController.createElection);
router.get('/display', electionController.getAllElections); //get all the books available in the database 
router.get('/display/:electionId', electionController.getElectionById); // get a specefic book by its ID
router.put('/update/:electionId', electionController.updateElectionById);
router.delete('/delete/:electionId', electionController.deleteElectionById);

module.exports = router;
