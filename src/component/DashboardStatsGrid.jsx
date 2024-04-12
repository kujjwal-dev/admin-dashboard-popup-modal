import React from 'react'
import { IoBagHandle } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { IoPieChart } from "react-icons/io5";

export default function () {
  return (
    <div className='flex gap-4 w-full'>
        <BoxWrapper>
            <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
            <IoBagHandle className='text-2xl text-white' />
            </div>
            <div className='pl-4'>
                <span className='text-sm text-gray-500 font-light'>Total Sales</span>
                <div className='flex items-center'>
                    <strong className='text-xl text-gray-700 font-semibold'>$4765.23</strong>
                    <span className='text-sm text-green-500 pl-2'>+12</span>
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-orange-500'>
            <IoPieChart className='text-2xl text-white' />
            </div>
            <div className='pl-4'>
                <span className='text-sm text-gray-500 font-light'>Total Expenses</span>
                <div className='flex items-center'>
                    <strong className='text-xl text-gray-700 font-semibold'>$2400.2</strong>
                    <span className='text-sm text-green-500 pl-2'>+23</span>
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500'>
        <MdPeopleAlt  className='text-2xl text-white' />
            </div>
            <div className='pl-4'>
                <span className='text-sm text-gray-500 font-light'>Total Customers</span>
                <div className='flex items-center'>
                    <strong className='text-xl text-gray-700 font-semibold'>275</strong>
                    <span className='text-sm text-green-500 pl-2'>+18</span>
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-500'>
        <FaShoppingCart  className='text-2xl text-white' />
            </div>
            <div className='pl-4'>
                <span className='text-sm text-gray-500 font-light'>Total Orders</span>
                <div className='flex items-center'>
                    <strong className='text-xl text-gray-700 font-semibold'>86</strong>
                    <span className='text-sm text-green-500 pl-2'>+30</span>
                </div>
            </div>
        </BoxWrapper>
    </div>
  )
}


function BoxWrapper({children}){
    return <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>{children}</div> 
}