import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { getUserData } from '../Redux/action';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './listOfEmp.css';

const ListOfEmploye = () => {
    const [userData, setUserData] = useState([])
    const videoRef = useRef(null)
    const pictureRef = useRef(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getVideo = () => {
        let videos = videoRef.current
        let mediaDevices = navigator.mediaDevices;
        mediaDevices
            .getUserMedia({
                video: true
            })
            .then((stream) => {

                // Changing the source of video to current stream.
                videos.srcObject = stream;
                videos.play();
            })
            .catch(alert)
    }
    useEffect(() => {
        // axios.get('https://panorbit.in/api/users.json')
        // .then(r=> r)
        // .then(res=> setUserData(res.data.users))
        getVideo()
    }, [videoRef])
    const takeApicture = () => {
        let picture = pictureRef.current
        let video =videoRef.current

        picture.width=100
        picture.height= 100
        let context = picture.getContext('2d')

        context.drawImage(video,0,0,picture.width, picture.height)
        var img    = picture.toDataURL("image/png")
        setUserData(prevState => [...prevState, { name: img }])
    }
    const OnhandleClick = (data) => {
        console.log(data)
        dispatch(getUserData(navigate, data))
        navigate("/sidebar/profile")
    }

    const onUpload = (e) => {
        console.log(e.target.files[0].name)

        setUserData(prevState => [...prevState, { name: e.target.files[0].name }])
    }
    console.log(userData)
    return (
        <div class="decore">

            <div className="card1">
                <div className='videocontainer'>
                <video id="vid" ref={videoRef} className="camStyle" ></video>
                <button onClick={takeApicture} className='capturebutton'>Take Picture</button>
                <canvas ref={pictureRef} ></canvas>
                </div>
              
                <h4>Image Container</h4>
                
                <section style={{display:"flex"}} className='category'>
                    {userData.map((val, i) => {
                        return (
                            < section
                            // onClick={() => OnhandleClick(val)}
                            className='item'
                            >
                                <img src={val.name} alt="" />
                                {/* <span class="employ">
                                    {val.name}
                                </span> */}
                            </section>
                        )
                    }
                    )
                    }
                </section>
                {/* <input type="file" accept='image/png' onChange={(e) => onUpload(e)} /> */}
            </div>

        </div>
    )
}

export default ListOfEmploye;