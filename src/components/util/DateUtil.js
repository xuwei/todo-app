import Moment from 'moment';
import { DateFormat } from '../Configs'
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);


const yyyyMMdd = (date)=> {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate())
}

const datesByRange = (from, to) => {

    const range = moment().range(from, to)
    const dates = Array.from(range.by('day'))
    const formattedDates = dates.map((date, index) => {
        return { "order" : index, "date" : moment(date).format(DateFormat.DefaultFormat) }
    })
    return formattedDates
}

const last7days = ()=> {
    moment().format(DateFormat.DefaultFormat)
    const end = moment()
    const start = moment().subtract(6, 'days')
    return datesByRange(start, end)
}

const last30days = ()=> {
    moment().format(DateFormat.DefaultFormat)
    const end = moment()
    const start = moment().subtract(29, 'days')
    return datesByRange(start, end)
}

const last90days = ()=> {
    moment().format(DateFormat.DefaultFormat)
    const end = moment()
    const start = moment().subtract(89, 'days')
    return datesByRange(start, end)
}

export default { yyyyMMdd, datesByRange, last7days, last30days, last90days }