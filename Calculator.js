let String = ""
const Buttons = document.querySelectorAll('.Button')
Array.from(Buttons).forEach((Button)=>{
    Button.addEventListener('click', (e) =>{
        if(e.target == "="){
            String = eval(String);
            document.querySelectorAll('#Display').value = String
        }else{
            String = String + e.target.innerHTML
            document.querySelectorAll('#Display').value = String
        }
    })
})