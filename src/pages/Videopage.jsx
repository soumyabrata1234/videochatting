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
    <div
      style={{
        minHeight: '100vh',
        background: '#18181b',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#f4f4f5',
        fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
      }}
    >
      {/* The video call UI will be rendered here */}
      <h2 style={{ marginBottom: 24, fontWeight: 600, letterSpacing: 1 }}>Video Call Room</h2>
      <div
        ref={myMeeting}
        style={{
          width: '100%',
          maxWidth: 800,
          minHeight: 480,
          background: '#232326',
          borderRadius: 16,
          boxShadow: '0 4px 32px rgba(0,0,0,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* ZegoUIKitPrebuilt will mount here */}
        <span
          style={{
            position: 'absolute',
            top: 16,
            right: 24,
            background: '#323236',
            color: '#f4f4f5',
            padding: '4px 12px',
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: 0.5,
            zIndex: 2,
            boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
          }}
        >
          Room ID: {roomID}
        </span>
      </div>
    </div>
  )
}

export default VideoPage