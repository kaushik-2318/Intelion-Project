'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Banner() {
    const [url, setUrl] = useState('')

    useEffect(() => {
        const handleFetch = async () => {
            const resp = await fetch('https://pget.vercel.app/')
            const data = await resp.json()
            setUrl(data)
        }
        handleFetch()
    }, [])

    return (
        <div className="text-white bg-red-500 w-full py-2 text-center z-[50]">
            This is Demo website make by <Link target='_blank' className='underline cursor-pointer duration-300 hover:text-blue-500' href={url}>Kaushik Verma</Link>
        </div>
    )
}
