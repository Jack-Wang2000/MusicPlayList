// let input=document.querySelector('input');
// input.onclick=()=>{
//     if(input.value==="Please input your Netease account's phone number"){
//         input.value="";
//         input.style.color='black';
//     }
// }
// input.onblur=()=>{
//     if(input.value===""){
//         input.value="Please input your Netease account's phone number";
//         input.style.color='#CCC';
//     }
// }
// let button=document.getElementById('submit');
// let form=document.querySelector('form');
// let phoneNum=document.getElementById('phoneNum');
// let passwd=document.getElementById('passwd');
// button.onclick()=()=>{
//     form.action.textContent+='?phone='+phoneNum.textContent
//     +'&password='+passwd.textContent;

// }
let phoneNum=document.getElementById("tel");
phoneNum.addEventListener("input",()=>{
    if(phoneNum.validity.tooShort){
        phoneNum.setCustomValidity("Tel number is set to be 11 numbers")
    }
})