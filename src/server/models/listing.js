"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ListingSchema = new mongoose_1.Schema({
    listingTitle: {
        type: String,
        required: [true, 'Listing title is required'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
    },
    rent: {
        type: Number,
        required: [true, 'Rent is required'],
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
        trim: true,
    },
    numRooms: {
        type: Number,
        required: [true, 'Number of rooms is required'],
    },
    contactInfo: {
        type: String,
        required: [true, 'Contact info is required'],
        trim: true,
    }
});
exports.default = mongoose_1.default.model('Listing', ListingSchema);
