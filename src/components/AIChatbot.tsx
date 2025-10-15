import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { useState } from 'react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm the PM-AJAY AI Assistant. I can help you with beneficiary information, eligibility criteria, and program details. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    "What are the eligibility criteria?",
    "How to add a beneficiary?",
    "Check beneficiary status",
    "Program categories",
  ];

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('eligibility') || lowerMessage.includes('criteria')) {
      return "The eligibility criteria for PM-AJAY GIA include:\n\n✓ Must belong to Scheduled Caste (SC) community\n✓ Age between 18-45 years\n✓ Annual family income below ₹1 lakh\n✓ Should have valid identity proof\n✓ Residence proof of the state\n\nWould you like more details on any specific criterion?";
    }

    if (lowerMessage.includes('add beneficiary') || lowerMessage.includes('register')) {
      return "To add a new beneficiary:\n\n1. Click on 'Add Beneficiary' in the navigation menu\n2. Fill in personal details (name, age, gender)\n3. Provide address and contact information\n4. Enter economic details (income, occupation)\n5. Upload required documents\n6. Click 'Run AI Analysis' to get eligibility score\n7. Submit the application\n\nThe AI will automatically calculate the eligibility score!";
    }

    if (lowerMessage.includes('status') || lowerMessage.includes('check')) {
      return "To check beneficiary status:\n\n1. Go to the 'Beneficiaries' page\n2. Use the search bar to find by ID or name\n3. Click on the beneficiary card to view details\n4. Status will show as Active, Completed, or Pending\n\nYou can also filter by category or status. Need help with a specific beneficiary ID?";
    }

    if (lowerMessage.includes('program') || lowerMessage.includes('categories') || lowerMessage.includes('category')) {
      return "PM-AJAY GIA has 3 main program categories:\n\n📊 Income Generation\n• Entrepreneurship support\n• Livelihood enhancement\n• Business loans & grants\n\n🎓 Skill Development\n• Vocational training\n• Employability programs\n• Certification courses\n\n🏗️ Infrastructure Support\n• Community facilities\n• Basic amenities\n• Development projects\n\nWhich category interests you?";
    }

    if (lowerMessage.includes('score') || lowerMessage.includes('ai') || lowerMessage.includes('ml')) {
      return "Our AI/ML system analyzes multiple factors:\n\n• Age and demographic data (20%)\n• Economic indicators (25%)\n• Caste category verification (30%)\n• Education level (15%)\n• Family composition (10%)\n\nThe system provides:\n✓ Eligibility score (0-100%)\n✓ Fraud detection alerts\n✓ Program recommendations\n✓ Success probability predictions\n\nAccuracy rate: 94.5%!";
    }

    if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey')) {
      return "Hello! 👋 I'm here to help you with:\n\n• Beneficiary registration\n• Eligibility verification\n• Program information\n• Status tracking\n• AI/ML insights\n\nWhat would you like to know?";
    }

    if (lowerMessage.includes('thank')) {
      return "You're welcome! 😊 Feel free to ask if you have any more questions about PM-AJAY GIA programs or beneficiary management. I'm here to help!";
    }

    // Default response
    return "I understand you're asking about: \"" + userMessage + "\"\n\nI can help you with:\n• Eligibility criteria\n• Adding beneficiaries\n• Checking status\n• Program categories\n• AI/ML analysis\n\nCould you please rephrase your question or choose from the quick questions below?";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getAIResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600
                   rounded-full shadow-2xl flex items-center justify-center z-50
                   hover:shadow-purple-500/50 transition-shadow"
        >
          <MessageCircle size={28} className="text-white" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-96 h-[600px] bg-white dark:bg-gray-900 rounded-2xl
                     shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col z-50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold">PM-AJAY AI Assistant</h3>
                  <p className="text-purple-100 text-xs">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex gap-2 max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.isBot
                        ? 'bg-gradient-to-br from-purple-600 to-blue-600'
                        : 'bg-gradient-to-br from-primary-600 to-primary-700'
                    }`}>
                      {message.isBot ? (
                        <Bot size={18} className="text-white" />
                      ) : (
                        <User size={18} className="text-white" />
                      )}
                    </div>
                    <div>
                      <div className={`px-4 py-2 rounded-2xl ${
                        message.isBot
                          ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                          : 'bg-primary-600 text-white'
                      }`}>
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 px-2">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <Bot size={18} className="text-white" />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Quick Questions */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700
                               text-xs rounded-full transition-colors text-gray-700 dark:text-gray-300"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700
                           rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500
                           text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full
                           flex items-center justify-center text-white shadow-lg"
                >
                  <Send size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
