// ==================== CHATBOT AI ASSISTANT ====================
const chatbot = {
  step: 0,
  data: {
    purpose: "",
    propertyType: "",
    budget: "",
    location: "",
    bhk: "",
    name: "",
    phone: "",
    timeSlot: "",
  },

  flow: [
    {
      question: "👋 Welcome to Vittara AI Assistant! How can I help you today?",
      options: [
        "🏠 Buy Property",
        "🔑 Rent Property",
        "💰 Sell Property",
        "📈 Investment",
        "🗓️ Schedule Site Visit",
      ],
      field: "purpose",
      type: "options",
    },
    {
      question: "Great choice! What type of property are you looking for?",
      options: ["🏢 Apartment", "🏡 Villa", "🏙️ Penthouse", "📐 Plot/Land"],
      field: "propertyType",
      type: "options",
    },
    {
      question: "What's your budget range?",
      options: [
        "Under ₹50 Lakhs",
        "₹50L - ₹1 Crore",
        "₹1Cr - ₹2 Crore",
        "₹2 Crore+",
      ],
      field: "budget",
      type: "options",
    },
    {
      question: "Which area in Pune do you prefer?",
      options: [
        "📍 Kharadi",
        "📍 Viman Nagar",
        "📍 Hinjewadi",
        "📍 Baner",
        "📍 Wakad",
        "📍 Other",
      ],
      field: "location",
      type: "options",
    },
    {
      question: "How many BHK are you looking for?",
      options: ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"],
      field: "bhk",
      type: "options",
    },
    {
      question: "Wonderful! May I have your name please?",
      field: "name",
      type: "text",
      placeholder: "Enter your full name",
    },
    {
      question:
        "And your phone number? (We'll send property details on WhatsApp)",
      field: "phone",
      type: "text",
      placeholder: "Enter your phone number",
    },
    {
      question: "When would you like to visit the property?",
      options: [
        "Today",
        "Tomorrow",
        "This Weekend",
        "Next Week",
        "Just Browsing",
      ],
      field: "timeSlot",
      type: "options",
    },
  ],
};

let chatbotOpen = false;

function toggleChatbot() {
  const window_el = document.getElementById("chatbotWindow");
  const toggle = document.getElementById("chatbotToggle");

  chatbotOpen = !chatbotOpen;

  if (chatbotOpen) {
    window_el.classList.remove("hidden");
    toggle.style.display = "none";
    if (
      chatbot.step === 0 &&
      document.getElementById("chatMessages").children.length === 0
    ) {
      initChat();
    }
  } else {
    window_el.classList.add("hidden");
    toggle.style.display = "block";
  }
}

function initChat() {
  chatbot.step = 0;
  chatbot.data = {
    purpose: "",
    propertyType: "",
    budget: "",
    location: "",
    bhk: "",
    name: "",
    phone: "",
    timeSlot: "",
  };
  document.getElementById("chatMessages").innerHTML = "";

  setTimeout(() => {
    showBotMessage(chatbot.flow[0].question);
    showOptions(chatbot.flow[0]);
  }, 500);
}

function showBotMessage(text) {
  const container = document.getElementById("chatMessages");

  // Show typing indicator
  const typing = document.createElement("div");
  typing.className = "chat-bubble chat-bubble-bot p-0";
  typing.id = "typingIndicator";
  typing.innerHTML =
    '<div class="typing-indicator"><span></span><span></span><span></span></div>';
  container.appendChild(typing);
  container.scrollTop = container.scrollHeight;

  setTimeout(() => {
    // Remove typing indicator
    const indicator = document.getElementById("typingIndicator");
    if (indicator) indicator.remove();

    // Show actual message
    const msg = document.createElement("div");
    msg.className = "chat-bubble chat-bubble-bot p-3";
    msg.innerHTML = `<p class="text-sm leading-relaxed">${text}</p>`;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
  }, 800);
}

function showUserMessage(text) {
  const container = document.getElementById("chatMessages");
  const msg = document.createElement("div");
  msg.className = "chat-bubble chat-bubble-user p-3";
  msg.innerHTML = `<p class="text-sm">${text}</p>`;
  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
}

function showOptions(step) {
  const optionsDiv = document.getElementById("chatOptions");
  const textInput = document.getElementById("chatTextInput");

  if (step.type === "options") {
    textInput.classList.add("hidden");
    optionsDiv.classList.remove("hidden");

    setTimeout(() => {
      optionsDiv.innerHTML = step.options
        .map(
          (opt) =>
            `<button class="chat-option-btn" onclick="selectOption('${opt}', '${step.field}')">${opt}</button>`,
        )
        .join("");
    }, 1200);
  } else if (step.type === "text") {
    optionsDiv.classList.add("hidden");
    textInput.classList.remove("hidden");
    textInput.classList.replace("hidden", "flex");

    setTimeout(() => {
      const input = document.getElementById("chatInput");
      input.placeholder = step.placeholder || "Type here...";
      input.value = "";
      input.dataset.field = step.field;
      input.focus();
    }, 1200);
  }
}

function selectOption(value, field) {
  showUserMessage(value);
  chatbot.data[field] = value;
  chatbot.step++;

  // Clear options
  document.getElementById("chatOptions").innerHTML = "";

  if (chatbot.step < chatbot.flow.length) {
    setTimeout(() => {
      showBotMessage(chatbot.flow[chatbot.step].question);
      showOptions(chatbot.flow[chatbot.step]);
    }, 500);
  } else {
    finishChat();
  }
}

function sendChatMessage() {
  const input = document.getElementById("chatInput");
  const value = input.value.trim();
  const field = input.dataset.field;

  if (!value) return;

  showUserMessage(value);
  chatbot.data[field] = value;
  chatbot.step++;
  input.value = "";

  if (chatbot.step < chatbot.flow.length) {
    setTimeout(() => {
      showBotMessage(chatbot.flow[chatbot.step].question);
      showOptions(chatbot.flow[chatbot.step]);
    }, 500);
  } else {
    finishChat();
  }
}

function finishChat() {
  const d = chatbot.data;

  // Hide input area options
  document.getElementById("chatOptions").innerHTML = "";
  document.getElementById("chatTextInput").classList.add("hidden");

  const summary = `
        ✅ <strong>Thank you, ${d.name}!</strong><br><br>
        Here's a summary of your requirements:<br>
        📋 Purpose: ${d.purpose}<br>
        🏠 Type: ${d.propertyType}<br>
        💰 Budget: ${d.budget}<br>
        📍 Location: ${d.location}<br>
        🛏️ BHK: ${d.bhk}<br>
        📅 Visit: ${d.timeSlot}<br><br>
        Our team will contact you shortly on <strong>${d.phone}</strong>. 
        Click below to send these details on WhatsApp for faster response! 🚀
    `;

  setTimeout(() => {
    showBotMessage(summary);

    // Show WhatsApp button
    setTimeout(() => {
      const container = document.getElementById("chatMessages");
      const waBtn = document.createElement("div");
      waBtn.className = "chat-bubble p-0 mt-2";

      const whatsappMsg = `Hi Vittara! 🏠\n\nI'm interested in the following:\n\n📋 Purpose: ${d.purpose}\n🏠 Type: ${d.propertyType}\n💰 Budget: ${d.budget}\n📍 Location: ${d.location}\n🛏️ BHK: ${d.bhk}\n📅 Preferred Visit: ${d.timeSlot}\n\n👤 Name: ${d.name}\n📱 Phone: ${d.phone}\n\nPlease share suitable properties. Thank you!`;

      waBtn.innerHTML = `
                <a href="https://wa.me/919876543210?text=${encodeURIComponent(whatsappMsg)}" target="_blank" class="inline-flex items-center space-x-2 px-5 py-2.5 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all text-sm font-semibold shadow-lg">
                    <i class="fab fa-whatsapp text-lg"></i>
                    <span>Send on WhatsApp</span>
                </a>
                <button onclick="initChat()" class="inline-flex items-center space-x-2 px-5 py-2.5 bg-navy text-gold rounded-xl hover:bg-gold hover:text-navy transition-all text-sm font-semibold mt-2 ml-2 shadow-lg">
                    <i class="fas fa-redo text-sm"></i>
                    <span>Start Over</span>
                </button>
            `;
      container.appendChild(waBtn);
      container.scrollTop = container.scrollHeight;
    }, 1500);
  }, 500);
}
