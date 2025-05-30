import mongoose, { Schema, Document } from 'mongoose';

export interface IListing extends Document {
    listingTitle: string;
    description: string;
    rent: number;
    address: string;
    numRooms: number;
    contactInfo: string;
}

const ListingSchema: Schema<IListing> = new Schema(
    {
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
    },
)

export default mongoose.model<IListing>('Listing', ListingSchema);
