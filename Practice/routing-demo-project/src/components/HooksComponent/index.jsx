import { useRef, useState } from 'react';

const HookComponent = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    console.log('Count Ref Global:', countRef.current);
    console.log('Count Global:', count);
    const incrementCount = () => {
        setCount(count + 1);
        countRef.current += 1;
        console.log('Count:', count);
        // để truy cập giá trị của ref, cần thông qua thuộc tính current
        // do bản chất giá trị của ref là một object
        console.log('Count Ref:', countRef.current);
    };
    const increRef = () => {
        countRef.current += 1;
        // để truy cập giá trị của ref, cần thông qua thuộc tính current
        // do bản chất giá trị của ref là một object
        console.log('Count Ref:', countRef.current);
    }
    return (
        <div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column', gap:'20px' }}>
                <p>Count: {count}</p>
                <p>`Count reference: ${countRef.current}`</p>
                <button onClick={incrementCount}>Increment</button>
                <button onClick={increRef}>Incre ref</button>
            </div>

        </div>
    );
};

export default HookComponent;