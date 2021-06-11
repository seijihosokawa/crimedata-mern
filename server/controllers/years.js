import Years from '../models/yearsList.js';

export const getYears = async (req, res) => {
    try {
        const year = await Years.find();

        res.status(200).json(year);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}