import Arrests from '../models/arrestsSchema.js';

export const getData = async (req, res) => {
    try {
        var limit = parseInt(req.query.limit);
        var crime = req.query.crime;

        if(crime !== undefined){
            let queryParams = crime.split(',');
            let fields = { _id: 0, year:1}; 

            queryParams.forEach(element => {
                fields[element] = 1;
            });

            const arrestsData = await Arrests.find({}, fields).limit(limit);
    
            res.status(200).json(arrestsData);
        }else{
            const arrestsData = await Arrests.find({}, {_id: 0}).limit(limit);

            res.status(200).json(arrestsData);
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getYears = async (req, res) => {
    try {
        const yearList = await Arrests.find().distinct('year');

        res.status(200).json(yearList);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getArrestOffense = async (req, res) => {
    try {
        const arrestOffenses = ["homicide", "rape", "robbery", "aggravated_assault", "burglary", "larceny", "motor_vehicle_theft", "arson", "violent_crime", 
        "property_crime", "other_assault", "forgery", "fraud", "embezzlement", "stolen_property", "vandalism", "weapons", "prostitution", 
        "other_sex_offenses", "drug_abuse", "gambling"];

        res.status(200).json(arrestOffenses);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}