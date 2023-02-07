const cookieImage = document.querySelector('#cookie-image');
const openAnotherBtn = document.querySelector('.open-button');
const sectionTitle = document.querySelector('#todays-luck h1');
const sectionText = document.querySelector('#todays-luck p');
const luckText = document.querySelector('#luck-container');

let luckPhrases = [
    "Quando estiver comendo uma fruta pense na pessoa que plantou a árvore.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "Com o amor eterno dividiremos nossos pensamentos, nossos sonhos e até nós mesmos!.",
    "Deixa o caráter ser formado pela poesia, fixado pelas leis do bom comportamento e aperfeiçoado pela música.",
    "O silêncio é um amigo que nunca trai."
];

cookieImage.addEventListener('click', openCookie);
openAnotherBtn.addEventListener('click', openAnotherCookie);

function openCookie() {
    sectionTitle.innerText = 'Aqui está a sua sorte de hoje:';
    cookieImage.setAttribute('src', './images/opened-cookie.png');
    
    loadRandomLuckPhrase();
    resetTexts();
}

function openAnotherCookie() {
    sectionTitle.innerText = 'Qual é a sua sorte de hoje?';
    cookieImage.setAttribute('src', './images/fortune-cookie.png');

    resetTexts();
}

function resetTexts() {
    cookieImage.classList.toggle('closed');
    luckText.classList.toggle('hidden');
    sectionText.classList.toggle('hidden');
    openAnotherBtn.classList.toggle('hidden');
}

function loadRandomLuckPhrase() {
    let randomIndex = Math.floor(Math.random() * (luckPhrases.length));
    luckText.innerHTML = luckPhrases[randomIndex];
}