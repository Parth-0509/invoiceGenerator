"use client"
import React, { useState } from 'react';
import { CldUploadButton, CldImage } from 'next-cloudinary';

export default function Page() {
    const [imageUrl, setImageUrl] = useState("");

    return (
        <div className='flex items-center justify-center h-screen flex-col'>
            <h2 className='mb-12'>Uploading Image using Cloudinary</h2>

            <CldUploadButton
                onSuccess={(data) => {
                    console.log(data)
                    setImageUrl(data.info.secure_url)
                }} className='bg-violet-600 text-slate-50'
            />

            {imageUrl && (
                <CldImage
                    width="960"
                    height="600"
                    src={imageUrl}
                    sizes="100vw"
                    alt="Uploaded image"
                />
            )}
        </div>
    );
}
