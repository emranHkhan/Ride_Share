import train from './images/train.png';
import bus from './images/bus.png';
import bike from './images/bike.png';
import car from './images/car.png';


export const vehicles = [
    {
        id: 1,
        type: 'bike',
        price: '$13',
        quantity: 1,
        src: `${bike}`
    },

    {
        id: 2,
        type: 'car',
        price: '$67',
        quantity: 4,
        src: `${car}`
    },

    {
        id: 3,
        type: 'bus',
        price: '$33',
        quantity: 5,
        src: `${bus}`
    },

    {
        id: 4,
        type: 'train',
        price: '$59',
        quantity: 8,
        src: `${train}`
    }
]