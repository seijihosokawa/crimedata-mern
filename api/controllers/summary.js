import States from '../models/statesSchema.js';
import Totals from '../models/totalsSchema.js';

export const getData = async (req, res) => {
    try {
        var limit  = parseInt(req.query.limit);
        var queryString = req.query.fields;

        if(queryString !== undefined){
            let fieldsArr = queryString.split(',');
            let fields = { _id: 0, year:1, state_abbr: 1, state_name: 1}; 

            fieldsArr.forEach(element => {
                fields[element] = 1;
            });

            const crimeData = await States.find({}, fields).limit(limit);
    
            res.status(200).json(crimeData);
        }else{
            const crimeData = await States.find({}, {_id: 0}).limit(limit);

            res.status(200).json(crimeData);
        }
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getYears = async (req, res) => {
    try {
        const yearList = await States.find().distinct('year');

        res.status(200).json(yearList);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getSpecificYear = async (req, res) => {
    try {
        var year = req.params.year; 
        var queryString = req.query.fields;

        if(queryString !== undefined){
            let fieldsArr = queryString.split(',');
            let fields = { _id: 0, year:1, state_abbr: 1, state_name: 1}; 

            fieldsArr.forEach(element => {
                fields[element] = 1;
            });

            const specificYear = await States.find({'year':year}, fields);
    
            res.status(200).json(specificYear);
        }else{
            const specificYear = await States.find({'year':year}, {_id: 0});

            res.status(200).json(specificYear);
        }
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getYearRange = async (req, res) => {
    try {
        var yearStart = req.params.yearstart; 
        var yearEnd = req.params.yearend;
        var queryString = req.query.fields;

        if(queryString !== undefined){
            let fieldsArr = queryString.split(',');
            let fields = { _id: 0, year:1, state_abbr: 1, state_name: 1}; 

            fieldsArr.forEach(element => {
                fields[element] = 1;
            });

            const yearRange = await States.find({ year: { $gte: yearStart, $lte: yearEnd }}, fields);
    
            res.status(200).json(yearRange);
        }else{
            const yearRange = await States.find({ year: { $gte: yearStart, $lte: yearEnd }},{_id: 0});

            res.status(200).json(yearRange);
        }
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getTotals = async (req, res) => {
    try {
        var limit  = parseInt(req.query.limit);
        var queryString = req.query.fields;

        if(queryString !== undefined){
            let fieldsArr = queryString.split(',');
            let fields = { _id: 0, year:1}; 

            fieldsArr.forEach(element => {
                fields[element] = 1;
            });

            const yearTotals = await Totals.find({}, fields).limit(limit);
    
            res.status(200).json(yearTotals);
        }else{
            const yearTotals = await Totals.find({}, {_id: 0}).limit(limit);

            res.status(200).json(yearTotals);
        }
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getSpecificTotals = async (req, res) => {
    try {
        var year = req.params.year;
        var queryString = req.query.fields;

        if(queryString !== undefined){
            let fieldsArr = queryString.split(',');
            let fields = { _id: 0, year:1}; 

            fieldsArr.forEach(element => {
                fields[element] = 1;
            });

            const yearTotal = await Totals.find({'year':year}, fields);
    
            res.status(200).json(yearTotal);
        }else{
            const yearTotal = await Totals.find({'year':year}, {_id: 0});

            res.status(200).json(yearTotal);
        } 
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getSpecificTotalsRange = async (req, res) => {
    try {
        var yearStart = req.params.yearstart; 
        var yearEnd = req.params.yearend;
        var queryString = req.query.fields;

        if(queryString !== undefined){
            let fieldsArr = queryString.split(',');
            let fields = { _id: 0, year:1}; 

            fieldsArr.forEach(element => {
                fields[element] = 1;
            });

            const yearTotalRange = await Totals.find({ year: { $gte: yearStart, $lte: yearEnd }}, fields);
    
            res.status(200).json(yearTotalRange);
        }else{
            const yearTotalRange = await Totals.find({ year: { $gte: yearStart, $lte: yearEnd }}, {_id: 0});

            res.status(200).json(yearTotalRange);
        } 
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getStates = async (req, res) => {
    try {
        const state = await States.find().distinct('state_abbr');

        res.status(200).json(state);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getSpecificState = async (req, res) => {
    try {
        var state = req.params.id.toUpperCase();
        var limit  = parseInt(req.query.limit);
        var queryString = req.query.fields;

        if(queryString !== undefined){
            let fieldsArr = queryString.split(',');
            let fields = { _id: 0, year:1, state_abbr: 1}; 

            fieldsArr.forEach(element => {
                fields[element] = 1;
            });

            const specificState = await States.find({'state_abbr':state}, fields).limit(limit);
    
            res.status(200).json(specificState);
        }else{
            const specificState = await States.find({'state_abbr':state}, {_id: 0}).limit(limit);

            res.status(200).json(specificState);
        }
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getSpecificStateYear = async (req, res) => {
    try {
        var state = req.params.id.toUpperCase();
        var year = req.params.year;
        var queryString = req.query.fields;

        if(queryString !== undefined){
            let fieldsArr = queryString.split(',');
            let fields = { _id: 0, year:1, state_abbr: 1}; 

            fieldsArr.forEach(element => {
                fields[element] = 1;
            });

            const specificStateYear = await States.find({'state_abbr':state, 'year':year}, fields);
    
            res.status(200).json(specificStateYear);
        }else{
            const specificStateYear = await States.find({'state_abbr':state, 'year':year}, {_id: 0});

            res.status(200).json(specificStateYear);
        }
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getSpecificStateRange = async (req, res) => {
    try {
        var state = req.params.id.toUpperCase();
        var yearStart = req.params.yearstart; 
        var yearEnd = req.params.yearend;
        var queryString = req.query.fields;

        if(queryString !== undefined){
            let fieldsArr = queryString.split(',');
            let fields = { _id: 0, year:1, state_abbr: 1}; 

            fieldsArr.forEach(element => {
                fields[element] = 1;
            });
            const specificStateRange = await States.find({'state_abbr':state, year: { $gte: yearStart, $lte: yearEnd }}, fields);
    
            res.status(200).json(specificStateRange);
        }else{
            const specificStateRange = await States.find({'state_abbr':state, year: { $gte: yearStart, $lte: yearEnd }}, {_id: 0});

            res.status(200).json(specificStateRange);
        }
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getStatesList = async (req, res) => {
    try {
        const stateList = await States.find().distinct('state_name');

        res.status(200).json(stateList);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getCrimes = async (req, res) => {
    try {
        const crimeList = ['violent_crime','homicide','rape','robbery','aggravated_assault',
        'property_crime','burglary','larceny','motor_vehicle_theft'];

        res.status(200).json(crimeList);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}