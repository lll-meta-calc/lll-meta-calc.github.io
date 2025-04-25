'use strict';

const SPEED_BUSTER_PRICE = 730;
const OTHER_BUSTER_PRICE = 950;
const PILLS_PRICE = 450;
const STIMULATOR_PRICE = 550;


function selectInput(e) {
  document.getElementById(e).focus();
  document.getElementById(e).select();
}

function changeInput(e) {
  const inputVal = document.querySelector(`input[name=${e}]`);
  const paragQ = document.getElementById(`${e}PQ`)
  const paragCartQ = document.getElementById(`${e}PCartQ`)
  const paragP = document.getElementById(`${e}PP`)
  const paragCartP = document.getElementById(`${e}PCartP`)
  const paragPFP = document.getElementById(`${e}PFP`)
  const paragPCartFP = document.getElementById(`${e}PCartFP`)

  if (inputVal.value > 999) {
    inputVal.value = 999
  } 

  switch(e) {
    case "pill" :      
      priceCalc(PILLS_PRICE, inputVal.value, paragQ, paragCartQ, paragP, paragCartP, paragPFP, paragPCartFP)
      break;
    case "energ" :
      priceCalc(SPEED_BUSTER_PRICE, inputVal.value, paragQ, paragCartQ, paragP, paragCartP, paragPFP, paragPCartFP)
      break;
    case "stim" :
      priceCalc(STIMULATOR_PRICE, inputVal.value, paragQ, paragCartQ, paragP, paragCartP, paragPFP, paragPCartFP)
      break;
    case "atk" :
      priceCalc(OTHER_BUSTER_PRICE, inputVal.value, paragQ, paragCartQ, paragP, paragCartP, paragPFP, paragPCartFP)
      break;
    case "def" :
      priceCalc(OTHER_BUSTER_PRICE, inputVal.value, paragQ, paragCartQ, paragP, paragCartP, paragPFP, paragPCartFP)
      break;
    case "leech" :
      priceCalc(OTHER_BUSTER_PRICE, inputVal.value, paragQ, paragCartQ, paragP, paragCartP, paragPFP, paragPCartFP)
      break;
  }

  const finalPrice = document.getElementById(`finalPrice`)
  finalPrice.textContent = Intl.NumberFormat("ru-RU").format(
                           parseFloat(document.getElementById(`leechPFP`).textContent.replace(/\s/g, "")) + 
                           parseFloat(document.getElementById(`defPFP`).textContent.replace(/\s/g, "")) +
                           parseFloat(document.getElementById(`atkPFP`).textContent.replace(/\s/g, "")) + 
                           parseFloat(document.getElementById(`stimPFP`).textContent.replace(/\s/g, "")) + 
                           parseFloat(document.getElementById(`energPFP`).textContent.replace(/\s/g, "")) + 
                           parseFloat(document.getElementById(`pillPFP`).textContent.replace(/\s/g, ""))
                          )

}

function priceCalc(eachPrice, quantity, paragQ, paragCartQ, paragP, paragCartP, paragPFP, paragPCartFP) {
  paragQ.textContent = `${quantity}`
  paragCartQ.textContent = `${quantity}`

  if (parseInt(quantity) > 100) {
    paragP.textContent = `${eachPrice*0.9}`
    paragCartP.textContent = `${eachPrice*0.9}`
    paragPFP.textContent = `${Intl.NumberFormat("ru-RU").format(eachPrice*0.9*quantity)}`
    paragPCartFP.textContent = `${Intl.NumberFormat("ru-RU").format(eachPrice*0.9*quantity)}`
    return Intl.NumberFormat("ru-RU").format(eachPrice*0.9*quantity)
  } else if (parseInt(quantity) > 50) {
    paragP.textContent = `${eachPrice*0.95}`
    paragCartP.textContent = `${eachPrice*0.95}`
    paragPFP.textContent = `${Intl.NumberFormat("ru-RU").format(eachPrice*0.95*quantity)}`
    paragPCartFP.textContent = `${Intl.NumberFormat("ru-RU").format(eachPrice*0.95*quantity)}`
    return Intl.NumberFormat("ru-RU").format(eachPrice*0.95*quantity)
  } else {
    paragP.textContent = `${eachPrice}`
    paragCartP.textContent = `${eachPrice}`
    paragPFP.textContent = `${Intl.NumberFormat("ru-RU").format(eachPrice*quantity)}`
    paragPCartFP.textContent = `${Intl.NumberFormat("ru-RU").format(eachPrice*quantity)}`
    return Intl.NumberFormat("ru-RU").format(eachPrice*quantity)
  }
}

async function clickBTN(id) {
/*  try {
    await navigator.clipboard.writeText(`${document.getElementsByClassName(`stim123N`).stim.textContent} x${document.getElementsByClassName(`stim123Q`).stimPCartQ.textContent}\n${document.getElementsByClassName(`pill123N`).pill.textContent} x${document.getElementsByClassName(`pill123Q`).pillPCartQ.textContent}\n${document.getElementsByClassName(`atk123N`).atk.textContent} x${document.getElementsByClassName(`atk123Q`).atkPCartQ.textContent}\n${document.getElementsByClassName(`energ123N`).energ.textContent} x${document.getElementsByClassName(`energ123Q`).energPCartQ.textContent}\n${document.getElementsByClassName(`def123N`).def.textContent} x${document.getElementsByClassName(`def123Q`).defPCartQ.textContent}\n${document.getElementsByClassName(`leech123N`).leech.textContent} x${document.getElementsByClassName(`leech123Q`).leechPCartQ.textContent}\n\nВсего на: ${document.getElementsByClassName(`finalPrice123`).finalPrice.textContent}$`);
  } catch (err) {
    console.error('Failed to copy: ', err);
  } */

  const backgroundImageUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAQ4AQMAAADSHVMAAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURYjO74nP8JCGMTwAAAABdFJOU/4a4wd9AAAED0lEQVR42u3PQQEAAAQEMA30L4uXFLc1WG2WKWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYeHccIj+8AGdv9tBJ8gkbAAAAABJRU5ErkJggg==';
const generatedImageConatiner = document.querySelector('.generatedImage');

const downloadImage = async (url) => {
  return new Promise(resolve => {
    const img = new Image();

    img.src = url;
    img.crossOrigin = "use-credentials";

    img.onload = () => resolve(img);
  })
}

const getRandomText = () => (Math.random() + 1).toString(36).substring(7);

const getFakeData = async () => {
  const text1 = getRandomText();
  const text2 = getRandomText();
  
  return {text1, text2};
}

const generateImage = async () => {
  const background = await downloadImage(backgroundImageUrl);
  const data = await getFakeData();
  const text = `${data.text1} ${data.text2}`.toUpperCase();
  const canvas = document.createElement('canvas');

  canvas.width = 700;
  canvas.height = 400;
  
  const canvasMiddleX = canvas.width / 2;
  const canvasMiddleY = canvas.height / 2;

  const context = canvas.getContext('2d');

  context.drawImage(background, 0, 0);
  context.font = "40pt Calibri";
  context.textAlign = "center";
  context.fillText(text, canvasMiddleX, canvasMiddleY);

  const generatedImageUrl = canvas.toDataURL();
  const generatedImage = await downloadImage(generatedImageUrl);

  generatedImageConatiner.append(generatedImage);

  try {
    const response = await fetch(generatedImage);
    const blob = await response.blob();
    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob
      })
    ]);
    console.log('Image copied.');
  } catch (err) {
    console.error(err.name, err.message);
  }
}

generateImage();


  
  
}

/*const SPEED_BUSTER_PRICE = 730;
const OTHER_BUSTER_PRICE = 950;
const PILLS_PRICE = 450;
const STIMULATOR_PRICE = 550;

let armourBusterQuantity = 111;
let damageBusterQuantity = 222;
let leechBusterQuantity = 333;

let speedBusterQuantity = 444;
let pillsQuantity = 555;
let stimulatorQuantity = 666;

let allQuantity = armourBusterQuantity+damageBusterQuantity+speedBusterQuantity+leechBusterQuantity+pillsQuantity+stimulatorQuantity

let allPrice = (armourBusterQuantity+damageBusterQuantity+leechBusterQuantity)*OTHER_BUSTER_PRICE + speedBusterQuantity*SPEED_BUSTER_PRICE + pillsQuantity*PILLS_PRICE + stimulatorQuantity*STIMULATOR_PRICE

if (allQuantity > 100) {
  console.log(`Броня: ${armourBusterQuantity} шт. \nУрон: ${damageBusterQuantity} шт. \nСустейн: ${leechBusterQuantity} шт. \nЭнергетос: ${speedBusterQuantity} шт. \nТаблетос: ${pillsQuantity} шт. \nУкол: ${stimulatorQuantity} шт. \n`)
  console.log(`Скидка 10%`)
  console.log(`Цена без скидки: ${Intl.NumberFormat("ru-RU").format(parseInt(allPrice))}$`)
  allPrice = allPrice*.9
  console.log(`Общая цена: ${Intl.NumberFormat("ru-RU").format(parseInt(allPrice))}$`)
} else if (allQuantity > 50) {
  console.log(`Броня: ${armourBusterQuantity} шт. \nУрон: ${damageBusterQuantity} шт. \nСустейн: ${leechBusterQuantity} шт. \nЭнергетос: ${speedBusterQuantity} шт. \nТаблетос: ${pillsQuantity} шт. \nУкол: ${stimulatorQuantity} шт. \n`)
  console.log(`Скидка 5%`)
  console.log(`Цена без скидки: ${Intl.NumberFormat("ru-RU").format(parseInt(allPrice))}$`)
  allPrice = allPrice*.95
  console.log(`Общая цена: ${Intl.NumberFormat("ru-RU").format(parseInt(allPrice))}$`)
} else {
  console.log(`Броня: ${armourBusterQuantity} шт. \nУрон: ${damageBusterQuantity} шт. \nСустейн: ${leechBusterQuantity} шт. \nЭнергетос: ${speedBusterQuantity} шт. \nТаблетос: ${pillsQuantity} шт. \nУкол: ${stimulatorQuantity} шт. \n`)
  console.log(`Без скидки`)
  console.log(`Общая цена: ${Intl.NumberFormat("ru-RU").format(parseInt(allPrice))}$`)
}
*/
