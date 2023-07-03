// images setup
const images = [
    "img/slide06-2.jpg",
    "img/ins17.jpg",
    "img/best15.jpg",
];

// content setup
const texts = [
    ["Earth", "Surface gravity: 9.807 m/s²"],
    ["Mars", "Surface gravity: 3.711 m/s²"],
    ["Venus", "Surface gravity: 8.87 m/s²"],
]

// init plugin 
rgbKineticSlider = new rgbKineticSlider({
    /* ---------------- Plugin parameters */

    // images and content sources
    slideImages: images, // array of images >demo size : 1920 x 1080
    itemsTitles: texts, // array of titles / subtitles

    // displacement images sources
    backgroundDisplacementSprite: 'img/displacement/5.jpg', // slide displacement image 
    cursorDisplacementSprite: 'img/displacement/1.jpg', // cursor displacement image

    // cursor displacement effect 
    cursorImgEffect: true, // enable cursor effect
    cursorTextEffect: false, // enable cursor text effect
    cursorScaleIntensity: 0.65, // cursor effect intensity
    cursorMomentum: 0.14, // lower is slower

    // swipe 
    swipe: true, // enable swipe
    swipeDistance: window.innerWidth * 0.1, // swipe distance - ex : 580
    swipeScaleIntensity: 2, // scale intensity during swipping

    // slide transition
    slideTransitionDuration: 1, // transition duration
    transitionScaleIntensity: 30, // scale intensity during transition
    transitionScaleAmplitude: 160, // scale amplitude during transition

    // regular navigation
    nav: true, // enable navigation
    navElement: '.main-nav', // set nav class


    // image rgb effect
    imagesRgbEffect: false, // enable img rgb effect
    imagesRgbIntensity: 0.9, // set img rgb intensity
    navImagesRgbIntensity: 80, // set img rgb intensity for regular nav 

    // texts settings
    textsDisplay: false, // show title
    textsSubTitleDisplay: false, // show subtitles
    textsTiltEffect: true, // enable text tilt
    googleFonts: ['Playfair Display:700', 'Roboto:400'], // select google font to use
    buttonMode: false, // enable button mode for title
    textsRgbEffect: true, // enable text rgb effect
    textsRgbIntensity: 0.03, // set text rgb intensity
    navTextsRgbIntensity: 15, // set text rgb intensity for regular nav

    textTitleColor: 'white', // title color
    textTitleSize: 125, // title size
    mobileTextTitleSize: 125, // title size
    textTitleLetterspacing: 3, // title letterspacing

    textSubTitleColor: 'white', // subtitle color ex : 0x000000
    textSubTitleSize: 21, // subtitle size
    mobileTextSubTitleSize: 21, // mobile subtitle size
    textSubTitleLetterspacing: 2, // subtitle letter spacing
    textSubTitleOffsetTop: 90, // subtitle offset top
    mobileTextSubTitleOffsetTop: 90, // mobile subtitle offset top

});

setInterval(function () {
    $('nav .next').click();
}, 5000)