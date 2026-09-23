import { Col } from 'antd';
import { Outlet, useNavigate } from 'react-router';

const mockPosts = [
    {
        id: 1,
        time: '2023-12-20T10:00:00',
        countSeen: 50,
        countLike: 35,
        countComment: 10,
        subject: 'Learn Code At MindX'
    },
    {
        id: 2,
        time: '2023-12-19T14:30:00',
        countSeen: 120,
        countLike: 80,
        countComment: 20,
        subject: 'Top 10 JavaScript Tips for Beginners'
    },
    {
        id: 3,
        time: '2023-12-18T09:45:00',
        countSeen: 75,
        countLike: 60,
        countComment: 15,
        subject: 'Understanding React Lifecycle Methods'
    },
    {
        id: 4,
        time: '2023-12-17T18:15:00',
        countSeen: 200,
        countLike: 150,
        countComment: 50,
        subject: 'Why Learn JavaScript?'
    },
    {
        id: 5,
        time: '2023-12-16T12:00:00',
        countSeen: 90,
        countLike: 65,
        countComment: 25,
        subject: 'How to Start a Career in Data Science'
    }
];

export const Post = ({ time, subject, countSeen, countLike, countComment }) => {
    const navigate = useNavigate()
    return (
        <Col className='w-[300px]'>
            <div className="p-[12px] h-full">
                <div className="cursor-pointer bg-white h-full shadow rounded-lg overflow-hidden">
                    <img src="https://loremflickr.com/320/240?random=1" className="object-cover h-52 w-full" alt="" />
                    <div className="p-6">
                        <span className="block text-slate-400 font-semibold text-sm">{new Date(time).toLocaleDateString()}</span>
                        <h3 className=" mt-3 font-bold textLg pb-4 border-b border-slate-300">
                            {subject}
                        </h3>
                        <button onClick={()=>{
                        navigate('1')
                        }}>Click Detail</button>
                        <div className="flex mt-4 gap-4 items-center">
                            <span className="flex gap-1 items-center text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                {countSeen}
                            </span>
                            <span className="flex gap-1 items-center text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-sky-400 w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                                {countLike}
                            </span>
                            <span className="flex gap-1 items-center text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 textLime-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg>
                                {countComment}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}

const ListPost = () => {
    return (
        <div className='flex flex-wrap justify-between'>
            {mockPosts.map((post) => {
                return <Post key={post.id} {...post} />
            })}
            <Outlet/>
        </div>
    )
}
export default ListPost;