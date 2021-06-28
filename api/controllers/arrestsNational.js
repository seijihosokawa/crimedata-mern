import Arrests from '../models/arrestsSchema.js';

export const getData = async (req, res) => {
    try {
        var limit = parseInt(req.query.limit);

        const arrestsData = await Arrests.find({}, { _id: 0 }).limit(limit);

        res.status(200).json(arrestsData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getArrestOffense = async (req, res) => {
    try {
        var limit = parseInt(req.query.limit);
        var crime = toString(req.query.crime)

        const arrestOffenses = ["homicide", "rape", "robbery", "aggravated_assault", "burglary", "larceny", "motor_vehicle_theft", "arson", "violent_crime", 
        "property_crime", "other_assault", "forgery", "fraud", "embezzlement", "stolen_property", "vandalism", "weapons", "prostitution", 
        "other_sex_offenses", "drug_abuse", "gambling"];

        res.status(200).json(arrestOffenses);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getSpecificCrime = async (req, res) => {
    try {
        var limit = parseInt(req.query.limit);
        let crime = req.params.crime;
        let offense = { _id: 0, year:1, [crime]: 1}; 

        const arrestsData = await Arrests.find({}, offense).limit(limit);

        res.status(200).json(arrestsData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}