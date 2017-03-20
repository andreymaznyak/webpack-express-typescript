import * as express from 'express';
import { PosgreSQLManager } from "./datastores/posgresql/posgresql.manager";
const router = express.Router();

router.get('/', ( req: express.Request, res: express.Response, next: express.NextFunction ) => {
    res.render('index', {
        title: JSON.stringify(new PosgreSQLManager(),null,4)
    });
});

export = router;