import React, { useEffect } from "react"


const Profile = React.memo((props) => {
    
    useEffect(() => {
        props.stopLoader()
    },[props.stopLoader])
    
    return (
        <div className="">
            Profile
        </div>
    )
})

export default Profile