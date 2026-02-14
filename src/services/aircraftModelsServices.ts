import sqlPool from '../config/sqlDb.js';
import { type AircraftModels } from '../types/aircraftModels.js'

export async function getAircraftsService(): Promise<AircraftModels[]> {
    return new Promise((resolve, reject) => {
        let sqlQuery = 'SELECT * FROM aircraftModels';
        sqlPool.query(sqlQuery, (err: Error, rows: AircraftModels[]) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}