import Arrests from '../models/arrestsSchema.js';

export const getData = async (req, res) => {
    try {
        var limit = parseInt(req.query.limit);
        var queryString = req.query.fields;

        if(limit <= 0) throw new Error('The limit must be greater than 0.');

        if(queryString !== undefined){
            let fieldsArr = queryString.split(',');
            let fields = { _id: 0, year:1}; 

            fieldsArr.forEach(element => {
                if(Arrests.schema.pathType(element) !== 'real') throw new Error('Field not found. Please refer to object schema for correct fields.');

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

export const getSpecificYear = async (req, res) => {
    try {
        var year = req.params.year; 
        var queryString = req.query.fields;

        if(year < 1995 || year > 2016) throw new Error('The year must be between 1995-2016.');

        if(queryString !== undefined){
            let fieldsArr = queryString.split(',');
            let fields = { _id: 0, year:1}; 

            fieldsArr.forEach(element => {
                if(Arrests.schema.pathType(element) !== 'real') throw new Error('Field not found. Please refer to object schema for correct fields.');

                fields[element] = 1;
            });

            const arrestsYearData = await Arrests.find({year: year}, fields);
    
            res.status(200).json(arrestsYearData);
        }else{
            const arrestsYearData = await Arrests.find({year: year}, {_id: 0});

            res.status(200).json(arrestsYearData);
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getYearRange = async (req, res) => {
    try {
        var yearStart = req.params.yearstart; 
        var yearEnd = req.params.yearend;
        var queryString = req.query.fields;

        if(yearStart > yearEnd) throw new Error(`The starting year (${yearStart}) must be before the ending year (${yearEnd}).`);
        if(yearStart < 1995 || yearStart > 2016 || yearEnd < 1995 || yearEnd > 2016) throw new Error('The year range must be between 1995-2016.');


        if(queryString !== undefined){
            let fieldsArr = queryString.split(',');
            let fields = { _id: 0, year:1}; 

            fieldsArr.forEach(element => {
                if(Arrests.schema.pathType(element) !== 'real') throw new Error('Field not found. Please refer to object schema for correct fields.');

                fields[element] = 1;
            });

            const arrestsYearsData = await Arrests.find({ year: { $gte: yearStart, $lte: yearEnd }}, fields);
    
            res.status(200).json(arrestsYearsData);
        }else{
            const arrestsYearsData = await Arrests.find({ year: { $gte: yearStart, $lte: yearEnd }}, {_id: 0});

            res.status(200).json(arrestsYearsData);
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
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