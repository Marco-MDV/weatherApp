import React, { useState, useEffect } from 'react';

export default function CityPanel({ cityName, summary }) {
    const [dataWrite, setDataWrite] = useState({emojiCity:'',newName:''});
    const hour = new Date().getHours();

    useEffect(() => {
        correctSyntaxName();
    
        if (hour >= 5 && hour <= 18) {
            setDataWrite(prevState => ({ ...prevState, emojiCity: '&#127751;' }));
        } else if (hour >= 19 && hour <= 21) {
            setDataWrite(prevState => ({ ...prevState, emojiCity: '&#127750;' }));
        } else {
            setDataWrite(prevState => ({ ...prevState, emojiCity: '&#127747;' }));
        }
    }, []);
    
    const correctSyntaxName = () => {
        const updatedName = cityName.split("").map((n, i) => (i === 0 ? n.toUpperCase() : n)).join('');
        setDataWrite(prevState => ({ ...prevState, newName: updatedName }));
    };
    
    return (
        <div className="w-full md:w-96 border-2 rounded-lg backdrop-blur-sm gap-2 p-1 hover:backdrop-blur-xl text-sky-600 hover:text-white">
            <div className='flex justify-center items-center font-bold text-2xl'>
                <h2 className=''>
                    {dataWrite.newName}
                </h2>
                <p dangerouslySetInnerHTML={{ __html: dataWrite.emojiCity }} className="text-3xl" />
            </div>
            <h3 className="text-center font-semibold text-lg">Summary: {summary}</h3>
        </div>
    );
}
