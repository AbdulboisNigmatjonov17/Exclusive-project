"use client";
import React from 'react';
import {
    LocalShipping,
    AssignmentReturn,
    CheckCircleOutline
} from '@mui/icons-material';
import { Button, ButtonGroup } from '@mui/material';
import StarRating from '../star/Star';
import { useDispatch } from 'react-redux';
import { addToCart } from "@/features/CartSlice";
import { CardsData } from '@/helpers/CardsData';
import { useParams } from 'next/navigation';

const GamepadProduct = () => {
    const params = useParams();
    const dispatch = useDispatch();

    const sizes = ['XS', 'S', 'M', 'L', 'XL'];
    const colors = [
        { name: 'Blue', value: '#3b82f6' },
        { name: 'Red', value: '#ef4444' },
        { name: 'Green', value: '#10b981' },
        { name: 'Yellow', value: '#f59e0b' }
    ];

    const card = CardsData.find((item) => Number(item.id) === Number(params?.id));

    const handleAddToCart = () => {
        if (!card) return;
        dispatch(addToCart({ id: card.id }));
    };

    if (!card) {
        return <div>Product not found</div>;
    }

    return (
        <div className="max-w-[400px] w-full max-h-[600px] h-full mx-auto p-6 bg-white rounded-lg">
            {/* Product Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Havic HV G-92 Gamepad</h1>

            {/* Star */}
            <StarRating />

            {/* Price */}
            <div className="flex items-center gap-2 mb-6">
                <p className="text-2xl font-semibold text-gray-800">$192.00</p>
                <CheckCircleOutline className="text-green-500" fontSize="small" />
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-8">
                PlayStation 5 Controller Skin High quality vinyl with air channel adhesive
                for easy bubble free install & mess free removal pressure sensitive.
            </p>

            <div className="space-y-8">
                {/* Colors Section */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Colours:</h2>
                    <div className="flex space-x-3">
                        {colors.map((color) => (
                            <button
                                key={color.name}
                                className="w-8 h-8 rounded-full border-2 border-gray-200 hover:border-gray-400 transition-all"
                                style={{ backgroundColor: color.value }}
                                aria-label={color.name}
                            />
                        ))}
                    </div>
                </div>

                {/* Sizes Section */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Size:</h2>
                    <ButtonGroup variant="outlined" aria-label="size selection">
                        {sizes.map((size) => (
                            <Button
                                key={size}
                                sx={{
                                    '&:hover': { backgroundColor: '#f3f4f6' },
                                    minWidth: '40px'
                                }}
                            >
                                {size}
                            </Button>
                        ))}
                    </ButtonGroup>
                </div>

                {/* Delivery Info */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <LocalShipping className="text-gray-600 mt-0.5" fontSize="large" />
                        <div>
                            <h3 className="font-medium text-gray-900">Free Delivery</h3>
                            <p className="text-gray-600">Enter your postal code for Delivery Availability</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <AssignmentReturn className="text-gray-600 mt-0.5" fontSize="large" />
                        <div>
                            <h3 className="font-medium text-gray-900">Return Delivery</h3>
                            <p className="text-gray-600">Free 30 Days Delivery Returns. Details</p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ py: 1.5 }}
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        sx={{ py: 1.5 }}
                    >
                        Wishlist
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default GamepadProduct;