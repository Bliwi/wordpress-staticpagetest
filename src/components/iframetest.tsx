import { useRef, useEffect } from 'react';

export default function iframe() {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
      const iframe = iframeRef.current;
  
      if (iframe) {
        // Wait for the iframe to load its content
        const onLoadHandler = () => {
          const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
  
          if (iframeDoc) {
            // Create or find a <style> element in the iframe
            let styleTag = iframeDoc.head.querySelector('style');
            if (!styleTag) {
              styleTag = iframeDoc.createElement('style');
              iframeDoc.head.appendChild(styleTag);
            }
  
            // Apply styles to the iframe content
            styleTag.textContent = `
              body {
                background-color: lightblue;
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
              }
              h2 {
                color: red;
                text-align: center;
              }
                .list-name {
  color:rgb(255, 141, 141);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Noto Sans', 'Ubuntu', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  padding: 10px 8px;
}
            `;
          } else {
            console.error("Unable to access iframe's document.");
          }
        };
  
        // Attach the onLoad handler
        iframe.addEventListener('load', onLoadHandler);
  
        // Cleanup listener on component unmount
        return () => {
          iframe.removeEventListener('load', onLoadHandler);
        };
      }
    }, []);
  
    return (
      <iframe
        ref={iframeRef}
        src="https://trello.com/b/ZoRYiegO.html"
        style={{ width: '100%', height: '300px', border: '1px solid black' }}
      />
    );
};
 
