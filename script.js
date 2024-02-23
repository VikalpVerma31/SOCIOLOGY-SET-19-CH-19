const questions = [
    {
        question:"निम्नलिखित में से कौन मैक्स वेबर का प्रसिद्ध कार्य माना जाता है?",
        answers: [
            { text: "जर्मन विचारधारा", correct: false},
            { text: "प्रवासी भारतीयों का समाजशास्त्र", correct: false},
            { text: "प्रोटेस्टेंट नैतिकता और पूंजीवाद की आत्मा", correct: true},
            { text: "आत्मघाती", correct: false},
        ] 
    },

    {
        question:"मैक्स वेबर का जन्म किस वर्ष हुआ था?",
        answers: [
            { text: "1764", correct: false},
            { text: "1864", correct: true},
            { text: "1865", correct: false},
            { text: "1765", correct: false},
        ] 
    },

    {
        question:"मैक्स वेबर के लिए, आदर्श प्रकार हैं",
        answers: [
            { text: "सामाजिक वास्तविकताएँ", correct: false},
            { text: "समाजशास्त्रीय घटनाएँ", correct: false},
            { text: "समाजशास्त्रीय घटनाएँ", correct: false},
            { text: "मानसिक निर्माण", correct: true},
        ] 
    },

    {
        question:"	वेबर के अनुसार प्राधिकार तीन प्रकार के होते हैं",
        answers: [
            { text: "तर्कसंगत, सामंती और पूंजीवादी", correct: false},
            { text: "सामंती, पारंपरिक और करिश्माई", correct: false},
            { text: "कानूनी, पारंपरिक और करिश्माई", correct: true},
            { text: "इनमे से कोई भी नहीं", correct: false},
        ] 
    },

    {
        question:"Zweckrational क्रियाओं को अन्यथा के रूप में जाना जाता है",
        answers: [
            { text: "प्रभावशाली कार्रवाई", correct: false},
            { text: "मूल्योन्मुख कार्रवाई", correct: false},
            { text: "लक्ष्योन्मुख कार्रवाई", correct: true},
            { text: "पारंपरिक क्रिया", correct: false},
        ] 
    },

    {
        question:"सम्पूर्ण समाजशास्त्र मैक्स वेबर पर आधारित है",
        answers: [
            { text: "नौकरशाही", correct: false},
            { text: "धर्म", correct: false},
            { text: "पूंजीवाद", correct: false},
            { text: "सामाजिक कार्य", correct: true},
        ] 
    },

    {
        question:"बुढ़ापे का नियम और शक्ति है",
        answers: [
            { text: "पारंपरिक प्राधिकरण", correct: true},
            { text: "करिश्माई प्राधिकरण", correct: false},
            { text: "तर्कसंगत-कानूनी प्राधिकरण", correct: false},
            { text: "राजनयिक प्राधिकरण", correct: false},
        ] 
    },

    {
        question:"मैक्स वेबर के अनुसार, कानूनी-तर्कसंगत प्राधिकरण के कामकाज का आधार है",
        answers: [
            { text: "गैर-पदानुक्रम", correct: false},
            { text: "	निष्क्रिय व्यवस्था", correct: false},
            { text: "अलिखित कानून", correct: false},
            { text: "	नियम", correct: true},
        ] 
    },

    {
        question:"	अभिनेता के दृष्टिकोण से क्रिया के अर्थ को समझने की एक व्यवस्थित व्याख्यात्मक प्रक्रिया को संदर्भित करता है",
        answers: [
            { text: "वेर्स्टीन", correct: true},
            { text: "व्यावहारिकता", correct: false},
            { text: "संरचनावाद", correct: false},
            { text: "	संघर्ष दृष्टिकोण", correct: false},
        ] 
    },

    {
        question:"प्रोटेस्टेंट नैतिकता और पूंजीवाद की आत्मा में लिखा गया था",
        answers: [
            { text: "1903", correct: false},
            { text: "1904", correct: false},
            { text: "1905", correct: true},
            { text: "1906", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सी पुस्तक कार्ल मार्क्स द्वारा नहीं लिखी गई है?",
        answers: [
            { text: "कम्युनिस्ट घोषणापत्र", correct: false},
            { text: "दास कैपिटल", correct: false},
            { text: "आर्थिक और दार्शनिक पांडुलिपि", correct: false},
            { text: "अर्थव्यवस्था और समाज", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सा मैक्स वेबर का सामाजिक कार्य नहीं है?",
        answers: [
            { text: "मूल्यांकनात्मक कार्रवाई", correct: true},
            { text: "लक्ष्य तर्कसंगत कार्रवाई", correct: false},
            { text: "मूल्य- तर्कसंगत क्रिया", correct: false},
            { text: "पारंपरिक क्रिया", correct: false},
        ] 
    },

    {
        question:"एक तर्कसंगत-उद्देश्यपूर्ण कार्रवाई पर आधारित है",
        answers: [
            { text: "तर्कसंगतता को महत्व दें", correct: false},
            { text: "	पारंपरिक तर्कसंगतता", correct: false},
            { text: "साधन-अंत तर्कसंगतता", correct: true},
            { text: "स्नेहपूर्ण तर्कसंगतता", correct: false},
        ] 
    },

    {
        question:"राजशाही व्यवस्था ______________________ प्रकार की सत्ता है",
        answers: [
            { text: "तर्कसंगत-कानूनी", correct: false},
            { text: "करिश्माई", correct: false},
            { text: "परंपरागत", correct: true},
            { text: "इनमे से कोई भी नहीं", correct: false},
        ] 
    },

    {
        question:"मैक्स वेबर की 'द प्रोटेस्टेंट एथिक एंड द स्पिरिट ऑफ कैपिटलिज्म' किस पर केंद्रित है?",
        answers: [
            { text: "तपस्वी प्रोटेस्टेंटवाद की नैतिकता और आधुनिक पूंजीवाद की भावना के उद्भव के बीच संबंध", correct: true},
            { text: "शोषण के संदर्भ में प्रोटेस्टेंट और पूंजीपतियों के बीच संबंध", correct: false},
            { text: "प्रोटेस्टेंटों की विचारधारा और पूंजीवादी उत्पादन पद्धति का संबंध", correct: false},
            { text: "पूंजीपतियों के बीच धन संचय करने के मुद्दे और प्रोटेस्टेंटों का संघर्ष", correct: false},
        ] 
    },

    {
        question:"करिश्माई प्राधिकार की विशेषता है",
        answers: [
            { text: "किसी व्यक्ति के पास अलौकिक शक्तियाँ होती हैं", correct: false},
            { text: "एक नेता के असाधारण व्यक्तिगत गुण", correct: true},
            { text: "विरासत में मिली स्थिति", correct: false},
            { text: "मतदान द्वारा प्राप्त स्थिति", correct: false},
        ] 
    },

    {
        question:"जब कोई व्यक्ति अपनी विरासत में मिली स्थिति के आधार पर अधिकार प्राप्त करता है, तो उस प्रकार के अधिकार को कहा जाता है",
        answers: [
            { text: "पारंपरिक अधिकार", correct: true},
            { text: "करिश्माई अधिकार", correct: false},
            { text: "कानूनी-तर्कसंगत अधिकार", correct: false},
            { text: "लोकतांत्रिक अधिकार", correct: false},
        ] 
    },

    {
        question:"	मैक्स वेबर थे",
        answers: [
            { text: "फ़्रेंच", correct: false},
            { text: "अंग्रेज़ी", correct: false},
            { text: "इतालवी", correct: false},
            { text: "जर्मन", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में से किसने पहली बार आर्थिक विकास पर धार्मिक मान्यताओं के प्रभाव का विश्लेषण किया?",
        answers: [
            { text: "अगस्टे कॉम्टे", correct: false},
            { text: "हर्बर्ट स्पेंसर", correct: false},
            { text: "मैक्स वेबर", correct: true},
            { text: "एमाइल दुर्खीम", correct: false},
        ] 
    },

    {
        question:"मैक्स वेबर ने धर्म के अध्ययन में चर्चा की कि कैल्विनवाद किस पर विश्वास करता था",
        answers: [
            { text: "परिवर्तन", correct: false},
            { text: "पूर्व-नियति", correct: true},
            { text: "पछतावा", correct: false},
            { text: "व्यवस्थितकरण", correct: false},
        ] 
    },

    {
        question:"टैल्कॉट पार्सन्स का जन्म वर्ष में हुआ था",
        answers: [
            { text: "1902", correct: true},
            { text: "1904", correct: false},
            { text: "1906", correct: false},
            { text: "1908", correct: false},
        ] 
    },

    {
        question:"	संयुक्त राज्य अमेरिका में प्रकार्यवाद का एक प्रमुख प्रतिपादक है",
        answers: [
            { text: "काल मार्क्स", correct: false},
            { text: "दुर्खीम", correct: false},
            { text: "टैल्कॉट पार्सन्स", correct: true},
            { text: "मैक्स वेबर", correct: false},
        ] 
    },

    {
        question:"टैल्कॉट पार्सन्स की 'द स्ट्रक्चर ऑफ सोशल एक्शन' मूल रूप से प्रकाशित हुई थी",
        answers: [
            { text: "1927", correct: false},
            { text: "1937", correct: true},
            { text: "1947", correct: false},
            { text: "1957", correct: false},
        ] 
    },

    {
        question:"द सोशल सिस्टम (1951) की प्रसिद्ध कृति है",
        answers: [
            { text: "एमाइल दुर्खीम", correct: false},
            { text: "मैक्स वेबर", correct: false},
            { text: "    टैल्कॉट पार्सन्स", correct: true},
            { text: "आरके मेर्टन", correct: false},
        ] 
    },

    {
        question:"विलंबता प्रतिमान के रूप में कार्य करता है",
        answers: [
            { text: "तनाव प्रबंधन", correct: true},
            { text: "एकीकरण", correct: false},
            { text: "लक्ष्य की प्राप्ति", correct: false},
            { text: "अनुकूलन", correct: false},
        ] 
    },

    {
        question:"पार्सन्स सामाजिक व्यवस्था के निर्माण खंड के रूप में _____________ को लेते हैं",
        answers: [
            { text: "एकीकरण", correct: false},
            { text: "कार्रवाई", correct: true},
            { text: "मूल्य-अभिविन्यास", correct: false},
            { text: "विलंब", correct: false},
        ] 
    },

    {
        question:"	वे समूह जिनसे लोग अपने व्यवहार की तुलना करते हैं और उनके जैसा कार्य करने का प्रयास करते हैं, कहलाते हैं",
        answers: [
            { text: "सदस्यता समूह", correct: false},
            { text: "संदर्भ समूह", correct: true},
            { text: "आपसी समूह", correct: false},
            { text: "गैर-सदस्यता समूह", correct: false},
        ] 
    },

    {
        question:"'डिसफंक्शन' की अवधारणा का प्रमुख योगदान है",
        answers: [
            { text: "दुर्खीम", correct: false},
            { text: "आरके मेर्टन", correct: true},
            { text: "टैल्कॉट पार्सन्स", correct: false},
            { text: "मैक्स वेबर", correct: false},
        ] 
    },

    {
        question:"प्रकट कार्य क्या हैं?",
        answers: [
            { text: "किसी सामाजिक क्रिया के अपरिचित और इच्छित परिणाम", correct: false},
            { text: "किसी सामाजिक क्रिया के मान्यता प्राप्त और अनपेक्षित परिणाम", correct: false},
            { text: "किसी सामाजिक क्रिया के अपरिचित और अनपेक्षित परिणाम", correct: false},
            { text: "	किसी सामाजिक क्रिया के मान्यता प्राप्त और अपेक्षित परिणाम", correct: true},
        ] 
    },

    {
        question:"अव्यक्त कार्य सदैव होते हैं",
        answers: [
            { text: "किसी सामाजिक क्रिया के अपरिचित और इच्छित परिणाम", correct: false},
            { text: "	किसी सामाजिक क्रिया के मान्यता प्राप्त और अनपेक्षित परिणाम", correct: false},
            { text: "किसी सामाजिक क्रिया के अपरिचित और अनपेक्षित परिणाम", correct: true},
            { text: "	किसी सामाजिक क्रिया के मान्यता प्राप्त और अपेक्षित परिणाम", correct: false},
        ] 
    },

    {
        question:"आर के मेर्टन हैं",
        answers: [
            { text: "संरचनावादी", correct: false},
            { text: "संरचनात्मक- प्रकार्यवादी", correct: true},
            { text: "संघर्ष सिद्धांतकार", correct: false},
            { text: "	इंटरेक्शनिस्ट", correct: false},
        ] 
    },

    {
        question:"सैमुअल स्टॉफ़र की द अमेरिकन सोल्जर (1949) ने मेर्टन को अपना प्रतिपादन करने के लिए प्रेरित किया",
        answers: [
            { text: "	एनोमी", correct: false},
            { text: "कार्यात्मक विश्लेषण", correct: false},
            { text: "मध्य-श्रेणी सिद्धांत", correct: false},
            { text: "	संदर्भ समूह", correct: true},
        ] 
    },

    {
        question:"आरके मेर्टन द्वारा लिखित सामाजिक सिद्धांत और सामाजिक संरचना प्रकाशित हुई थी",
        answers: [
            { text: "1946", correct: false},
            { text: "1947", correct: false},
            { text: "1948", correct: false},
            { text: "1949", correct: true},
        ] 
    },

    {
        question:"सामाजिक रूप से स्वीकृत लक्ष्यों और साधनों दोनों की अस्वीकृति और उनके स्थान पर विभिन्न साधनों और लक्ष्यों का आना है",
        answers: [
            { text: "प्रत्याहारवाद", correct: false},
            { text: "विद्रोह", correct: true},
            { text: "कर्मकाण्ड", correct: false},
            { text: "अनुपालन", correct: false},
        ] 
    },

    {
        question:"आरके मेर्टन के संदर्भ समूह ने किया है",
        answers: [
            { text: "केवल सदस्यता", correct: false},
            { text: "केवल गैर-सदस्यता", correct: false},
            { text: "सदस्यता और गैर-सदस्यता", correct: true},
            { text: "इनमे से कोई भी नहीं", correct: false},
        ] 
    },

    {
        question:"आर.के. मेर्टन की मृत्यु हो गई",
        answers: [
            { text: "2003", correct: true},
            { text: "2013", correct: false},
            { text: "2005", correct: false},
            { text: "2015", correct: false},
        ] 
    },

    {
        question:"मेर्टोनियन ढाँचे में, अनुरूपता का तात्पर्य क्या है?",
        answers: [
            { text: "लक्ष्य और साधन दोनों स्वीकार किये जाते हैं", correct: true},
            { text: "लक्ष्य स्वीकार किये जाते हैं और साधन अस्वीकार किये जाते हैं", correct: false},
            { text: "लक्ष्य और साधन दोनों अस्वीकार कर दिये गये हैं", correct: false},
            { text: "साधनों को स्वीकार किया जाता है और लक्ष्यों को अस्वीकार कर दिया जाता है", correct: false},
        ] 
    },

    {
        question:"पार्सन्स ने किस पुस्तक में अपने AGIL प्रतिमान को रेखांकित किया है?",
        answers: [
            { text: "सामाजिक व्यवस्था", correct: true},
            { text: "समाजशास्त्रीय सिद्धांत में निबंध", correct: false},
            { text: "कार्रवाई के एक सामान्य सिद्धांत की ओर", correct: false},
            { text: "सामाजिक क्रिया की संरचना", correct: false},
        ] 
    },

    {
        question:"पार्सन्स के अनुसार निम्नलिखित में से कौन सा पैटर्न वैरिएबल नहीं है?",
        answers: [
            { text: "	श्रेय और उपलब्धि", correct: false},
            { text: "प्रभावोत्पादकता और प्रभावशीलता", correct: false},
            { text: "अभिव्यंजक और वाद्य", correct: true},
            { text: "व्यापकता एवं विशिष्टता", correct: false},
        ] 
    },

    {
        question:"'कैथेक्टिक एक्शन' को आप किसके नाम से जोड़ सकते हैं?",
        answers: [
            { text: "मैक्स वेबर", correct: false},
            { text: "आरके मेर्टन", correct: false},
            { text: "टैल्कॉट पार्सन्स", correct: true},
            { text: "	एमाइल दुर्खीम", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन टैल्कॉट पार्सन्स की सामाजिक व्यवस्था की कार्यात्मक पूर्व-आवश्यकताएँ नहीं है?",
        answers: [
            { text: "अनुकूलन", correct: false},
            { text: "लक्ष्य प्राप्ति", correct: false},
            { text: "एकीकरण", correct: false},
            { text: "अति अनुरक्ती", correct: true},
        ] 
    },

    {
        question:"टैल्कॉट पार्सन्स की मृत्यु हो गई",
        answers: [
            { text: "	8 मई, 1979", correct: false},
            { text: "9 मई, 1979", correct: false},
            { text: "8 मई, 1980", correct: true},
            { text: "	9 मई, 1980", correct: false},
        ] 
    },

    {
        question:"	टैल्कॉट पार्सन्स सिद्धांत को कहा जाता है",
        answers: [
            { text: "भव्य सिद्धांत", correct: true},
            { text: "संघर्ष सिद्धांत", correct: false},
            { text: "मध्य-श्रेणी सिद्धांत", correct: false},
            { text: "इनमे से कोई भी नहीं", correct: false},
        ] 
    },

    {
        question:"एनोमी का मतलब है",
        answers: [
            { text: "राज्यविहीनता", correct: false},
            { text: "रोग", correct: false},
            { text: "आदर्शहीनता", correct: true},
            { text: "विनियमन", correct: false},
        ] 
    },

    {
        question:"मर्टन के संदर्भ में प्रत्याशित समाजीकरण की बात करते हैं",
        answers: [
            { text: "सदस्यता संदर्भ समूह", correct: false},
            { text: "गैर-सदस्यता संदर्भ समूह", correct: true},
            { text: "	सापेक्ष वंचित समूह", correct: false},
            { text: "ऊपर के सभी", correct: false},
        ] 
    },

    {
        question:"____________ से, पार्सन्स का अर्थ है सिस्टम को कार्यशील बनाए रखने के लिए सिस्टम के भीतर विभिन्न अभिनेताओं या इकाइयों के बीच संबंधों को समन्वयित, समायोजित और विनियमित करने की आवश्यकता।",
        answers: [
            { text: "लक्ष्य प्राप्ति", correct: false},
            { text: "अनुकूलन", correct: false},
            { text: "एकीकरण", correct: true},
            { text: "विलंब", correct: false},
        ] 
    },

    {
        question:"टैल्कॉट पार्सन्स एक ___________ समाजशास्त्री हैं",
        answers: [
            { text: "आस्ट्रेलियन", correct: false},
            { text: "अमेरिकन", correct: true},
            { text: "अफ़्रीकी", correct: false},
            { text: "इनमे से कोई भी नहीं", correct: false},
        ] 
    },

    {
        question:"'प्रत्याशित समाजीकरण' की अवधारणा किसके द्वारा विकसित की गई है?",
        answers: [
            { text: "काल मार्क्स", correct: false},
            { text: "मैक्स वेबर", correct: false},
            { text: "एमाइल दुर्खीम", correct: false},
            { text: "आरके मेर्टन", correct: true},
        ] 
    },

    {
        question:"AGIL प्रतिमान किससे सम्बंधित है?",
        answers: [
            { text: "मैक्स वेबर", correct: false},
            { text: "एमाइल दुर्खीम", correct: false},
            { text: "टैल्कॉट पार्सन्स", correct: true},
            { text: "आरके मेर्टन", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सा टैल्कॉट पार्सन्स का कार्य नहीं है?",
        answers: [
            { text: "सामाजिक व्यवस्थाएँ", correct: false},
            { text: "सामाजिक सिद्धांत और सामाजिक संरचना", correct: true},
            { text: "सामाजिक क्रिया की संरचना", correct: false},
            { text: "अर्थव्यवस्था और समाज", correct: false},
        ] 
    },





];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "start quiz again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 