console.log('assalomu aleykum');


Donate_form.onsubmit = async(e) => {
    e.preventDefault()
    console.log(CardInput.value.length);
    if (CardInput.value.length < 4) {
        errors.textContent = 'card 4 ta raqamdan iborat bolishi kk'
        setTimeout(() => {
            errors.textContent = null
        }, 2000)
        return
    }
    let response = await (await fetch('/donation', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            donator: nameInput.value,
            card: CardInput.value,
            money: MoneyInput.value,
            comment: commentArea.value
        })
    })).json()

    not_donated.className = 'glass_donate'
    ok_close.onclick = () => not_donated.className = 'alert-none'

    setTimeout(() => {
        not_donated.className = 'alert-none'
    }, 6800)



    name_res.textContent += nameInput.value
    card_res.textContent += CardInput.value
    money_res.textContent += MoneyInput.value
    comment_res.textContent += commentArea.value

    nameInput.value = null
    CardInput.value = null
    MoneyInput.value = null
    commentArea.value = null


    console.log(response);
}