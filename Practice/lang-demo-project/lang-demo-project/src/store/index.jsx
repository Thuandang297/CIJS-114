import { createContext, useState } from 'react';

// khởi tạo Store
export const Store = createContext();

// cài đặt phạm vi của Store
const StoreBoundary = (props) => {
    console.log("🚀 ~ StoreBoundary ~ props:", props)
    const [lang, setLang] = useState('EN');
    const handleChangeLang = (lang = 'EN') => {
        setLang(lang);
    };
    const contextValue = {
        lang: {
            value: lang,
            handle: handleChangeLang
        }
    };
    return <Store.Provider
        value={contextValue}
    >
        {props?.children}
    </Store.Provider>
}

export default StoreBoundary;