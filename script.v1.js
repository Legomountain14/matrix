const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');


// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columns = Math.floor((canvas.width / 20)+1);
// Number of columns
const rows = Math.floor((canvas.height / 20)+2);
const rowsPX = rows*20+20

const matrix_old = 'abcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()*&^%+-/~{[|`]}'; // Characters to be displayed
const matrix_maybe = 'ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ二コソヤ日012345789Z:・¦｜."=*+-<>'; // Characters to be displayed
const matrix = '259817:."=*+-¦|_Zｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ'; // Characters to be displayed


const stripewidth = Math.round(columns/12.5)


// Create an array of column positions
const columnPositions = Array(columns).fill(0);




const searchParams = new URLSearchParams(window.location.search);




const pride = searchParams.get("pride")
const rand = searchParams.get("rand")
const randColors = parseInt(searchParams.get("randc"))
var customColor = searchParams.get("hex")
console.log(searchParams.get("hex"))
const showCursor = searchParams.get("cursor")
const anim = searchParams.get("anim")






console.log(customColor)

var element = document.getElementById("html");

if (showCursor == "1") {
    element.classList.remove("noCursor");
}
else {
    element.classList.add("noCursor");
}



const randomColors = [
    "#E40303",
    "#FF8C00",
    "#FFED00",
    "#008026",
    "#004DFF",
    "#750787",
    "#FFFFFF",
    "#FFAFC8",
    "#74D7EE",
    "#814612",
    "#2D2D2D",
    "#FFF433",
    "#FFF8E7",
    "#9B59D0"
];
const progressPride = [
    '#814612',
    '#2D2D2D',
    '#74D7EE',
    '#FFAFC8',
    '#FFFFFF',
    '#E40303',
    '#FF8C00',
    '#008026',
    '#004CFF',
    '#732982'
];
const rainbow = [
    '#E40303',
    "#FF8C00",
    "#FFED00",
    '#008026',
    '#004CFF',
    '#732982'
];
const nonbinary = [
    '#FFF433',
    '#FFF8E7',
    '#9B59D0',
    '#2D2D2D'
];
const trans = [
    '#5BCEFA',
    '#F5A9B8',
    '#FFFFFF'
];
const lesbian = [
    '#D52D00',
    '#EF7627',
    '#FF9A56',
    '#FFFFFF',
    '#D162A4',
    '#B55690',
    '#A30262'
];
const bi = [
    '#D60270',
    '#9B4F96',
    '#0038A8'
];
const pan = [
    '#FF218C',
    '#FFD800',
    '#21B1FF'
];
const ace = [
    '#2D2D2D',
    '#A3A3A3',
    '#FFFFFF',
    '#800080'
];
const aromantic = [
    '#3DA542',
    '#A7D379',
    '#FFFFFF',
    '#A9A9A9',
    '#2D2D2D'
];
const agender = [
    '#2D2D2D',
    '#BCC4C7',
    '#FFFFFF',
    '#B7F684'
];
const aroace = [
    '#E28C00',
    '#ECCD00',
    '#FFFFFF',
    '#62AEDC',
    '#203856'
];
const cupioromantic = [
    '#FCA9A3',
    '#FDC5C0',
    '#FFFFFF',
    '#C8BFE6',
    '#A0A0A0'
];
const demiboy = [
    '#7F7F7F',
    '#C4C4C4',
    '#9DD7EA',
    '#FFFFFF'
];
const demigirl = [
    '#7F7F7F',
    '#C4C4C4',
    '#FDADC8',
    '#FFFFFF'
];
const omnisexual = [
    '#FE9ACE',
    '#FF53BF',
    '#200044',
    '#6760FE',
    '#8EA6FF'
];


const colorSchemes = [
    randomColors,
    progressPride,
    rainbow,
    nonbinary,
    trans,
    lesbian,
    bi,
    pan,
    ace,
    aromantic,
    agender,
    aroace,
    cupioromantic,
    demiboy,
    demigirl,
    omnisexual
];

function getColor(currentrow, index) {
    if (pride == "1") {
        if (currentrow <= (rows/6)) {
            if ((index <= (stripewidth + currentrow - 2)) & (index >= currentrow - 1)) {
                customColor = progressPride[0];
            }
            else if ((index <= (stripewidth + currentrow - 2 + stripewidth)) & (index >= currentrow - 2 + stripewidth)) {
                customColor = progressPride[1];
            }
            else if ((index <= (stripewidth + currentrow - 1 - stripewidth)) & (index >= currentrow - 1 - stripewidth)) {
                customColor = progressPride[2];
            }
            else if ((index <= (stripewidth + currentrow - 1 - stripewidth - stripewidth)) & (index >= currentrow - 1 - stripewidth - stripewidth)) {
                customColor = progressPride[3];
            }
            else if (index <= (stripewidth + currentrow - 1 - stripewidth - stripewidth - stripewidth)) {
                customColor = progressPride[4];
            }
            else {
                customColor = progressPride[5];
            }
        }
        else if (currentrow <= (rows/6)*2) {
            if ((index <= (stripewidth + currentrow - 2)) & (index >= currentrow - 1)) {
                customColor = progressPride[0];
            }
            else if ((index <= (stripewidth + currentrow - 2 + stripewidth)) & (index >= currentrow - 2 + stripewidth)) {
                customColor = progressPride[1];
            }
            else if ((index <= (stripewidth + currentrow - 1 - stripewidth)) & (index >= currentrow - 1 - stripewidth)) {
                customColor = progressPride[2];
            }
            else if ((index <= (stripewidth + currentrow - 1 - stripewidth - stripewidth)) & (index >= currentrow - 1 - stripewidth - stripewidth)) {
                customColor = progressPride[3];
            }
            else if (index <= (stripewidth + currentrow - 1 - stripewidth - stripewidth - stripewidth)) {
                customColor = progressPride[4];
            }
            else {
                customColor = progressPride[6];
            }
        }
        else if (currentrow <= (rows/6)*3) {
            if ((index <= (stripewidth + currentrow - 2)) & (index >= currentrow - 1)) {
                customColor = progressPride[0];
            }
            else if ((index <= (stripewidth + currentrow - 2 + stripewidth)) & (index >= currentrow - 2 + stripewidth)) {
                customColor = progressPride[1];
            }
            else if ((index <= (stripewidth + currentrow - 1 - stripewidth)) & (index >= currentrow - 1 - stripewidth)) {
                customColor = progressPride[2];
            }
            else if ((index <= (stripewidth + currentrow - 1 - stripewidth - stripewidth)) & (index >= currentrow - 1 - stripewidth - stripewidth)) {
                customColor = progressPride[3];
            }
            else if (index <= (stripewidth + currentrow - 1 - stripewidth - stripewidth - stripewidth)) {
                customColor = progressPride[4];
            }
            else {
                customColor = progressPride[7];
            }
        }
        else if (currentrow <= (rows/6)*4) {
            if ((index <= (stripewidth + (rows-currentrow) - 1)) & (index >= (rows-currentrow))) {
                customColor = progressPride[0];
            }
            else if ((index <= (stripewidth + (rows-currentrow) - 1 + stripewidth)) & (index >= (rows-currentrow) + stripewidth)) {
                customColor = progressPride[1];
            }
            else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth)) & (index >= (rows-currentrow) - stripewidth)) {
                customColor = progressPride[2];
            }
            else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth)) & (index >= (rows-currentrow) - stripewidth - stripewidth)) {
                customColor = progressPride[3];
            }
            else if (index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth - stripewidth)) {
                customColor = progressPride[4];
            }
            else {
                customColor = progressPride[8];
            }
        }
        else if (currentrow <= (rows/6)*5) {
            if ((index <= (stripewidth + (rows-currentrow) - 1)) & (index >= (rows-currentrow))) {
                customColor = progressPride[0];
            }
            else if ((index <= (stripewidth + (rows-currentrow) - 1 + stripewidth)) & (index >= (rows-currentrow) + stripewidth)) {
                customColor = progressPride[1];
            }
            else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth)) & (index >= (rows-currentrow) - stripewidth)) {
                customColor = progressPride[2];
            }
            else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth)) & (index >= (rows-currentrow) - stripewidth - stripewidth)) {
                customColor = progressPride[3];
            }
            else if (index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth - stripewidth)) {
                customColor = progressPride[4];
            }
            else {
                customColor = progressPride[9];
            }
        }
        else if (currentrow > (rows/6)*5) {
            if ((index <= (stripewidth + (rows-currentrow) - 1)) & (index >= (rows-currentrow))) {
                customColor = progressPride[0];
            }
            else if ((index <= (stripewidth + (rows-currentrow) - 1 + stripewidth)) & (index >= (rows-currentrow) + stripewidth)) {
                customColor = progressPride[1];
            }
            else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth)) & (index >= (rows-currentrow) - stripewidth)) {
                customColor = progressPride[2];
            }
            else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth)) & (index >= (rows-currentrow) - stripewidth - stripewidth)) {
                customColor = progressPride[3];
            }
            else if (index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth - stripewidth)) {
                customColor = progressPride[4];
            }
            else {
                customColor = progressPride[1];
            }
        }
    }


    else if (pride == "2") {
        if (currentrow <= (rows/6)) {
            customColor = rainbow[0];
        }
        else if (currentrow <= (rows/6)*2) {
            customColor = rainbow[1];
        }
        else if (currentrow <= (rows/6)*3) {
            customColor = rainbow[2];
        }
        else if (currentrow <= (rows/6)*4) {
            customColor = rainbow[3];
        }
        else if (currentrow <= (rows/6)*5) {
            customColor = rainbow[4];
        }
        else if (currentrow > (rows/6)*5) {
            customColor = rainbow[5];
        }
    }


    else if (pride == "3") {

        if (currentrow <= (rows/4)) {
            customColor = nonbinary[0];
        }
        else if (currentrow <= (rows/4)*2) {
            customColor = nonbinary[1];
        }
        else if (currentrow <= (rows/4)*3) {
            customColor = nonbinary[2];
        }
        else if (currentrow > (rows/4)*3) {
            customColor = nonbinary[3];
        }
    }


    else if (pride == "4") {

        if (currentrow <= (rows/5)) {
            customColor = trans[0];
        }
        else if (currentrow <= (rows/5)*2) {
            customColor = trans[1];
        }
        else if (currentrow <= (rows/5)*3) {
            customColor = trans[2];
        }
        else if (currentrow <= (rows/5)*4) {
            customColor = trans[1];
        }
        else if (currentrow > (rows/5)*4) {
            customColor = trans[0];
        }
    }


    else if (pride == "5") {
        if (currentrow <= (rows/7)) {
            customColor = lesbian[0];
        }
        else if (currentrow <= (rows/7)*2) {
            customColor = lesbian[1];
        }
        else if (currentrow <= (rows/7)*3) {
            customColor = lesbian[2];
        }
        else if (currentrow <= (rows/7)*4) {
            customColor = lesbian[3];
        }
        else if (currentrow <= (rows/7)*5) {
            customColor = lesbian[4];
        }
        else if (currentrow <= (rows/7)*6) {
            customColor = lesbian[5];
        }
        else if (currentrow > (rows/7)*6) {
            customColor = lesbian[6];
        }
    }


    else if (pride == "6") {
        if (currentrow <= (rows/5)*2) {
            customColor = bi[0];
        }
        else if (currentrow <= (rows/5)*3) {
            customColor = bi[1];
        }
        else if (currentrow > (rows/5)*3) {
            customColor = bi[2];
        }
    }


    else if (pride == "7") {
        if (currentrow <= (rows/3)) {
            customColor = pan[0];
        }
        else if (currentrow <= (rows/3)*2) {
            customColor = pan[1];
        }
        else if (currentrow > (rows/3)*2) {
            customColor = pan[2];
        }
    }


    else if (pride == "8") {
        if (currentrow <= (rows/4)) {
            customColor = ace[0];
        }
        else if (currentrow <= (rows/4)*2) {
            customColor = ace[1];
        }
        else if (currentrow <= (rows/4)*3) {
            customColor = ace[2];
        }
        else if (currentrow > (rows/4)*3) {
            customColor = ace[3];
        }
    }


    else if (pride == "9") {
        if (currentrow <= (rows/5)) {
            customColor = aromantic[0];
        }
        else if (currentrow <= (rows/5)*2) {
            customColor = aromantic[1];
        }
        else if (currentrow <= (rows/5)*3) {
            customColor = aromantic[2];
        }
        else if (currentrow <= (rows/5)*4) {
            customColor = aromantic[3];
        }
        else if (currentrow > (rows/5)*4) {
            customColor = aromantic[4];
        }
    }


    else if (pride == "10") {
        if (currentrow <= (rows/7)) {
            customColor = agender[0];
        }
        else if (currentrow <= (rows/7)*2) {
            customColor = agender[1];
        }
        else if (currentrow <= (rows/7)*3) {
            customColor = agender[2];
        }
        else if (currentrow <= (rows/7)*4) {
            customColor = agender[3];
        }
        else if (currentrow <= (rows/7)*5) {
            customColor = agender[2];
        }
        else if (currentrow <= (rows/7)*6) {
            customColor = agender[1];
        }
        else if (currentrow > (rows/7)*6) {
            customColor = agender[0];
        }
    }


    else if (pride == "11") {
        if (currentrow <= (rows/5)) {
            customColor = aroace[0];
        }
        else if (currentrow <= (rows/5)*2) {
            customColor = aroace[1];
        }
        else if (currentrow <= (rows/5)*3) {
            customColor = aroace[2];
        }
        else if (currentrow <= (rows/5)*4) {
            customColor = aroace[3];
        }
        else if (currentrow <= (rows/5)*5) {
            customColor = aroace[4];
        }
    }


    else if (pride == "12") {
        if (currentrow <= (rows/5)) {
            customColor = cupioromantic[0];
        }
        else if (currentrow <= (rows/5)*2) {
            customColor = cupioromantic[1];
        }
        else if (currentrow <= (rows/5)*3) {
            customColor = cupioromantic[2];
        }
        else if (currentrow <= (rows/5)*4) {
            customColor = cupioromantic[3];
        }
        else if (currentrow <= (rows/5)*5) {
            customColor = cupioromantic[4];
        }
    }


    else if (pride == "13") {
        if (currentrow <= (rows/7)) {
            customColor = demiboy[0];
        }
        else if (currentrow <= (rows/7)*2) {
            customColor = demiboy[1];
        }
        else if (currentrow <= (rows/7)*3) {
            customColor = demiboy[2];
        }
        else if (currentrow <= (rows/7)*4) {
            customColor = demiboy[3];
        }
        else if (currentrow <= (rows/7)*5) {
            customColor = demiboy[2];
        }
        else if (currentrow <= (rows/7)*6) {
            customColor = demiboy[1];
        }
        else if (currentrow > (rows/7)*6) {
            customColor = demiboy[0];
        }
    }


    else if (pride == "14") {
        if (currentrow <= (rows/7)) {
            customColor = demigirl[0];
        }
        else if (currentrow <= (rows/7)*2) {
            customColor = demigirl[1];
        }
        else if (currentrow <= (rows/7)*3) {
            customColor = demigirl[2];
        }
        else if (currentrow <= (rows/7)*4) {
            customColor = demigirl[3];
        }
        else if (currentrow <= (rows/7)*5) {
            customColor = demigirl[2];
        }
        else if (currentrow <= (rows/7)*6) {
            customColor = demigirl[1];
        }
        else if (currentrow > (rows/7)*6) {
            customColor = demigirl[0];
        }
    }


    else if (pride == "15") {

        if (currentrow <= (rows/5)) {
            customColor = omnisexual[0];
        }
        else if (currentrow <= (rows/5)*2) {
            customColor = omnisexual[1];
        }
        else if (currentrow <= (rows/5)*3) {
            customColor = omnisexual[2];
        }
        else if (currentrow <= (rows/5)*4) {
            customColor = omnisexual[3];
        }
        else if (currentrow > (rows/5)*4) {
            customColor = omnisexual[4];
        }
    }





    else if (rand == "1" || randColors) {
        if (!randColors) {
            const randomColorSchemeIndex = Math.floor(Math.random() * colorSchemes.length);
            var colorScheme = colorSchemes[randomColorSchemeIndex]
            var randomColorIndex = Math.floor(Math.random() * colorScheme.length);
            var randomColor = colorScheme[randomColorIndex];
            customColor = randomColor;
        }
        else {
            var colorScheme = colorSchemes[randColors]
            var randomColorIndex = Math.floor(Math.random() * colorScheme.length);
            var randomColor = colorScheme[randomColorIndex];
            customColor = randomColor;
        }
        framedata[currentrow][index].color = customColor
    }

}


var framedata = Array.from({ length: (rows) }, () => new Array(columns).fill({character: null, opacity: 0, color: null}));

// Function to draw the matrix effect
function drawMatrix() {
    // Set a semi-transparent black background
    // ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = 'bold 15px Cascadia Code';

    // Edit framedata
    framedata = framedata.map(row =>
        row.map(val => {
            if (val.opacity == 0) {
                return { character: null, opacity: 0, color: null }
            }
            else {
                return { character: val.character, opacity: Math.max(0, val.opacity - 0.05), color: val.color }
            }
        }
    ));




    // Draw Previous Frame
    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {

            var alpha = framedata[row][column].opacity


            if (rand == "1" || randColors) {
                if (framedata[row][column].color) {
                    var color = tinycolor(framedata[row][column].color)
                    getColor(row, column)
                    ctx.fillStyle = color.toRgbString()
                }
            }
            else {
                var color = tinycolor("00ff00").setAlpha(alpha)
                getColor(row, column)
                ctx.fillStyle = color.toRgbString()
                if (customColor) {
                    color = tinycolor(customColor).setAlpha(alpha)
                    ctx.fillStyle = color.toRgbString()
                }
            }

            const char = framedata[row][column].character
            // const char = matrix[Math.floor(Math.random() * matrix.length)];

            ctx.font = 'bold 15px Cascadia Code';

            ctx.fillText(char, column * 20, row * 20);
        }
    }

    // Iterate over each column
    columnPositions.forEach((position, index) => {
        // Generate a random character
        const char = matrix[Math.floor(Math.random() * matrix.length)];


        currentrow = Math.floor((position / 20));

        getColor(currentrow, index)


        var alpha
        if (currentrow < rows) {
            if (framedata[currentrow][index].opacity > 0) {
                alpha = framedata[currentrow][index].opacity
            }else {
                alpha = 1
            }
        }
        else {
            alpha = 0
        }




        // Set text style
        var color = tinycolor("00ff00").setAlpha(alpha)
        ctx.fillStyle = color.toRgbString()
        if (customColor) {
            color = tinycolor(customColor).setAlpha(alpha)
            ctx.fillStyle = color.toRgbString()
        }




        if (currentrow < rows) {
            framedata[currentrow][index].opacity = color.getAlpha()
            framedata[currentrow][index].character = char
        }


        // Display the character at the current position]
        ctx.fillText(char, index * 20, position);

        // Move the position down
        columnPositions[index] += 20;

        // Reset the position if it exceeds the canvas height
        if (columnPositions[index] > canvas.height && Math.random() > 0.975) {
            columnPositions[index] = 0;
        }
    });
}


async function playBadApple() {
    badAppleAudio.play();
}
var frame = 0

async function drawCustomAnim() {
    var lineheight = 25
    frame += 1
    if (anim == "1") {
        const { animation1 } = await import('./animations/animation1.js')
        var animation = animation1
        lineheight = 30
        ctx.font = 'bold 25px Cascadia Code';
    }
    else if (anim == "2") {
        const { animation2 } = await import('./animations/animation2.js')
        var animation = animation2
        lineheight = 15
        ctx.font = 'bold 15px Cascadia Code';
    }
    else if (anim == "3") {
        const { animation3 } = await import('./animations/animation3.js')
        var animation = animation3
        ctx.font = 'bold 25px Cascadia Code';
    }
    else if (anim == "4") {
        const { animation4 } = await import('./animations/animation4.js')
        var animation = animation4
        ctx.font = 'bold 25px Cascadia Code';
    }
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';


    if (frame >= animation.length) {
        frame = 0
    }
    var lines = animation[frame].split('\n');



    var x = canvas.width/2
    var y = canvas.height/2
    ctx.textAlign = "center";
    for (var i = 0; i<lines.length; i++)
        ctx.fillText(lines[i], x, y + ((i*lineheight)-((lines.length*lineheight)/2)) );


    // ctx.fillText(frame, canvas.width/4, canvas.height/4)
    // ctx.fillText(badAppleAudio.currentTime, (canvas.width/4)+80, canvas.height/4)


    var frames = animation.length

}

// Function to continuously update and render the animation
function animate() {
    if (!anim) {
        drawMatrix()
        setTimeout(animate, (1000/25));
    }
    else {
        if (anim == 1) {
            setTimeout(() => { drawCustomAnim(); }, 0);
            setTimeout(() => { playBadApple(); }, 0);
            setTimeout(animate, (1000/33));
        }
        else if (anim == 2) {
            setTimeout(() => { drawCustomAnim(); }, 0);
            setTimeout(() => { playBadApple(); }, 1000);
            setTimeout(animate, (1000/24));
        }
        else {
            drawCustomAnim()
            setTimeout(animate, (1000/20));
        }

    }
    // Adjust the delay (in milliseconds) for desired speed
}

var badAppleAudio = new Audio('./BadApple.ogg')

// Start the animation
animate();