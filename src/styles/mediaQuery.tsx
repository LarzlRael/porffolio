
const sm = '360px';
const md = '768px';
const lg = '1024px';



export const sizeMedia = (media: string): string => {
    /*  
    @media ${sizeMedia('xs')} {
         padding-top: 1rem;
     }
    */
    switch (media) {
        case 'xs':
            return `( max-width: ${sm} )`
        case 'sm':
            return `( min-width: ${sm}) and (max-width: ${md} )`
        case 'md':
            return `( min-width: ${md}) and (max-width: ${lg} )`
        case 'lg':
            return `( min-width: ${lg} )`
        default:
            return `( min-width: ${lg} )`
    }
}
