import { read, write } from '../utils/model.js'

const GET = (req, res) => {
    try {
        let donation = read('donation')

        return res.send(donation)
    } catch (error) {
        return res.send(error.message)
    }
}

const DONATORS = (req, res) => {
    try {
        let donation = read('donation')
        let data = donation.map(dons => {
            dons.userId = dons.donation_Id
            dons.donator = dons.donator
            dons.moneyy = (`${parseFloat(dons.money).toFixed(2)}`)
            return { donator: dons.donator, money: dons.moneyy, userId: dons.userId }
        })
        return res.send(data)
    } catch (error) {
        return res.send(error.message)
    }
}

const POST = (req, res) => {
    try {
        let donation = read('donation')

        let { card, donator, comment, money } = req.body


        if (card.length == 4 && !donator, !money) {
            throw new Error('data not full')
        }
        let newDonat = {
            donation_Id: donation.at(-1).donation_Id + 1 || 1,
            card,
            donator,
            comment,
            money
        }

        donation.push(newDonat)
        write('donation', donation)

        return res.status(201).json({
            status: 201,
            message: "donated",
            data: newDonat
        })
    } catch (error) {
        return res.send(error.message)
    }
}

export default {
    GET,
    DONATORS,
    POST
}