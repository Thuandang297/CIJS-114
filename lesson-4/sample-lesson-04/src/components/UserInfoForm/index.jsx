import { useState } from "react"

const UserInfoForm = (props) => {
    const { onClickSubmit } = props

    //Khởi tạo state lưu giá trị của name và email

    const [userName, setUserName] = useState()
    const [userEmail, setUserEmail] = useState()

    //Khai báo hàm lắng nghe thay đổi dữ liệu của name và email
    const handleChangeEmail = (e) => {
        const value = e.target.value
        setUserEmail(value)
    }

    const handleChangeUserName = (e) => {
        const value = e.target.value
        setUserName(value)
    }

    const handleClickSubmit = () => {
        console.log('Click submit');
        onClickSubmit(userName, userEmail)
    }
    return (
        <>
            <div style={{
                display: 'flex', flexDirection: 'column', rowGap: '10px', justifySelf: 'center'
            }} className="parent">
                <div style={{ display: 'flex', gap: '10px' }} className="name-input">
                    <p>Name</p>
                    <input onChange={handleChangeUserName} value={userName} type="text" name="user-name" id="" />
                </div>

                <div style={{ display: 'flex', gap: '10px' }} className="email-input">
                    <p>Email</p>
                    <input onChange={handleChangeEmail} value={userEmail} type="text" name="user-email" id="" />
                </div>

                <button onClick={handleClickSubmit} style={{ width: 'fit-content' }}>Submit</button>
            </div>
        </>
    )

}

export default UserInfoForm