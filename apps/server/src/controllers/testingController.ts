
import { Request, Response } from 'express';

export const testingController = async (req: Request, res: Response) => {
    res.send("Hello From Stratos");
}
    