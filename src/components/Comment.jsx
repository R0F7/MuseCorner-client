/* eslint-disable react/prop-types */
import { PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Comment = ({ com }) => {
    const { comment, user_name, user_image } = com;
    return (
        <div className="">
            <div className="w-full max-w-md pl-3 md:px-4 py-4 mt-9 md:mt-10 bg-whit bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex -mt-10 justify-end">
                    <PhotoView src={user_image}>
                        <img className="object-cover w-10 h-10 md:w-12 md:h-12 border-x-2 border-t-2 border-[#14456A] rounded-full bg-white dark:border-blue-400" alt="Comment avatar" src={user_image} />
                    </PhotoView>
                </div>
                <h2 className="mt- md:text-lg font-semibold text-gray-800 dark:text-white md:mt-0">{user_name}</h2>
                <p className="mt- text-sm text-gray-600 dark:text-gray-200">{comment}</p>
            </div>
        </div>
    );
};

export default Comment;