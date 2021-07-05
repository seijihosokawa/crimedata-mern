import mongoose from 'mongoose';

const DrugArrestsSchema = mongoose.Schema({
    year: Number,
    total_arrests: Number,
    total_manufacture: Number,
    opioid_manufacture: Number,
	marijuana_manufacture: Number,
    synthetic_manufacture: Number,
    other_manufacture: Number,
    total_possess: Number,
    opioid_possess: Number,
    marijuana_possess: Number,
    synthetic_possess: Number,
    other_possess: Number,
}, {collection: 'arrests_drugs'});

const DrugArrests = mongoose.model('DrugArrests', DrugArrestsSchema);

export default DrugArrests;