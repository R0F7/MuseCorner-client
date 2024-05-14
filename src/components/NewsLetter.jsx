import toast from 'react-hot-toast';
import NewsLetterImg from '../../public/image/subscribe-removebg-preview.png';
import { useState } from 'react';
import { motion } from "framer-motion"


const NewsLetter = () => {
    const [emailValue, setEmailValue] = useState(null);

    const handleNewsletter = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;

        if (emailValue === null) {
            setEmailValue(email)
            return toast.success('Thank you for subscribing to our newsletter')
        } else {
            return toast.error('Already subscribe')
        }
    }

    return (
        <div className="py-10 lg:py-20 flex flex-col-reverse lg:flex-row items-center lg:my-10 gap-12 lg:gap-0">
            <div className=''>
                <h4 className="text-2xl md:text-3xl font-bold text-[#14456A] ">Subscribe to our newsletter</h4>
                <p className="text-[#79848F] md:w-[80%] mt-1.5 mb-8">Never miss a beat! Sign up for our newsletter to receive the latest blog updates, exclusive content, and insider insights delivered directly to your inbox. Stay informed and inspired – subscribe now!</p>
                <form onSubmit={handleNewsletter}>
                    <input type="email" name="email" id="" className="rounded-l-sm py-[10px] w-[240px] md:w-[300px] border-2 focus:ring-[#14456A] focus:border-0 focus:outline-none focus:ring focus:ring-opacity-70" placeholder="Email@" required />
                    <input className="bg-[#14456A] text-white text-sm md:text-base h-12 px-4 md:px-6 font-bold" type="submit" value="SUBSCRIBE" />
                </form>
                <p className="text-[#6D7D92] mt-1.5">You can unsubscribe at any time.</p>
            </div>
            {/* <div className='w-1/2'>
                <img className='w-[80%] h-full' src={NewsLetterImg} alt="" />
            </div> */}
            <div className='w-1/2 flex justify-center'>
                <div className='relative h-20 w-20 lg:h-[180px] lg:w-[180px]'>
                    <motion.div animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                    }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1
                        }}
                        className='h-full w-full'
                        style={{ backgroundImage: `url('${NewsLetterImg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    />
                </div>
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
