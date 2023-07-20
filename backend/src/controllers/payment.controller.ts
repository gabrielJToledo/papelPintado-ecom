import mercadopago from 'mercadopago';
import { Request, Response, Router } from 'express';
import * as dotenv from 'dotenv'
export const paymentRouter = Router();

dotenv.config()

// mercadopago.configure({
//     client_id: `${process.env.CLIENT_ID_MP}`,
//     client_secret: `${process.env.CLIENT_SECRET_MP}`
// });


mercadopago.configure({
    access_token: 'TEST-f6ff1624-8ef5-4e67-8e1c-69a4a8baff1f',
    integrator_id: 'TEST-3937778398142382-071515-fa3f0938b2bce15ba08f981bd7ec4395-820889614',
  });

paymentRouter.post('/test-payment', async (req: Request, res: Response) => {
    try {
      const { amount, productName, name, category, description, coverImage, images, price, discountPrice } = req.body;
  
      const preference = {
        items: [
          {
            title: productName,
            description: description,
            picture_url: coverImage,
            category_id: category,
            quantity: 1,
            currency_id: 'BRL',
            unit_price: amount
          }
        ]
      };
  
      const simulatedPayment = {
        status: 'approved'
      };
  
      const response = {
        preference,
        payment: simulatedPayment
      };
  
      res.json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to process test payment' });
    }
  });
  
  paymentRouter.post('/', async (req: Request, res: Response) => {
    try {
      const { amount, productName, name, category, description, coverImage, images, price, discountPrice } = req.body;
  
      const preference: any = {
        items: [
          {
            title: productName,
            description: description,
            picture_url: coverImage,
            category_id: category,
            quantity: 1,
            currency_id: 'BRL',
            unit_price: amount
          }
        ]
      };
  
      const response = await mercadopago.preferences.create(preference);
  
      res.json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create payment preference' });
    }
  });
  