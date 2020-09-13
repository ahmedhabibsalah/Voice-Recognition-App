const btn = document.querySelector('.speak');
const content = document.querySelector(".content");

const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition ;

const recognition = new speechRecognition();

const greetings = [
    "احسن منك",
    "خليك في حالك",
    "ابتعد عني يا خنزير"
]
const weather = [
    "زي الخرا",
    "حر فشخ"
]

recognition.onstart = function (){
    console.log('voice is activated, Start Talk');
}

recognition.onresult =function(event){
    const current = event.resultIndex ;

    const transcript = event.results[current][0].transcript;
    content.textContent= transcript;
    readOutLoud(transcript);
}

btn.addEventListener('click' , ()=>{
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'عيد السؤال تاني';

    if (message.includes('الجو عامل ايه')) {
        const finalText = greetings[Math.floor(Math.random()*greetings.length)];
        speech.text = finalText;
    }
    
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1 ;

    window.speechSynthesis.speak(speech);
}