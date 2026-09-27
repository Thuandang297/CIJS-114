import { useMemo, useState } from 'react';

const UseMemo = () => {
    const [count, setCount] = useState(0);
    console.log("🚀 ~ UseMemo ~ count Global:", count)
    const [inputValue, setInputValue] = useState('');
    console.log("🚀 ~ UseMemo ~ inputValue Global:", inputValue)

    const expensiveCalculation = (num) => {
        console.log('Calculating...');
        // Giả sử đây là một tính toán đắt đỏ
        for (let i = 0; i < 1000000000; i++) {
            num += 1;
        }
        console.log("🚀 ~ expensiveCalculation ~ num:", num)
        return num;
    };

    // const memoizedValue =  expensiveCalculation(count);

    const memoizedValue = useMemo(() => expensiveCalculation(count), []);


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px' }}>
            <h1>useMemo Example</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <p>Computed Value: {memoizedValue}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    );
};

export default UseMemo;