import { Request, Response } from 'express';
import Listing, { IListing } from '../models/listing'; 

const submissionController =  async (req: Request, res: Response): Promise<void> => {
    try {
        const { listingTitle, description, rent, address, numRooms, contactInfo } = req.body;

        const newListing: IListing = new Listing({
            listingTitle,
            description,
            rent,
            address,
            numRooms,
            contactInfo,
        });

        const savedListing = await newListing.save();
        res.status(201).json(savedListing);
    } catch(error) {
        console.error("Error submitting listing", error);
        if (error instanceof Error && error.name === 'ValidationError') {
            res.status(400).json({ message: "Validation failed", errors: (error as any).errors });
        } else {
            res.status(500).json({ message: "Error submitting listing", error: (error instanceof Error ? error.message : "Unknown error") });
        }
    }

}

export { submissionController };
