/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const WishlistCard = ({ blog, handleRemove }) => {
    // console.log(blog);
    const { _id, title, image, short_description, category } = blog;



    return (
        <div>
            <div className="flex flex-col items-center justify-center w-full  mx-auto">
                <div className="w-full h-64 shadow-md rounded-b-lg">
                    <PhotoView src={image}>
                        <img className="h-full w-full rounded-b-lg" src={image} alt="" />
                    </PhotoView>
                </div>

                <div className="-mt-10 overflow-hidden bg-white rounded-lg shadow-lg w-[95%] dark:bg-gray-800">
                    <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{title}</h3>

                    <div className="px-3 pt-2 pb-3.5 rounded-t-2xl bg-gray-100 dark:bg-gray-700 border-t">
                        <div className="h-[100px]">
                            <span className="font-bold text-gray-800 dark:text-gray-200">{category}</span>
                            <p>{short_description}</p>
                        </div>
                        <div className="space-x-3">
                            <Link to={`/details/${_id}`} className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">details</Link>
                            <button onClick={() => handleRemove(_id)} className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistCard;