import localFont from 'next/font/local'

export const icomoon = localFont({
    src: [{
        path: '../../public/fonts/icomoon.woff',
        weight: '400',
        style: 'normal'
    }],
    display: "swap",
})