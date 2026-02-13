import sqlPool from '../config/sqlDb.js';

interface aircraftModels {
    modelId: number;
    manufacturer: string;
    model: string;
}

export async function getAircrafts(): Promise<aircraftModels[]> {
    return new Promise((resolve, reject) => {
        let sqlQuery = 'SELECT * FROM aircraftModels';
        sqlPool.query(sqlQuery, (err: Error, rows: aircraftModels[]) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}