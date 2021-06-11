import Years from '../models/crimeSchema.js';

export const getData = async (req, res) => {
    try {
        const year = await Years.find().limit(200);

        res.status(200).json(year);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getYears = async (req, res) => {
    try {
        const yearList = await Years.find().distinct('year');

        res.status(200).json(yearList);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getStates = async (req, res) => {
    try {
        const state = await Years.find().distinct('state_abbr');

        res.status(200).json(state);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getStatesList = async (req, res) => {
    try {
        const stateList = await Years.find().distinct('state_name');

        res.status(200).json(stateList);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}