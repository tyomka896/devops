import express from 'express'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc.js'

dayjs.extend(utc)

const app = express()

app.get('/hello', (_, res) => {
    const current_time = dayjs.utc().format('DD.MM.YYYY hh:mm:ss')

    return res.send({
        message: `Hello, World!`,
        at: current_time,
    })
})

app.listen(3000)
