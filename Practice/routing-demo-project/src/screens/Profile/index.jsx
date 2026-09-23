import { Tabs } from 'antd';
import { Link, Outlet, useNavigate, useParams, useSearchParams } from 'react-router';
import CardUserOverview from '../../components/CardUserOverview';
const Profile = () => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();
    const params = useParams()
    console.log("🚀 ~ Profile ~ params:", params)
    console.log("🚀 ~ Profile ~ searchParams:", searchParams.get('name'))
    console.log(searchParams.get('age'));
    
    const tabItems = [
        {
            key: 'POSTS',
            label: 'My posts'
        },
        {
            key: 'PROFILE',
            label: 'My Profile'
        }
    ];
    return (
        <div className='profilePage m-auto p-[18px] max-w-[90vw] min-h-[50vh] flex gap-[18px]'>
            <div className='flex-[0.25]  p-[18px] bg-white'>
                <CardUserOverview />
            </div>
            <div className='flex-[0.75] bg-white  p-[18px]'>
                <Tabs
                    items={tabItems}
                    onChange={(key) => {
                        if (key === 'PROFILE') {
                            navigate('information')
                            return
                        }
                        navigate('my-posts')
                    }}
                />
                <Link to={'/login'}>
                    <button>Logout</button>
                </Link>
                <Outlet />
            </div>
        </div>
    )
}

export default Profile;