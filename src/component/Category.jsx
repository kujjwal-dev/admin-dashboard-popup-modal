import React from 'react'
import CategoryList from './CategoryList';
import SecondList from './SecondList';
import ThirdList from './Thirdlist';
import FourthList from './FourthList';


function Category() {
  return (

    <> 
    
    {/*<h1 className='text-5xl font-bold text-center mt-4'>Category</h1>*/}
       

        <div className='flex flex-row gap-20 mt-20 '> 
        <CategoryList />
        <SecondList />
        <ThirdList />
        <FourthList />
        </div>
        
        </>
    

       
       
        
  )
}

export default Category