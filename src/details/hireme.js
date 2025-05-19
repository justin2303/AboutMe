import React, {useState, useEffect, useRef} from 'react';
import NavBar from './navbar';
import './hireme.css'
const HireMe = () => {
    const [currentQuery, setCurrentQuery] = useState("")
    const [previousQueries, setPreviousQueries] = useState([]);
    const [chatHistory, setChatHistory] = useState([]);
    const chatHistoryRef = useRef(null);
    const initialMessageShown = useRef(false);
    const spriteRef = useRef(null);
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    useEffect(() => {
    const container = chatHistoryRef.current;
    if (!container || initialMessageShown.current) return;

    if (chatHistory.length === 0) {
        initialMessageShown.current = true;
        
        const welcomeMsg = "Hi, I am Justin's AI assistant, I'm here to answer your hiring questions!";
        const p = document.createElement('p');
        p.className = 'ai-message';
        container.appendChild(p);
        const cursor = document.createElement('span');
        cursor.textContent = '|';
        cursor.style.display = 'inline-block';
        cursor.style.marginLeft = '2px';
        cursor.style.animation = 'blink 1s step-start 0s infinite';
        p.appendChild(cursor);

        let i = 0;
        if (spriteRef.current) {
            spriteRef.current.src = 'eurekasprite.png';
            }
        const interval = setInterval(() => {
        p.textContent = p.textContent.slice(0, -1) + welcomeMsg.charAt(i);
        p.appendChild(cursor); // re-append after typing
        i++;
        if (i >= welcomeMsg.length) {
            clearInterval(interval);
            (async () => {
              if (spriteRef.current) {
                await delay(1000);
                spriteRef.current.src = 'botsprite.png';
              }
              cursor.remove();
            })();
        }
        }, 30);

        container.scrollTop = container.scrollHeight;
    }
    }, []);
    useEffect(() => {
        if (chatHistory.length === 0) {
            return;
        }
        const latestIndex = chatHistory.length - 1;
        const latestMessage = chatHistory[latestIndex];
    
        const container = chatHistoryRef.current;
        if (!container) return;
        // Create new paragraph element
        const p = document.createElement('p');
        
        // User message (even index): just add text with background
        if (latestIndex % 2 === 0 ) {
          p.textContent = latestMessage;
          p.className = 'user-message';
          container.appendChild(p);
        } 
        // AI message (odd index): animate typewriter manually
        else {
            p.className = 'ai-message';
            container.appendChild(p);
    
            const cursor = document.createElement('span');
            cursor.textContent = '|';
            cursor.style.display = 'inline-block';
            cursor.style.marginLeft = '2px';
            cursor.style.animation = 'blink 1s step-start 0s infinite';
            p.appendChild(cursor);
            if (spriteRef.current) {
                spriteRef.current.src = 'eurekasprite.png';
                }
            let i = 0;
            const interval = setInterval(() => {
            // Insert one character before the cursor span
            p.textContent = p.textContent.slice(0, -1) + latestMessage.charAt(i);
            p.appendChild(cursor); // re-append cursor span after updating text

            i++;
            if (i >= latestMessage.length) {
                clearInterval(interval);
                (async () => {
                  if (spriteRef.current) {
                    await delay(1000); 
                    spriteRef.current.src = 'botsprite.png';
                  }
                  cursor.remove();
                })();
            }
            }, 30);
        }
    
        // Scroll chat to bottom
        container.scrollTop = container.scrollHeight;
      }, [chatHistory]);
      const sendMessage = async (msg) => {
        let message = msg
        if (!msg?.trim()) {
            console.log("msg is empty or only whitespace");
            message=currentQuery
          }
        else {
            message = msg
        }
        const updated = [...previousQueries, message];
        setPreviousQueries(updated);
        setChatHistory((prev) => [...prev, message]);
        
        if (spriteRef.current) {
          spriteRef.current.src = 'thinkingsprite.png';
        }
        await delay(2000);
        setCurrentQuery("")
        fetch('https://aboutme-justin.space/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages: [{ role: 'user', content: message }],
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            const response = data.choices?.[0]?.message?.content || 'Sorry, no response received.';
            setChatHistory((prev) => [...prev, response]);
          })
          .catch((err) => {
            console.error('API error:', err);
            setChatHistory((prev) => [...prev, 'Sorry, something went wrong.']);
          });
      
      };
      const updateQuery =(val)=> {
        setCurrentQuery(val);
    }
    const handleFAQ =(FAQ)=> {
        sendMessage(FAQ);
    }

    return (
        <div>
            <div className='navbar-wrapper'>
                <NavBar/> 
            </div>
               
            <div className='Ai-box'>
                <div className='sprite-box'>
                    <img ref={spriteRef} src='botsprite.png' alt="Bot Sprite" />
                </div>
                <div className='chat-box'>
                    <div
                    className="chat-history"
                    ref={chatHistoryRef}
                    ></div>
                    <div className  ="message-area">
                    <textarea id="input" placeholder="Ask me a question..."  
                    value={currentQuery}
                    onChange={(e) => updateQuery(e.target.value)}></textarea>
                    <img  onClick={() => sendMessage()} src='send.png'></img>
                    </div>
                </div>
                <div className='FAQs'>
                    <p>FAQs:</p>
                    <button onClick={() => handleFAQ("Why should I hire you?")}>1. Why should I hire you?</button>
                    <button  onClick={() => handleFAQ("What are your technical strengths?")}>2. What are your technical strengths?</button>
                    <button  onClick={() => handleFAQ("What kind of projects have you worked on?")}>3. What kind of projects have you worked on?</button>
                    <button  onClick={() => handleFAQ("What's your experience with Agile/Scrum?")}>4. What's your experience with Agile/Scrum?</button>
                    <button onClick={() => handleFAQ("Have you dealt with performance bottlenecks?")}>5. Have you dealt with performance bottlenecks?</button>
                </div>
            </div>
        </div>
    )
};
export default HireMe;
