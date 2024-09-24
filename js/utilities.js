function showSectionById(id){

    document.getElementById('donation-form').classList.add('hidden');
    document.getElementById('history-id').classList.add('hidden');


    document.getElementById(id).classList.remove('hidden');
    const data1 = JSON.parse(getValueFromLocalStorage('arafat1'))
    const data2 = JSON.parse(getValueFromLocalStorage('arafat2'))
    const data3 = JSON.parse(getValueFromLocalStorage('arafat3'))
    console.log(data1, data2, data3);

    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    const card3 = document.getElementById('card3');

    card1.innerHTML = `
        <div class="border bg-[#FFFFFF] p-5 md:mt-7 mt-14 shadow-md rounded-lg md:w-[1140px] md:h-[136px] w-[420px] h-[120px] ">
            <h1 class="font-bold text-base md:mt-4" >${data1.amount} Taka is Donated for ${data1.title}</h1>
            <p class="font-light mt-4 text-[#111111]">${data1.date}</p>
        </div>
    `;
    card2.innerHTML = `
        <div class="border bg-[#FFFFFF] p-5 md:mt-7 mt-14 shadow-md rounded-lg md:w-[1140px] md:h-[136px] w-[420px] h-[120px] ">
            <h1 class="font-bold text-base md:mt-4">${data2.amount} Taka is Donated for ${data2.title}</h1>
            <p  class="font-light mt-4 text-[#111111]">${data2.date}</p>
        </div>
    `;
    card3.innerHTML = `
        <div class="border bg-[#FFFFFF] p-5 md:mt-7 mt-14 shadow-md rounded-lg md:w-[1140px] md:h-[136px] w-[420px] h-[120px] ">
            <h1 class="font-bold text-base md:mt-4">${data3.amount} Taka is Donated for ${data3.title}</h1>
            <p  class="font-light mt-4 text-[#111111]">${data3.date}</p>
        </div>
    `;

}

// ___1
document.getElementById('donate-btn1').addEventListener('click', function(){
const getInputValue = document.getElementById('donation-amount1').value;
const convertNum = Number(getInputValue);
const getTitle = document.getElementsByClassName('title1')[0].innerText;
const value = {amount: convertNum, date: new Date(), title: getTitle} 
const setInStorage = setValueInLocalStorage('arafat1',value)
})

// ___2
document.getElementById('donate-btn2').addEventListener('click', function(){
const getInputValue = document.getElementById('donation-amount2').value;
const convertNum = Number(getInputValue);
const getTitle = document.getElementsByClassName('title2')[0].innerText;
const value = {amount: convertNum, date: new Date(), title: getTitle} 
const setInStorage = setValueInLocalStorage('arafat2',value)
})

// ___3
document.getElementById('donate-btn3').addEventListener('click', function(){
const getInputValue = document.getElementById('donation-amount3').value;
const convertNum = Number(getInputValue);
const getTitle = document.getElementsByClassName('title3')[0].innerText;
const value = {amount: convertNum, date: new Date(), title: getTitle} 
const setInStorage = setValueInLocalStorage('arafat3',value)
})


const setValueInLocalStorage = (key,value)=>{
   const result= localStorage.setItem(key,JSON.stringify(value));
   return result
}
const getValueFromLocalStorage = (key)=>{
    const value = localStorage.getItem(key);
    return value
}
// const getValueFromLocalStorage = (key)=>{
//     const value = localStorage.removeItem(key)
//     return value
// }
