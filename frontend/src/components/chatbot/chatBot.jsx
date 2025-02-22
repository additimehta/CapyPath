import React, { useEffect } from 'react';
import './chatBot.css';

const VoiceflowChatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.type = "text/javascript";
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '67b9593c0c1f7b1c4e81e332' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    };
    script.onerror = () => {
      console.error("Failed to load Voiceflow script");
    };
    document.body.appendChild(script);
  }, []);

  return null; // This component does not render anything
};

export default VoiceflowChatbot;