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
}, {collection: 'totals'});

const Totals = mongoose.model('Totals', statesSchema);

export default Totals;