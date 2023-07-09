import mongoose, { Schema } from "mongoose";

const employedSchema = new Schema({
    employedName: String,
    date: String,
    punchIn: String,
    punchOut: String,
    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const employedModel = mongoose.model('Employed', employedSchema);

export default employedModel;