const helloBtn = document.getElementById("helloname")
const ageBtn = document.getElementById("age")
const squareBtn = document.getElementById("square")
const circleBtn = document.getElementById("circle")
const speedBtn = document.getElementById("speed")
const currencyBtn = document.getElementById("currency")
const memoryBtn = document.getElementById("memory")
const walletBtn = document.getElementById("wallet")
const reverseBtn = document.getElementById("reverse")
const oddorevenBtn = document.getElementById("oddoreven")
const userform = document.getElementById("userform")

helloBtn.onclick = function() {
    let username = prompt("Enter your name")
    
    alert("Hello " + username)
}

ageBtn.onclick = function() {
    let rawDob = prompt("Enter your date of birth. MM/DD/YYYY")
    let dob = new Date(rawDob)
    let ageDt = new Date(Date.now() - dob.getTime())
    
    alert("Your age is " + Math.abs(ageDt.getFullYear() - 1970))
}

squareBtn.onclick = function() {
    const side = Number(prompt("Enter square side length"))
    
    alert("Perimeter of the square is equal to: " + side * 4)
}

circleBtn.onclick = function() {
    const radius = Number(prompt("Enter circle radius"))

    alert("Area of the circle is equal to: " + Math.PI * radius ** 2)
}

speedBtn.onclick = function() {
    userform.innerHTML = `
        <span>Enter distance: </span>
        <input id="distance" type="text">
        <br>
        <span >Enter desired time: </span>
        <input id="time" type="text">
        <br>
        <button id="calculatespeed">Calculate your speed</button>
    `
    calculateSpeedBtn = document.getElementById("calculatespeed")
    calculateSpeedBtn.onclick = calculateSpeed
}

function calculateSpeed() {
    const distance = Number(document.getElementById("distance").value)
    const time = Number(document.getElementById("time").value)
    userform.insertAdjacentHTML('beforeend', `
        <span>Speed is: ${distance / time}</span>
    `)
}

currencyBtn.onclick = function() {
    userform.innerHTML = `
        <span>Enter amount in USD: </span>
        <input id="dollars" type="text">
        <br>
        <button id="convert">Convert to EUR</button>
    `
    convertBtn = document.getElementById("convert")
    convertBtn.onclick = convertCurrency
    
}

function convertCurrency() {
    const UsdToEur = 0.94
    const converted = Number(document.getElementById("dollars").value) * UsdToEur
    userform.insertAdjacentHTML('beforeend', `
        <span>Amount in EUR: ${converted}</span>
    `)
}

memoryBtn.onclick = function() {
    userform.innerHTML = `
        <span>Enter flash drive volume in GB: </span>
        <input id="user-memory" type="text">
        <br>
        <button id="memory-calc">Convert to EUR</button>
    `
    memoryCalculateBtn = document.getElementById("memory-calc")
    memoryCalculateBtn.onclick = memoryCalculate
}

function memoryCalculate() {
    const userMb = Number(document.getElementById("user-memory").value) * 1024
    userform.insertAdjacentHTML('beforeend', `
        <span>How many 820 MB files will fit on your drive: ${Math.round(userMb / 820)}</span>
    `)
}

walletBtn.onclick = function() {
    userform.innerHTML = `
        <span>How much money do you have? </span>
        <input id="money" type="text">
        <br>
        <span>How much does the chocolate cost? </span>
        <input id="price" type="text">
        <br>
        <button id="choco-calc">Calculate your chocolate potential :3</button>
    `
    chocolateCalculateBtn = document.getElementById("choco-calc")
    chocolateCalculateBtn.onclick = chocoCalculate
}

function chocoCalculate() {
    const userMoney = Number(document.getElementById("money").value)
    const chocoPrice = Number(document.getElementById("price").value)
    const numberOfChocolates = Math.floor(userMoney / chocoPrice)
    const remainder = userMoney % chocoPrice
    
    userform.insertAdjacentHTML('beforeend', `
        <span>How many chocolates you can buy: ${numberOfChocolates}</span>
        <br>
        <span>How much money you will have after: ${remainder}</span>
    `)
}

reverseBtn.onclick = function() {
    const rawNum = prompt("Enter number")
    const len = rawNum.length
    let num = Number(rawNum)
    let res = 0
    for (let i = 1; i <= len; i++) {
        let remainder = num % 10
        num = (num - remainder) / 10
        res += remainder * (10 ** (len - i))
    }
    alert("Reversed number is " + res)
}

oddorevenBtn.onclick = function() {
    const rawNum = prompt("Enter number")
    const res = Number(rawNum) % 2 == 0 ? "is even" : "is odd"
    alert("Number " + rawNum + " " + res)
}