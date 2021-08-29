
const SendTeleNotif = async()=>{
    const botID = "1921909531:AAGLurVfcrqMKzgk2DEzSE2SkYyFpYYKEo0"
    const chatID = 73874853
    const text = "YOOO"
    const url = "https://api.telegram.org/bot" +botID+ "/sendmessage?chat_id=" + chatID + "&parse_mode=Markdown&text=" + text; 
    console.log(url)
   await fetch(url);
    return
}

export default SendTeleNotif()