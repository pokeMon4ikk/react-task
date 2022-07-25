import React from 'react';
import avatar from "../img/avatar.png"

class Profile extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <img src={avatar} alt="avatar"></img>
                </div>
                <div>
                    <p>Name: "default User"</p>
                </div>
                <div>
                    <p>Your active order</p>
                    <div>

                    </div>
                </div>
                <div>
                    <p>History of your orders</p>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Profile