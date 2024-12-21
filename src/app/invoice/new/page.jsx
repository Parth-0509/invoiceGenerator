"use client"
import { useReactToPrint } from 'react-to-print';
import React, { useRef, useState } from 'react'
import { AiOutlineCloudUpload, AiOutlinePrinter } from 'react-icons/ai'
import { BsLayoutTextWindowReverse } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'
import FormPreview from '../../components/FormPreview';
import FormTable from '../../components/FormTable'
import { CldUploadButton, CldImage } from 'next-cloudinary';

export default function page() {

    const [logoUrl, setLogoUrl] = useState("");
    const [preview, setPreview] = useState(false);
    const [combinedData, setCombinedData] = useState({})
    const [formData, setFormData] = useState(
        {
            companyName: "",
            invoiceAuthor: "",
            companyAddress: "",
            companyCity: "",
            companyCountry: "",
            clientCompany: "",
            clientAddress: "",
            clientCity: "",
            clientCountry: "",
            invoiceNumber: "",
            invoiceDate: "",
            invoiceDueDate: "",
            notes: "",
            terms: ""
        }
    )
    const [tableData, setTableData] = useState([]);

    function handleChange(e) {

        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value })


    }
    async function handleSubmit(e) {
        e.preventDefault();
        const invoiceData = {
            ...formData,
            logoUrl,
            tableData
        };
        setCombinedData(invoiceData);


        try {
            const response = await fetch("http://localhost:3000/api/invoice", {
                method: "POST",
                headers: {
                    'content-type': "application/json",
                },

                body: JSON.stringify({
                    invoiceData: {
                        ...formData,
                        logoUrl
                    },
                    tableData
                })
            })
            console.log(invoiceData);
            if (response.ok) {
                console.log(response);
            }
        } catch (error) {
            console.log("response isnot okay !s");
        }
        setPreview(!preview);
    }

    function updateTableData(newTableData) {
        setTableData(newTableData);
    }
    const invoiceRef = useRef();
    const handlePrint = useReactToPrint({
        contentRef: () => invoiceRef.current,
    });

    return (
        <div>
            {/* Header */}
            <div className='bg-slate-50'>
                <div className='flex justify-between items-center py-8 md:py-16 px-4 md:px-16'>
                    <div className='flex gap-4'>
                        <button onClick={() => setPreview(!preview)} className=' px-3 py-2 shadow rounded-2 border-2 border-blue-300'>
                            {
                                preview ? (
                                    <div className='flex items-center space-x-2'>
                                        <BsLayoutTextWindowReverse />
                                        <span>Edit Form</span>
                                    </div>
                                ) : (
                                    <div className='flex items-center space-x-2'>
                                        <BsLayoutTextWindowReverse />
                                        <span> Preview</span>
                                    </div>
                                )
                            }
                        </button>
                        <button onClick={handlePrint} className='flex items-center space-x-2 px-3 py-2 shadow rounded-2 border-2 border-blue-300'>
                            <AiOutlinePrinter />
                            Print/Download
                        </button>
                        {/* <button className='flex items-center space-x-2 px-3 py-2 shadow rounded-2 border-2 border-blue-300'>
                            <AiOutlineCloudDownload />
                            Download
                        </button> */}
                    </div>
                    <div className='flex gap-4'>
                        <button className='flex items-center space-x-2 px-3 py-2 shadow rounded-2 border-2 text-semibold text-violet-900 border-violet-500'>
                            <AiOutlineCloudUpload />
                            Save Online
                        </button>
                        <button className='flex items-center space-x-2 px-3 py-2 shadow rounded-2 border-2 text-semibold text-violet-900 border-violet-500'>
                            <CiMail />
                            Send
                        </button>
                    </div>
                </div>

                {/*Invoice form*/}
                {
                    preview ? (
                        <div ref={invoiceRef}> <FormPreview data={combinedData} />
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-auto ">
                            {/*Image and Invoice lavel  */}
                            <div className='flex justify-between items-center '>
                                {/*  Image  */}

                                <div className="flex items-center justify-center ">

                                    {
                                        logoUrl ? (
                                            <CldImage
                                                width="240"
                                                height="240"
                                                src={logoUrl}

                                                alt="Description of my image"
                                            />
                                        ) : (
                                            <CldUploadButton
                                                className=' flex flex-col items-center justify-center w-48 h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 mb-2 text-sm text-gray-500 dark:text-gray-400'
                                                onSuccess={(data) => {
                                                    console.log(data)
                                                    setLogoUrl(data.info.secure_url)
                                                }}
                                            />
                                        )
                                    }
                                </div>


                                <h2 className='text-4xl uppercase font-semibold '>Invoice</h2>
                            </div>
                            {/*  Company Details */}
                            <div className='flex flex-col w-1/2 mt-6'>
                                <input className=' h-6 border-0 mb-2 p-1 placeholder:text-slate-400'
                                    type="text"
                                    placeholder='Your Company'
                                    name='companyName'
                                    onChange={handleChange}
                                    value={formData.companyName}
                                />
                                <input className=' h-6 border-0 mb-2 p-1 placeholder:text-slate-400 '
                                    type="text"
                                    placeholder='Your Name'
                                    name='invoiceAuthor'
                                    onChange={handleChange}
                                    value={formData.invoiceAuthor}
                                />
                                <input className=' h-6 border-0 mb-2 p-1 placeholder:text-slate-400'
                                    type="text"
                                    placeholder='Company Address'
                                    name='companyAddress'
                                    onChange={handleChange}
                                    value={formData.companyAddress}
                                />
                                <input className=' h-6 border-0 mb-2 p-1 placeholder:text-slate-400'
                                    type="text"
                                    placeholder='City , State Zip'
                                    name='companyCity'
                                    onChange={handleChange}
                                    value={formData.companyCity}
                                />
                                <input className=' h-6 border-0 mb-2 p-1 placeholder:text-slate-400'
                                    type="text"
                                    placeholder='Country eg: USA'
                                    name='companyCountry'
                                    onChange={handleChange}
                                    value={formData.companyCountry}
                                />
                            </div>

                            {/*client details*/}
                            <div className='flex justify-between gap-4 '>
                                <div className='flex flex-col w-1/2 mt-6'>
                                    <h2 className='mb-2 font-semibold'>Bill To:</h2>
                                    <input className=' h-6 border-0 mb-2 p-1 placeholder:text-slate-400 '
                                        type="text"
                                        placeholder='Your Clients Company'
                                        name='clientCompany'
                                        onChange={handleChange}
                                        value={formData.clientCompany} />
                                    <input className=' h-6 border-0 mb-2 p-1 placeholder:text-slate-400'
                                        type="text"
                                        placeholder='Clients Address'
                                        name='clientAddress'
                                        onChange={handleChange}
                                        value={formData.clientAddress}
                                    />
                                    <input className=' h-6 border-0 mb-2 p-1 placeholder:text-slate-400'
                                        type="text"
                                        placeholder='City , State Zip'
                                        name='clientCity'
                                        onChange={handleChange}
                                        value={formData.clientCity}
                                    />
                                    <input className=' h-6 border-0 mb-2 p-1 placeholder:text-slate-400'
                                        type="text"
                                        placeholder='Country eg: USA'
                                        name='clientCountry'
                                        onChange={handleChange}
                                        value={formData.clientCountry}
                                    />
                                </div>
                                <div className='flex'>

                                    <div className='flex flex-col  mt-6'>
                                        <div className='flex gap-2'>
                                            <label className='font-semibold text-black-400' htmlFor="invoiceNumber">Invoice # :</label>
                                            <input className=' h-6 border-0 mb-2 p-1 placeholder:text-slate-400 '
                                                type="number" placeholder='invoice number' name='invoiceNumber'
                                                onChange={handleChange}
                                                value={formData.invoiceNumber} />
                                        </div>
                                        <div className='flex gap-2'>
                                            <label className='font-semibold text-black-400' htmlFor="invoiceNumber">Invoice Date :</label>
                                            <input className=' h-6 border-0 mb-2 p-1 placeholder:text-slate-400 '
                                                type="date" placeholder='invoice date'
                                                name='invoiceDate'
                                                onChange={handleChange}
                                                value={formData.invoiceDate}
                                            />
                                        </div>
                                        <div className='flex gap-2'>
                                            <label className='font-semibold text-black-400' htmlFor="invoiceNumber">Invoice Due Date :</label>
                                            <input className=' h-6 border-0 mb-2 p-1 placeholder:text-slate-400 '
                                                type="date" placeholder='invoice due date'
                                                name='invoiceDueDate'
                                                onChange={handleChange}
                                                value={formData.invoiceDueDate}
                                            />
                                        </div>

                                    </div>
                                </div>

                            </div>
                            {/* Table */}
                            <FormTable updateTableData={updateTableData} />

                            <div className='flex flex-col w-full my-6 h-25'>

                                <label htmlFor="message"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Notes
                                </label>
                                <textarea id="notes" rows="2" name='notes' onChange={handleChange} value={formData.notes} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50
                                 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500
                                  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Write your thoughts here..."></textarea>

                            </div>

                            <div className='flex flex-col w-full my-6 h-25'>
                                <label htmlFor="message"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Terms & Conditions
                                </label>
                                <textarea id="terms" rows="2" name='terms' onChange={handleChange} value={formData.terms}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50
                                  rounded-lg border border-gray-300 focus:ring-blue-500
                                   focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
                                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                                     dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                            </div>


                            <button className='bg-violet-600 px-6 py-3 rounded text-slate-50 mt-8' type='submit'>Create Invoice</button>

                        </form>
                    )
                }
                {/*Invoice Preview*/}

            </div>
        </div>
    )
}
