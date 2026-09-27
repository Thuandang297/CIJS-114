import { useCallback, useEffect, useState } from "react";

export default function UseCallback() {
    const [user, setUser] = useState(null);

    const fetchData = useCallback(() => {
        fetch("https://randomuser.me/api/")
            .then((res) => res.json())
            .then((resJson) => {
                setUser(resJson.results[0]);
            });
    }, []);

    // const fetchData = () => {
    //     fetch("https://randomuser.me/api/")
    //         .then((res) => res.json())
    //         .then((resJson) => {
    //             setUser(resJson.results[0]);
    //         });
    // };

    // lúc này ta truyền deps là fetchData, khi component re-render, fetchData vẫn giữ tham thiếu cũ của nó, cho nên useEffect vẫn chỉ chạy 1 lần duy nhất sau khi render
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px' }}>
            <button onClick={fetchData}>Refresh</button>
            <button onClick={()=>{setUser(null)}}>NUll</button>
            {user ? (
                <div>
                    <img src={user.picture.medium} alt="" />
                    <p>
                        {user.name.first} {user.name.last}
                    </p>
                </div>
            ) : null}
        </div>
    );
}