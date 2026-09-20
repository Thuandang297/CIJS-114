import { Select, Tooltip } from 'antd';
import { useContext } from 'react';
import ReactCountryFlag from "react-country-flag";
import { Store } from "../../store";
import translate from '../../store/dicts.js';
const Lang = () => {
    const langItems = [
        {
            value: 'EN',
            label: <div className='flex gap-[8px] items-center'><ReactCountryFlag countryCode='US' /><span>US. English</span></div>
        },
        {
            value: 'VI',
            label: <div className='flex gap-[8px] items-center'><ReactCountryFlag countryCode='VN' /><span>VN. Vietnamese</span></div>
        },

    ]
    const store = useContext(Store)
    console.log("🚀 ~ Lang ~ store.lang.value:", store.lang.value)
    console.log(translate);
    const title = translate[store.lang.value]['A1']

    console.log("🚀 ~ Lang ~ translate[store.lang.value]['A1']:", translate[store.lang.value]['A1'])
    return (
        <div className='changeLanguage float-right'>
            <Tooltip title={title}>
                <Select
                    defaultValue={store.lang.value}
                    value={store.lang.value}
                    onChange={(value) => {
                        store.lang.handle(value);
                    }}
                    options={langItems}
                />
            </Tooltip>
        </div>
    )
}

export default Lang;