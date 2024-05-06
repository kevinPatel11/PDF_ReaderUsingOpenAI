'use client'
import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

function SideBar() {
    const {data: session} = useSession();
    const router = useRouter();
    const redirectToNewChat = ()=>{
        router.push(`chatWindow`)
    };
    const redirectToHome = ()=>{
        router.push(`infoPage`)
    };
    const redirectToUploadPdf = ()=>{
        router.push(`uploadPDF`)
    };
    const handleSignOut = () => {
        // Clear the session storage for file upload
        sessionStorage.removeItem('uploadedFile');
        signOut();
    };
    return (
        <div className='p-2 flex flex-col  h-screen'>
            <div className="flex-1">
                <div onClick={redirectToHome}>

                    <a href="#" className="flex items-center rounded-lg dark:text-purple-400  cursor-pointer  transition-all duration-200 ease-out group">
                        <span className="ms-4 font-bold text-2xl">SkillSync</span>
                        <img src="/images/icon_skill.png" alt="SkillSync Logo" className="h-16 w-16 mr-4" />
                    </a>
                </div>
                {/* Chat with PDF */}
                <div onClick={redirectToNewChat}>

                    <a href="#" className="flex items-center p-2 mt-10 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                            <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                            <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Chat with PDF</span>
                        {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                    </a>
                </div>
                {/* Upload Pdf to chat  */}
                <div onClick={redirectToUploadPdf}>
                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                        </svg>
                        
                        <span className="flex-1 ms-3 whitespace-nowrap">Upload PDF</span>
                    </a>
                </div>
                
            
            
            
            </div>

            <div>
        <a href="https://www.buymeacoffee.com/inteliPDFHub" target="_blank">
          <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" className="buyMeCoffee mx-auto" /></a>     
        
         </div>

            {session && (
                <div className="flex items-center mx-auto">
                    <b className='text-white'>{session.user?.name}</b>
                {/* <img src={session.user?.image!} alt='' className='h-11 w-11 rounded-md hover:opacity-95'/> */}
                    <div onClick={handleSignOut} className="flex items-center justify-center h-11 w-11 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-6 h-6 hover:opacity-50">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                        </svg>
                    </div>
                </div>
            
            )}
        </div>
    )
}

export default SideBar
