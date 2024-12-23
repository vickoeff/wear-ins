import { GET_PRODUCT_BY_ID } from '@/app/actions/product';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const product = await GET_PRODUCT_BY_ID(id as string);

      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error: { message: string } | string | unknown) {
      res.status(500).json({ message: 'Internal server error: ', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}