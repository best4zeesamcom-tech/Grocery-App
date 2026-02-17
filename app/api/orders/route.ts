import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Order from '@/models/Order';
import Cart from '@/models/Cart';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, shippingAddress, paymentMethod } = body;

    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'User ID is required' },
        { status: 401 }
      );
    }

    if (!shippingAddress || !paymentMethod) {
      return NextResponse.json(
        { success: false, error: 'Please provide shipping address and payment method' },
        { status: 400 }
      );
    }

    await connectToDatabase();

    // Find user's cart
    const cart = await Cart.findOne({ userId });
    
    if (!cart) {
      return NextResponse.json(
        { success: false, error: 'Cart not found' },
        { status: 404 }
      );
    }

    if (!cart.items || cart.items.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Cart is empty' },
        { status: 400 }
      );
    }

    // Create order
    const order = await Order.create({
      user: userId,
      items: cart.items,
      totalAmount: cart.totalAmount || 0,
      shippingAddress,
      paymentMethod,
      paymentStatus: 'pending',
      orderStatus: 'pending'
    });

    // Clear cart after successful order
    cart.items = [];
    cart.totalAmount = 0;
    await cart.save();

    return NextResponse.json({
      success: true,
      data: order
    }, { status: 201 });

  } catch (error: any) {
    console.error('Order creation error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create order' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'User ID is required' },
        { status: 401 }
      );
    }

    await connectToDatabase();

    const orders = await Order.find({ user: userId })
      .sort({ createdAt: -1 })
      .limit(10);

    return NextResponse.json({
      success: true,
      data: orders
    });

  } catch (error: any) {
    console.error('Orders fetch error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}