/* eslint-disable react/prop-types */

const Comment = ({ com }) => {
    const { comment, user_name, user_image } = com;
    return (
        <div className="">
            <div className="w-full max-w-md px-8 py-4 mt-10 bg-whit bg-red-400 rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex justify-center -mt-10 md:justify-end">
                    <img className="object-cover w-14 h-14 border-2 border-blue-500 rounded-full bg-white dark:border-blue-400" alt="Testimonial avatar" src={user_image} />
                </div>
                <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">{user_name}</h2>
                <p className="mt- text-sm text-gray-600 dark:text-gray-200">{comment}</p>
            </div>
        </div>
    );
};

export default Comment;