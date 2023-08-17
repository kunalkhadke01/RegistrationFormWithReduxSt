import { useEffect, useState } from 'react';
import './profile.css'
import { useSelector,useDispatch } from 'react-redux';
import { Map, GoogleApiWrapper } from 'google-maps-react';



const Profile = (props) => {
    const user = useSelector(state => state)
    const [userState,setuserState]= useState(user.currentUser.user)

    console.log(user)
console.log(props)
    return(<div>
                <div class="navbar-top">
        <ul>
            <li>
            <img src={userState.profilepicture} alt="" />
 

<span class="name">
{userState.name}
</span>
            </li>
        </ul>

    </div>
        <div className="maint">
        <div class="profile">
            <img
             src={userState.profilepicture}
              alt=""/>

            <div class="name">
            {userState.name}
            </div>
        <div className="card">
            <div className="card-body">
                <i className="fa fa-pen fa-xs edit"></i>
                <table>
                    <tbody>
                        <tr>
                            <td>UserName</td>
                            <td>:</td>
                            <td><b>{userState.username}</b></td>
                        </tr>
                        <tr>
                            <td>e-mail</td>
                            <td>:</td>
                            <td>{userState.email}</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>:</td>
                            <td>{userState.phone}</td>
                        </tr>
                        <tr>
                            <td>Website</td>
                            <td>:</td>
                            <td>{userState.website}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="name">
                Company
            </div>
                <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td><b>{userState.company.name}</b></td>
                        </tr>
                        <tr>
                            <td>catchPhrase</td>
                            <td>:</td>
                            <td>{userState.company.catchPhrase}</td>
                        </tr>
                        <tr>
                            <td>ds</td>
                            <td>:</td>
                            <td>{userState.company.bs}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        </div>

        <div className="card">
            <div className="card-body">
            <table>
                    <tbody>
                        <tr>
                            <td>street</td>
                            <td>:</td>
                            <td>{userState.address.street}</td>
                        </tr>
                        <tr>
                            <td>Suite</td>
                            <td>:</td>
                            <td>{userState.address.suite}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>:</td>
                            <td>{userState.address.city}</td>
                        </tr>
                        <tr>
                        <Map
        google={props.google}
        zoom={14}
        style={{width:"50%"}}
        initialCenter={
          {
            lat: user.currentUser.user.address.geo.lat,
            lng: user.currentUser.user.address.geo.lng
          }
        }
      />
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    </div>   
    </div>
     )
}

export default  GoogleApiWrapper({
    apiKey: 'aakka-llak0-alld9'
  })(Profile);