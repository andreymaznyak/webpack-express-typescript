import * as pgp from 'pg-promise';
import { CONNECTIONS } from './connections.config';

export class PosgreSQLManager {
    db = pgp( CONNECTIONS.dev.uri );
    constructor() {
        console.log(this.db);
    }

    query() {
    }

}