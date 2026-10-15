import React from 'react'
import Card from "../components/card"
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import image6 from "../assets/image6.png"
import image7 from "../assets/image7.png"

function Customize() {
    return (
        <div className='w-full h-screen bg-gradient-to-t from-[black] to-[#630389] flex items-center flex-col overflow-y-auto py-8'>
            <div className='grid grid-cols-3 gap-[20px] justify-items-center my-auto'>
                <Card image={image1} />
                <Card image={image2} />
                <Card image={image3} />
                <Card image={image4} />
                <Card image={image5} />
                <Card image={image6} />
                <div className='col-span-3 flex justify-center'>
                    <Card image={image7} />
                </div>
            </div>

        </div>
    )
}

export default Customize  