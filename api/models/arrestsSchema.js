import mongoose from 'mongoose';

const arrestsSchema = mongoose.Schema({
    year: Number,
    population: Number,
    total_arrests: Number,
    homicide: Number,
    rape: Number,
    robbery: Number,
    aggravated_assault: Number,
    burglary: Number,
    larceny: Number,
    motor_vehicle_theft: Number,
    arson: Number,
    violent_crime: Number,
    property_crime: Number,
    other_assault: Number,
    forgery: Number,
    fraud: Number,
    embezzlement: Number,
    stolen_property: Number,
    vandalism: Number,
    weapons: Number,
    prostitution: Number,
    other_sex_offenses: Number,
    drug_abuse: Number,
    gambling: Number,    
}, {collection: 'arrests_national'});

const Arrests = mongoose.model('Arrests', arrestsSchema);

export default Arrests;