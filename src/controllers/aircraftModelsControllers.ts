import { type Request, type Response, } from "express";
import { getAircraftsService } from "../services/aircraftModelsServices.js";
import { type AircraftModels } from '../types/aircraftModels.js'

export const getAircraftsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const aircrafts: AircraftModels[] = await getAircraftsService();
        res.json(aircrafts);
    } catch (err: unknown) {
        const error = err instanceof Error ? err.message : 'Internal server error';
        res.status(500).json( { error } );
    }
};