import mongoose from 'mongoose';

const juvenileArrestsSchema = mongoose.Schema({
    year: Number,
    offense_code: String,
    offense_name: String,
    total_male: Number,
    total_female: Number,
    m_0_9: Number,
    m_10_12: Number,
    m_13_14: Number,
    m_15: Number,
    m_16: Number,
    m_17: Number,
    f_0_9: Number,
    f_10_12: Number,
    f_13_14: Number,
    f_15: Number,
    f_16: Number,
    f_17: Number, 
    white: Number,
    black: Number,
    asian_pacific_islander: Number,
    american_indian: Number,
}, {collection: 'arrests_juvenile'});

const JuvenileArrests = mongoose.model('JuvenileArrests', juvenileArrestsSchema);

export default JuvenileArrests;