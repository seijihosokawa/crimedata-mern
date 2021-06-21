import mongoose from 'mongoose';

const statesSchema = mongoose.Schema({
    year: Number,
    population: Number,
    violent_crime: Number,
    homicide: Number,
    rape: Number,
    robbery: Number,
    aggravated_assault: Number,
    property_crime: Number,
    burglary: Number,
    larceny: Number,
    motor_vehicle_theft: Number,
    state_abbr: String,
    state_name: String,
}, {collection: 'states'});

const States = mongoose.model('States', statesSchema);

export default States;