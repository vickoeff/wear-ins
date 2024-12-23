import { NextApiRequest, NextApiResponse } from "next";
import { CREATE_PRODUCTS } from "@/app/actions/product";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const payload = req.body;
      const product = await CREATE_PRODUCTS(payload);

      res.status(201).json(product);
    } catch (error: { message: string } | string | unknown) {
      res.status(500).json({ message: 'Internal server error: ', error });
    }
  }
}