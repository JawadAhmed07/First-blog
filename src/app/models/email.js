import mongoose from 'mongoose';

const EmailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Please provide a valid email address'],
    },
}, { timestamps: true });

export default mongoose.models.Email || mongoose.model('Email', EmailSchema);
