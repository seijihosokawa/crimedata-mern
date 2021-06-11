import Years from '../models/yearsList.js';

export const getYears = async (req, res) => {
    try {
        const year = await Years.find().limit(200);

        res.status(200).json(year);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getYearsList = async (req, res) => {
    try {
        const yearList = await Years.find().distinct('year');

        res.status(200).json(yearList);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}