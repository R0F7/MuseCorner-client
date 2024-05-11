import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
    const blog = useLoaderData();
    const { _id, title, image, short_description, long_description, category, createdAt } = blog;

    return (
        <div>
            <div>
                <div className="relative">
                    <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={image} alt=""/>

                        <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                            <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>

                                <div className="mx-4">
                                    <h1 className="text-sm text-gray-700 dark:text-gray-200">arthur melo</h1>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Creative Director</p>
                                </div>
                        </div>
                </div>

                <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                    All the features you want to know
                </h1>

                <hr className="w-32 my-6 text-blue-500"/>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores
                        praesentium, alias nam? Tempore
                    </p>

                    <a href="#" className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">Read more</a>
            </div>
        </div>
    );
};

export default BlogDetails;