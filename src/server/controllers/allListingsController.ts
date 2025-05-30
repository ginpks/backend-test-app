import { Request, Response } from 'express';
import Listing, { IListing } from '../models/listing'; 

const allListingsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const listings: IListing[] = await Listing.find({});
        res.status(200).json(listings);
    } catch (error) {
        console.error('Error fetching listings:', error);
        if (error instanceof Error) {
            res.status(500).json({ message: "Failed to retrieve listings", error: error.message });
        } else {
            res.status(500).json({ message: "Failed to retrieve listings", error: "An unknown error occurred" });
        }
    }
}

export { allListingsController }