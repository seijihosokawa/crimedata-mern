import Years from '../models/crimeSchema.js';

export const getData = async (req, res) => {
    try {
        var limit  = req.query.limit ? parseInt(req.query.limit) : 200;
        
        const year = await Years.find().limit(limit);

        res.status(200).json(year);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getYears = async (req, res) => {
    try {
        var limit  = req.query.limit ? parseInt(req.query.limit) : 200;

        const yearList = await Years.find().distinct('year').limit(limit);

        res.status(200).json(yearList);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getStates = async (req, res) => {
    try {
        var limit  = req.query.limit ? parseInt(req.query.limit) : 200;

        const state = await Years.find().distinct('state_abbr').limit(limit);

        res.status(200).json(state);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getStatesList = async (req, res) => {
    try {
        var limit  = req.query.limit ? parseInt(req.query.limit) : 200;

        const stateList = await Years.find().distinct('state_name').limit(limit);

        res.status(200).json(stateList);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getSpecificYear = async (req, res) => {
    try {
        var year = req.params.year; 

        const specificYear = await Years.find({'year':year}).limit(limit);

        res.status(200).json(specificYear);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getSpecificState = async (req, res) => {
    try {
        var limit  = req.query.limit ? parseInt(req.query.limit) : 200;
        var state = req.params.id.toUpperCase(); 

        const specificState = await Years.find({'state_abbr':state}).limit(limit);

        res.status(200).json(specificState);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}