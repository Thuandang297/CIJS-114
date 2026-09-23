import { useEffect, useState } from 'react'
import Column from '../components/Column'
import SearchBox from '../components/SearchBox'
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';
import { useSearchParams } from 'react-router';
function DashBoard() {

    const [tasks, setTasks] = useState([])
    const [filterTasks, setFilterTasks] = useState([])
    const [tasksStatus, setTasksStatus] = useState([])

    const [isLoading, setLoading] = useState(false)

    const [searchParams,] = useSearchParams()
    const keySearch = searchParams.get('search')
    const filteredTask = (tasks ?? []).filter(e => e.title.includes(keySearch) || e.description.includes(keySearch))

    const fetchTask = async () => {
        setLoading(true)
        try {
            const response = await fetch('https://mindx-mockup-server.vercel.app/api/resources/tasks?apiKey=6974d253912a2afb2f310cde')
            const { data } = await response.json()
            setTasks([...data.data])
            setFilterTasks([...data.data])
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    const fetchTaskStatus = async () => {
        setLoading(true)
        try {
            const response = await fetch('https://mindx-mockup-server.vercel.app/api/resources/taskStatus?apiKey=6974d253912a2afb2f310cde')
            const { data } = await response.json()
            setTasksStatus([...data.data])
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const initial = async () => {
            await Promise.all([fetchTask(), fetchTaskStatus()])
        }
        initial()
    }, [])
    if (isLoading) {
        return (<Flex style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }} justify='center' align="center" gap="medium">
            <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        </Flex>)
    }
    return (
        <>
            {/* Board */}
            <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
                {/* SearchBox */}
                <SearchBox />

                {/* Columns */}
                <div className="classColumn" style={{
                    width: '100%',
                    maxWidth: '100%',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'row',
                    columnGap: '16px',
                    boxSizing: 'border-box',
                    flex: 1,
                    overflowX: 'auto',
                    whiteSpace: 'nowrap'
                }} >
                    {tasksStatus.map((column, index) =>
                        <Column key={index} tasks={filteredTask} statusId={column.statusId} totalTasks={filterTasks.filter(task => task.statusId === column.statusId).length} statusName={column.name} />
                    )}
                </div>
            </div>

        </>
    )
}

export default DashBoard
