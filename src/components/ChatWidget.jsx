import { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// 1. Initialize the AI with your secret key
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// 2. The "System Prompt" - This is where you paste your CV details!
const myCV = `
You are the personal AI assistant for Nuno Filipe. Your job is to answer questions from recruiters about Nuno's skills, experience, and projects. 
Be polite, professional, and concise. Do not make up information. If you don't know the answer, say "I'm not sure, but you can email Nuno directly at 2hmanu4@gmail.com".

Here is Nuno's information:
- Education: Master's in Artificial Intelligence from De Montfort University (Aug 2024 - Oct 2025). Bachelor's in Computer Science from De Montfort University (Oct 2021 - Aug 2024).
- Skills: Python, Machine Learning, Data Analysis, Java, Kotlin, C#, HTML/CSS, JavaScript, React, SQL, Git.
- Experience: IT Tutor at Impact Academies (Dec 2024 - Present), Software/Hardware Supporter at Law Officer Paulo Figueiredo (Apr 2014 - Aug 2019).
- Projects: 
  1. Master's Dissertation: Applied AI in Sports Analytics (Predictive models for Portuguese Futsal League).
  2. Built a custom React portfolio website.
  3. Kotlin implementation of a clock in/out project.
  4. Python project using Copelia Robotics.
`;

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Start the chat history with a greeting
  const [messages, setMessages] = useState([
    { role: 'model', text: "Hi! I'm Nuno's AI assistant. Ask me anything about his CV, skills, or experience!" }
  ]);
  
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    try {
      // 3. Set up the AI model
      const model = genAI.getGenerativeModel({ 
        model: "gemini-2.0-flash-lite",
        systemInstruction: myCV // We feed it your resume here!
      });

      // 4. Format the past messages so the AI remembers the conversation
      const chatHistory = messages.slice(1).map(msg => ({
        role: msg.role === 'bot' ? 'model' : 'user',
        parts: [{ text: msg.text }],
      }));

      // 5. Send the message to Google
      const chat = model.startChat({ history: chatHistory });
      const result = await chat.sendMessage(userMsg);
      const responseText = result.response.text();

      // Add the AI's response to the screen
      setMessages((prev) => [...prev, { role: 'bot', text: responseText }]);

    } catch (error) {
      console.error("AI Error:", error);
      setMessages((prev) => [...prev, { role: 'bot', text: "Oops! My AI brain lost connection. Please try again later." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chat-widget-container">
      {!isOpen && (
        <button className="chat-toggle-btn" onClick={() => setIsOpen(true)}>💬</button>
      )}

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Ask Nuno's CV</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>
          
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.role === 'model' || msg.role === 'bot' ? 'bot' : 'user'}`}>
                {msg.text}
              </div>
            ))}
            {isTyping && <div className="message bot">Thinking...</div>}
            <div ref={messagesEndRef} />
          </div>

          <form className="chat-input-area" onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder="Ask about my skills..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isTyping}
            />
            <button type="submit" disabled={isTyping || !input.trim()}>Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;