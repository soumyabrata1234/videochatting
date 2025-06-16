import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID, SERVER_SECRET } from './constant';

const VideoPage = () => {
    const {id} = useParams();
    const roomID = id
    let myMeeting = async (element) => {
   // generate Kit Token
    const appID = import.meta.env.VITE_APP_ID || APP_ID; // Replace with your actual App ID
    const serverSecret = import.meta.env.VITE_SERVER_SECRET || SERVER_SECRET; // Replace with your actual Server Secret
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), id);  
   // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Copy link',
          url:
           window.location.protocol + '//' + 
           window.location.host + window.location.pathname +
            '?roomID=' +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });

  
};
  return (
    <div ref={myMeeting}>

    </div>
  )
}

export default VideoPage