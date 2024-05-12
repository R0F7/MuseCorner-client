import toast from 'react-hot-toast';
import NewsLetterImg from '../assets/newsletter_images-removebg-preview (1).png';
import { useState } from 'react';

const NewsLetter = () => {
    const [emailValue, setEmailValue] = useState(null);

    const handleNewsletter = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        
        if (emailValue === null) {
            setEmailValue(email)
            return toast.success('Thank you for subscribing to our newsletter')
        }else{
            return toast.error('Already subscribe')
        }
    }
    
    return (
        <div className="py-20 flex items-center ">
            <div className=''>
                <h4 className="text-3xl font-bold text-[#14456A] ">Subscribe to our newsletter</h4>
                <p className="text-[#79848F] w-[80%] mt-1.5 mb-8">Never miss a beat! Sign up for our newsletter to receive the latest blog updates, exclusive content, and insider insights delivered directly to your inbox. Stay informed and inspired – subscribe now!</p>
                <form onSubmit={handleNewsletter}>
                    <input type="email" name="email" id="" className="rounded-l-sm py-[10px] w-[300px] border-2" placeholder="Email@" required/>
                    <input className="bg-[#14456A] text-white h-12 px-6 font-bold" type="submit" value="SUBSCRIBE" />
                </form>
                <p className="text-[#6D7D92] mt-1.5">You can unsubscribe at any time.</p>
            </div>
            <div className='w-1/2'>
                <img className='w-[80%] h-full' src={NewsLetterImg} alt="" />
            </div>
        </div>
    );
};

export default NewsLetter;

// "use client";

// import { Toast } from "flowbite-react";
// import { HiFire } from "react-icons/hi";

// export function NewsLetter() {
//   return (
//     <Toast>
//       <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
//         <HiFire className="h-5 w-5" />
//       </div>
//       <div className="ml-3 text-sm font-normal">Set yourself free.</div>
//       <Toast.Toggle />
//     </Toast>
//   );
// }