console.log('hello world');


function calc() {
    const resetBtn = document.querySelector('#resetBtn')
    const buyAmount = document.querySelector('#buyAmount').value
    const saleAmount = document.querySelector('#saleAmount').value
    const percentage = document.querySelector('#royalties').value/100
    const royalties = saleAmount * percentage
    const output = document.querySelector('#output')
    const gain = saleAmount - royalties - buyAmount

    resetBtn.style.display = 'block'

    if (buyAmount > gain) {
        output.innerHTML = `The buying amount is ${buyAmount} sol, the selling amount is ${saleAmount} sol, the royalties is ${royalties} sol, the total amount credited to your wallet will be ${saleAmount - royalties} sol and your loss is ${gain} sol ☹️`
    } else {
        output.innerHTML = `The buying amount is ${buyAmount} sol, the selling amount is ${saleAmount} sol, the royalties is ${royalties} sol, the total amount credited to your wallet will be ${saleAmount - royalties} sol and your gain is ${gain} sol 😊 `
    }

    // console.log(`the selling amount was ${saleAmount} sol, the royalties was ${royalties} sol, the total amount credited to your wallet will be ${saleAmount - royalties} sol.`);
}
