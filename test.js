
console.log('%cTEST', 'color: red');

const pages = [
    // #page0 animations
    [
        {
            timeLineStr: 's---e--',
            animations: [ { f: 'to', options: ['#parallax1', { scale: 1.45, ease: 'Power2.easeInOut' }] } ]
        },
        {
            timeLineStr: '--s---e',
            animations: [
                { f: 'to', options: ['#parallax1', { scale: 1.45, ease: 'Power2.easeInOut' }] },
                { f: 'to', options: ['#parallax1', { scale: 1.45, ease: 'Power2.easeInOut' }] },
            ]
        },
    ],
    [
        {
            timeLineStr: '<',
            animations: [ { f: 'to', options: ['#parallax1', { scale: 1.45, ease: 'Power2.easeInOut' }] } ]
        },
        {
            timeLineStr: '<',
            animations: [ { f: 'to', options: ['#parallax1', { scale: 1.45, ease: 'Power2.easeInOut' }] } ]
        },
        {
            timeLineStr: '<',
            animations: [ { f: 'to', options: ['#parallax1', { scale: 1.45, ease: 'Power2.easeInOut' }] } ]
        },
        {
            timeLineStr: '<',
            animations: [
                { f: 'to', options: ['#parallax1', { scale: 1.45, ease: 'Power2.easeInOut' }] },
                { f: 'to', options: ['#parallax1', { scale: 1.45, ease: 'Power2.easeInOut' }] },
            ]
        },
    ],
    [
        {
            timeLineStr: '>',
            animations: [ { f: 'to', options: ['#parallax1', { scale: 1.45, ease: 'Power2.easeInOut' }] } ]
        },
        {
            timeLineStr: '>',
            animations: [ { f: 'to', options: ['#parallax1', { scale: 1.45, ease: 'Power2.easeInOut' }] } ]
        },
        {
            timeLineStr: '>',
            animations: [ { f: 'to', options: ['#parallax1', { scale: 1.45, ease: 'Power2.easeInOut' }] } ]
        },
        {
            timeLineStr: '>',
            animations: [
                { f: 'to', options: ['#parallax1', { scale: 1.45, ease: 'Power2.easeInOut' }] },
                { f: 'to', options: ['#parallax1', { scale: 1.45, ease: 'Power2.easeInOut' }] },
            ]
        },

    ]
];

const totalTimeLineDuration = 2

pages.forEach((page, i) => {

    console.log('page', i);

    page.forEach(({ timeLineStr, animations }) => {

        const [delay, duration] = timeLineStr === '<' || timeLineStr === '>'
        ? [timeLineStr]
        : timeLineStr.split(/s|e/g)
            .map(proportion => totalTimeLineDuration * (proportion.length / (timeLineStr.length - 2)));
        
        // console.log({ delay, duration }, `for ${animations.length} animations`);

        animations.forEach(({ f, options }) => {
            options[1] = {
                ...options[1],
                ...duration && { duration }
            }
            console.log(...options, delay)
            // animationTl[f](...options, delay);
        });

    })

});



const strTruk = "-s--e-";
strTruk.split(/s|e/g)
.map(proportion => totalTimeLineDuration * (proportion.length / (strTruk.length - 2)));