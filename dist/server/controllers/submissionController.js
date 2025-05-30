"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submissionController = void 0;
const listing_1 = __importDefault(require("../models/listing"));
const submissionController = async (req, res) => {
    try {
        const { listingTitle, description, rent, address, numRooms, contactInfo } = req.body;
        const newListing = new listing_1.default({
            listingTitle,
            description,
            rent,
            address,
            numRooms,
            contactInfo,
        });
        const savedListing = await newListing.save();
        res.status(201).json(savedListing);
    }
    catch (error) {
        console.error("Error submitting listing", error);
        if (error instanceof Error && error.name === 'ValidationError') {
            res.status(400).json({ message: "Validation failed", errors: error.errors });
        }
        else {
            res.status(500).json({ message: "Error submitting listing", error: (error instanceof Error ? error.message : "Unknown error") });
        }
    }
};
exports.submissionController = submissionController;
