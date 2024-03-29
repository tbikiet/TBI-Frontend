import React from 'react'
import CountUp from 'react-countup'

function EachStatsCard({ end, content, bg, text }) {
    return (

        <div className="sm:w-1/4 w-full">
            <div className={`${bg} ${text} px-4 py-6`}>
                <div className='font-medium text-3xl mb-5'>
                    <CountUp start={0} end={end} duration={5} suffix='+' />
                </div>
                <p className="leading-relaxed">{content}</p>
            </div>
        </div>
    )
}

export default EachStatsCard
