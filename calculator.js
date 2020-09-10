let screen = document.getElementById('screen');
let screenValue = ""
buttons = document.querySelectorAll('button');

for (item of buttons) {
    item.addEventListener('click',(e)=>{
        btnText = e.target.innerText;
        console.log(btnText);
        if (btnText == 'x') {
            btnText = '*';
            screenValue += btnText;
            screen.value = screenValue;
        }
        else if (btnText == "AC") {
            screenValue = '';
            screen.value = screenValue;
        }
        else if (btnText == "=") {
            screen.value = eval(screenValue)
        }
        else if (btnText == 'Del') {
            screenValue -= btnText;
            screen.value = screenValue;
        }
        else{
            screenValue += btnText;
            screen.value = screenValue;
        }
        
    })
}
