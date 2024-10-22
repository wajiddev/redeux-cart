import React from "react";
import { Data } from "./Data";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem } from '../redux/Slices/Cartslice'; 


const Home = () => {

    const dispatch = useDispatch();
    const products = Data();
    const items = useSelector(state => state);
    const total = items.cart.reduce((a, b) => a + b.price, 0);

    return (

        <>
            <div className="bg-gray-100 p-4">
                <h5 className='text-center text-gray-800 text-2xl mb-2'>Total: ${total}</h5>
                <h1 className='text-center text-gray-800 text-3xl'>Added: {items.cart.length}</h1>
            </div>

            <div className='bg-gray-300 flex justify-around flex-wrap gap-6 p-4'>
                {Array.isArray(products) && products.map((item, index) => (
                    <div key={index} className='min-w-[300px] h-[300px] flex gap-2 items-center justify-around flex-col bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105'>
                        <span className='font-bold text-lg text-gray-800'>{item.title}</span>
                        <span className='text-gray-600 text-xl'>${item.price}</span>
                        <span className='text-red-500 text-lg'>Discounted Total: ${item.discountedTotal}</span>

                        <button
                            onClick={e => dispatch(addItem({ title: item.title, price: item.price }))}
                            className='p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Home;



