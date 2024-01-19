const mongoose = require('mongoose')
const Elections = require('../models/elections')



exports.createElection = async (req, res) => {
  const userId = new mongoose.Types.ObjectId(req.userData.userId);
  try {
    const election = await Elections.create({
      title: req.body.title,
      description: req.body.description,
      date:req.body.date
    })
    res.status(200).json({
      success: true,
      message: 'election Created Successfully',
      data: election
    })
  } catch (error) {
    res.status(500).json({ error: true, message: 'Could not create the election' });
  }
}

exports.getAllElections = async (req, res) => {
  try {
    const elections = await Elections.find()
    res.status(200).json({
      success: true,
      data: elections
    });
  } catch (error) {
    res.status(500).json({ error: true, message: 'Could not retrieve elections' });
  }
};

exports.getElectionById = async (req, res) => {
  const { electionId } = req.params;
  try {
    const election = await Elections.findById(electionId)
    if (!election) {
      return res.status(404).json({ error: true, message: 'election not found' });
    }
    res.status(200).json({
      success: true,
      data: election
    });
  } catch (error) {
    res.status(500).json({ error: true, message: 'Could not retrieve the election' });
  }
};

exports.updateElectionById = async (req, res) => {
  const { electionId } = req.params;
  try {
    const updatedElection = await Elections.findByIdAndUpdate(electionId, req.body, { new: true });
    if (!updatedElection) {
      return res.status(404).json({ error: true, message: 'Election not found' });
    }
    res.status(200).json({
      success: true,
      message: 'Election updated successfully',
      data: updatedElection
    });
  } catch (error) {
    res.status(500).json({ error: true, message: 'Could not update the Election' });
  }
};


exports.deleteElectionById = async (req, res) => {
  const { electionId } = req.params;
  try {
    const deletedElection = await Elections.findByIdAndDelete(electionId);
    if (!deletedElection) {
      return res.status(404).json({ error: true, message: 'Election not found' });
    }
    res.status(200).json({
      success: true,
      message: 'Election deleted successfully',
      data: deletedElection
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: true, message: 'Could not delete the Election' });
  }
};


