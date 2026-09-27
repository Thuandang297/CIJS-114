import { memo, useState } from 'react';



const List = ({ items }) => {
    return (
        <ul>
            {(Array.isArray(items) ? items: []).map(item => (
                <ListItem key={item.id} item={item} />
            ))}
        </ul>
    );
};
// Component ListItem được ghi nhớ
const ListItem = memo(({ item }) => {
    console.log("🚀 ~ item:", item)
    return <li>{item.text}</li>;
});

const Memo = () => {
    const [items, setItems] = useState([
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' }
    ]);

    const updateItem = () => {
        const newItems = [...items];
        newItems[1] = {
            ...newItems[1],
            text: 'Updated text item 2',
        };
        setItems(newItems);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px' }}>
            <List items={items ?? []} />
            <button onClick={updateItem}>Update Item 2</button>
        </div>
    );
};

export default Memo;