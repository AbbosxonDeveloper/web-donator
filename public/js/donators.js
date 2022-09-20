async function GetDonators() {
    let response = await (await fetch('/donators')).json()
    console.log(response);
    for (let user of response) {
        donators_table.innerHTML += `
        <tr bgcolor="gold" style="color: grey;">
                    <td>${user.userId}</td>
                    <th rowspan="4" colspan="4">${user.donator}</th>
                    <th rowspan="4" colspan="4">${user.money} so'm</th>
                </tr>
        `
    }
}

GetDonators()