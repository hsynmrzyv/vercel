import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog._id}`}>
      <div className="flex flex-col justify-between items-start">
        {/* Image */}
        <div className="relative w-full">
          <Image
            alt="cover image"
            src={`https://pf201blog-api.onrender.com/${blog.coverImage}`}
            className="w-full rounded-2xl block align-middle object-cover aspect-[3/2]"
            width={100}
            height={200}
            quality={100}
            unoptimized={true}
          />
        </div>
        <div>
          <div>
            <p className="text-gray-500 text-xs mt-8">Mar 16, 2020</p>
            <div>
              <h3 className="text-gray-900 font-semibold leading-6 text-xl mt-3">
                {blog.title}
              </h3>
              <p className="text-gray-600 leading-6 text-sm mt-5">
                {blog.content}
              </p>
            </div>
            <div className="flex items-center gap-x-4 mt-8">
              <div>
                <Image
                  src={`https://pf201blog-api.onrender.com/${blog.author.profilePic}`}
                  alt="blog author"
                  className="rounded-full block align-middle object-cover h-10 w-10"
                  width={40}
                  height={40}
                />
              </div>
              <div className="text-sm leading-6">
                <p className="text-gray-900 font-semibold">
                  {blog.author.fullName}
                </p>
                <p className="text-gray-600">{blog.author.userName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
