import Stripe from 'stripe';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';


export async funtion POST(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("User not Authenticated", { status: 401 });
    }

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [{
      quantity: 1,
      price_data: {
        currency: 'JPY',
        product_data: {
          name: '10,000 AI Credit',
          description: 'Unlock 10,000 AI Credits',
        },
        unit_amount: 1000
      },
    }];
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}