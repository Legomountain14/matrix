const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');




const matrix_old = 'abcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()*&^%+-/~{[|`]}'; // Characters to be displayed
const matrix_maybe = 'ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ二コソヤ日012345789Z:・¦｜."=*+-<>'; // Characters to be displayed
const matrix = '259817:."=*+-¦|_Zｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ'; // Characters to be displayed





















function getDimensions() {
    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    columns = Math.floor((canvas.width / 20)+1);
    // Number of columns
    rows = Math.floor((canvas.height / 20)+2);
    rowsPX = rows*20+20
    stripewidth = Math.round(columns/12.5)
    // Create an array of column positions
    columnPositions = Array(columns).fill(0);

    framedata = Array.from({ length: (rows) }, () => new Array(columns).fill({character: null, opacity: 0, color: null, brightness: 0}));

}
getDimensions()


const searchParams = new URLSearchParams(window.location.search);




const pride = searchParams.get("pride")
const rand = searchParams.get("rand")
const randFlagScheme = parseInt(searchParams.get("randc"))
const showCursor = searchParams.get("cursor")
const anim = searchParams.get("anim")




const customColor0 = searchParams.get("color")
const customColor1 = searchParams.get("color1")
const customColor2 = searchParams.get("color2")
const customColor3 = searchParams.get("color3")



function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}


var element = document.getElementById("html");

if (showCursor == "1") {
    element.classList.remove("noCursor");
}
else {
    element.classList.add("noCursor");
}

document.getElementsByTagName("BODY")[0].onresize = function() {getDimensions()};



document.addEventListener('keypress', function(event) {
    if (event.key == "f") {
        openFullscreen(element)
    }
});



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
    '#FFED00',
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
                color = progressPride[0];
            }
            else if ((index <= (stripewidth + currentrow - 2 + stripewidth)) & (index >= currentrow - 2 + stripewidth)) {
                color = progressPride[1];
            }
            else if ((index <= (stripewidth + currentrow - 1 - stripewidth)) & (index >= currentrow - 1 - stripewidth)) {
                color = progressPride[2];
            }
            else if ((index <= (stripewidth + currentrow - 1 - stripewidth - stripewidth)) & (index >= currentrow - 1 - stripewidth - stripewidth)) {
                color = progressPride[3];
            }
            else if (index <= (stripewidth + currentrow - 1 - stripewidth - stripewidth - stripewidth)) {
                color = progressPride[4];
            }
            else {
                color = progressPride[5];
            }
        }
        else if (currentrow <= (rows/6)*2) {
            if ((index <= (stripewidth + currentrow - 2)) & (index >= currentrow - 1)) {
                color = progressPride[0];
            }
            else if ((index <= (stripewidth + currentrow - 2 + stripewidth)) & (index >= currentrow - 2 + stripewidth)) {
                color = progressPride[1];
            }
            else if ((index <= (stripewidth + currentrow - 1 - stripewidth)) & (index >= currentrow - 1 - stripewidth)) {
                color = progressPride[2];
            }
            else if ((index <= (stripewidth + currentrow - 1 - stripewidth - stripewidth)) & (index >= currentrow - 1 - stripewidth - stripewidth)) {
                color = progressPride[3];
            }
            else if (index <= (stripewidth + currentrow - 1 - stripewidth - stripewidth - stripewidth)) {
                color = progressPride[4];
            }
            else {
                color = progressPride[6];
            }
        }
        else if (currentrow <= (rows/6)*3) {
            if ((index <= (stripewidth + currentrow - 2)) & (index >= currentrow - 1)) {
                color = progressPride[0];
            }
            else if ((index <= (stripewidth + currentrow - 2 + stripewidth)) & (index >= currentrow - 2 + stripewidth)) {
                color = progressPride[1];
            }
            else if ((index <= (stripewidth + currentrow - 1 - stripewidth)) & (index >= currentrow - 1 - stripewidth)) {
                color = progressPride[2];
            }
            else if ((index <= (stripewidth + currentrow - 1 - stripewidth - stripewidth)) & (index >= currentrow - 1 - stripewidth - stripewidth)) {
                color = progressPride[3];
            }
            else if (index <= (stripewidth + currentrow - 1 - stripewidth - stripewidth - stripewidth)) {
                color = progressPride[4];
            }
            else {
                color = progressPride[7];
            }
        }
        else if (currentrow <= (rows/6)*4) {
            if ((index <= (stripewidth + (rows-currentrow) - 1)) & (index >= (rows-currentrow))) {
                color = progressPride[0];
            }
            else if ((index <= (stripewidth + (rows-currentrow) - 1 + stripewidth)) & (index >= (rows-currentrow) + stripewidth)) {
                color = progressPride[1];
            }
            else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth)) & (index >= (rows-currentrow) - stripewidth)) {
                color = progressPride[2];
            }
            else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth)) & (index >= (rows-currentrow) - stripewidth - stripewidth)) {
                color = progressPride[3];
            }
            else if (index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth - stripewidth)) {
                color = progressPride[4];
            }
            else {
                color = progressPride[8];
            }
        }
        else if (currentrow <= (rows/6)*5) {
            if ((index <= (stripewidth + (rows-currentrow) - 1)) & (index >= (rows-currentrow))) {
                color = progressPride[0];
            }
            else if ((index <= (stripewidth + (rows-currentrow) - 1 + stripewidth)) & (index >= (rows-currentrow) + stripewidth)) {
                color = progressPride[1];
            }
            else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth)) & (index >= (rows-currentrow) - stripewidth)) {
                color = progressPride[2];
            }
            else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth)) & (index >= (rows-currentrow) - stripewidth - stripewidth)) {
                color = progressPride[3];
            }
            else if (index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth - stripewidth)) {
                color = progressPride[4];
            }
            else {
                color = progressPride[9];
            }
        }
        else if (currentrow > (rows/6)*5) {
            if ((index <= (stripewidth + (rows-currentrow) - 1)) & (index >= (rows-currentrow))) {
                color = progressPride[0];
            }
            else if ((index <= (stripewidth + (rows-currentrow) - 1 + stripewidth)) & (index >= (rows-currentrow) + stripewidth)) {
                color = progressPride[1];
            }
            else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth)) & (index >= (rows-currentrow) - stripewidth)) {
                color = progressPride[2];
            }
            else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth)) & (index >= (rows-currentrow) - stripewidth - stripewidth)) {
                color = progressPride[3];
            }
            else if (index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth - stripewidth)) {
                color = progressPride[4];
            }
            else {
                color = progressPride[10];
            }
        }
        else if (currentrow > (rows/6)*6) {
            if ((index <= (stripewidth + (rows-currentrow) - 1)) & (index >= (rows-currentrow))) {
                color = progressPride[0];
            }
            else if ((index <= (stripewidth + (rows-currentrow) - 1 + stripewidth)) & (index >= (rows-currentrow) + stripewidth)) {
                color = progressPride[1];
            }
            else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth)) & (index >= (rows-currentrow) - stripewidth)) {
                color = progressPride[2];
            }
            else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth)) & (index >= (rows-currentrow) - stripewidth - stripewidth)) {
                color = progressPride[3];
            }
            else if (index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth - stripewidth)) {
                color = progressPride[4];
            }
            else {
                color = progressPride[1];
            }
        }
    }


    else if (pride == "2") {
        if (currentrow <= (rows/6)) {
            color = rainbow[0];
        }
        else if (currentrow <= (rows/6)*2) {
            color = rainbow[1];
        }
        else if (currentrow <= (rows/6)*3) {
            color = rainbow[2];
        }
        else if (currentrow <= (rows/6)*4) {
            color = rainbow[3];
        }
        else if (currentrow <= (rows/6)*5) {
            color = rainbow[4];
        }
        else if (currentrow > (rows/6)*5) {
            color = rainbow[5];
        }
    }


    else if (pride == "3") {

        if (currentrow <= (rows/4)) {
            color = nonbinary[0];
        }
        else if (currentrow <= (rows/4)*2) {
            color = nonbinary[1];
        }
        else if (currentrow <= (rows/4)*3) {
            color = nonbinary[2];
        }
        else if (currentrow > (rows/4)*3) {
            color = nonbinary[3];
        }
    }


    else if (pride == "4") {

        if (currentrow <= (rows/5)) {
            color = trans[0];
        }
        else if (currentrow <= (rows/5)*2) {
            color = trans[1];
        }
        else if (currentrow <= (rows/5)*3) {
            color = trans[2];
        }
        else if (currentrow <= (rows/5)*4) {
            color = trans[1];
        }
        else if (currentrow > (rows/5)*4) {
            color = trans[0];
        }
    }


    else if (pride == "5") {
        if (currentrow <= (rows/7)) {
            color = lesbian[0];
        }
        else if (currentrow <= (rows/7)*2) {
            color = lesbian[1];
        }
        else if (currentrow <= (rows/7)*3) {
            color = lesbian[2];
        }
        else if (currentrow <= (rows/7)*4) {
            color = lesbian[3];
        }
        else if (currentrow <= (rows/7)*5) {
            color = lesbian[4];
        }
        else if (currentrow <= (rows/7)*6) {
            color = lesbian[5];
        }
        else if (currentrow > (rows/7)*6) {
            color = lesbian[6];
        }
    }


    else if (pride == "6") {
        if (currentrow <= (rows/5)*2) {
            color = bi[0];
        }
        else if (currentrow <= (rows/5)*3) {
            color = bi[1];
        }
        else if (currentrow > (rows/5)*3) {
            color = bi[2];
        }
    }


    else if (pride == "7") {
        if (currentrow <= (rows/3)) {
            color = pan[0];
        }
        else if (currentrow <= (rows/3)*2) {
            color = pan[1];
        }
        else if (currentrow > (rows/3)*2) {
            color = pan[2];
        }
    }


    else if (pride == "8") {
        if (currentrow <= (rows/4)) {
            color = ace[0];
        }
        else if (currentrow <= (rows/4)*2) {
            color = ace[1];
        }
        else if (currentrow <= (rows/4)*3) {
            color = ace[2];
        }
        else if (currentrow > (rows/4)*3) {
            color = ace[3];
        }
    }


    else if (pride == "9") {
        if (currentrow <= (rows/5)) {
            color = aromantic[0];
        }
        else if (currentrow <= (rows/5)*2) {
            color = aromantic[1];
        }
        else if (currentrow <= (rows/5)*3) {
            color = aromantic[2];
        }
        else if (currentrow <= (rows/5)*4) {
            color = aromantic[3];
        }
        else if (currentrow > (rows/5)*4) {
            color = aromantic[4];
        }
    }


    else if (pride == "10") {
        if (currentrow <= (rows/7)) {
            color = agender[0];
        }
        else if (currentrow <= (rows/7)*2) {
            color = agender[1];
        }
        else if (currentrow <= (rows/7)*3) {
            color = agender[2];
        }
        else if (currentrow <= (rows/7)*4) {
            color = agender[3];
        }
        else if (currentrow <= (rows/7)*5) {
            color = agender[2];
        }
        else if (currentrow <= (rows/7)*6) {
            color = agender[1];
        }
        else if (currentrow > (rows/7)*6) {
            color = agender[0];
        }
    }


    else if (pride == "11") {
        if (currentrow <= (rows/5)) {
            color = aroace[0];
        }
        else if (currentrow <= (rows/5)*2) {
            color = aroace[1];
        }
        else if (currentrow <= (rows/5)*3) {
            color = aroace[2];
        }
        else if (currentrow <= (rows/5)*4) {
            color = aroace[3];
        }
        else if (currentrow <= (rows/5)*5) {
            color = aroace[4];
        }
    }


    else if (pride == "12") {
        if (currentrow <= (rows/5)) {
            color = cupioromantic[0];
        }
        else if (currentrow <= (rows/5)*2) {
            color = cupioromantic[1];
        }
        else if (currentrow <= (rows/5)*3) {
            color = cupioromantic[2];
        }
        else if (currentrow <= (rows/5)*4) {
            color = cupioromantic[3];
        }
        else if (currentrow <= (rows/5)*5) {
            color = cupioromantic[4];
        }
    }


    else if (pride == "13") {
        if (currentrow <= (rows/7)) {
            color = demiboy[0];
        }
        else if (currentrow <= (rows/7)*2) {
            color = demiboy[1];
        }
        else if (currentrow <= (rows/7)*3) {
            color = demiboy[2];
        }
        else if (currentrow <= (rows/7)*4) {
            color = demiboy[3];
        }
        else if (currentrow <= (rows/7)*5) {
            color = demiboy[2];
        }
        else if (currentrow <= (rows/7)*6) {
            color = demiboy[1];
        }
        else if (currentrow > (rows/7)*6) {
            color = demiboy[0];
        }
    }


    else if (pride == "14") {
        if (currentrow <= (rows/7)) {
            color = demigirl[0];
        }
        else if (currentrow <= (rows/7)*2) {
            color = demigirl[1];
        }
        else if (currentrow <= (rows/7)*3) {
            color = demigirl[2];
        }
        else if (currentrow <= (rows/7)*4) {
            color = demigirl[3];
        }
        else if (currentrow <= (rows/7)*5) {
            color = demigirl[2];
        }
        else if (currentrow <= (rows/7)*6) {
            color = demigirl[1];
        }
        else if (currentrow > (rows/7)*6) {
            color = demigirl[0];
        }
    }


    else if (pride == "15") {

        if (currentrow <= (rows/5)) {
            color = omnisexual[0];
        }
        else if (currentrow <= (rows/5)*2) {
            color = omnisexual[1];
        }
        else if (currentrow <= (rows/5)*3) {
            color = omnisexual[2];
        }
        else if (currentrow <= (rows/5)*4) {
            color = omnisexual[3];
        }
        else if (currentrow > (rows/5)*4) {
            color = omnisexual[4];
        }
    }
}





const rainbowFlag = [
    '#E40303',
    '#FF8C00',
    '#FFED00',
    '#008026',
    '#004CFF',
    '#732982'
];




function flag(flagData, currentrow, index) {
    for (let flagDataRow = 0; flagDataRow <= flagData.length; flagDataRow++) {
        if (currentrow <= (rows/5)*flagDataRow) {
            color = flagData[flagDataRow]
        }
    }
}

function getCustomColor() {
    if (customColor0) {
        color = tinycolor(customColor0)
    }
}


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
                return { character: null, opacity: 0, color: null , brightness: 0 }
            }
            else {
                return { character: val.character, opacity: Math.max(0, val.opacity - 0.05), color: val.color, brightness: Math.max(0, val.brightness - 10) }
            }
        }
    ));




    // Draw Previous Frame
    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {

            var alpha = framedata[row][column].opacity


            // if (rand == "1" || randFlagScheme) {
            //     if (framedata[row][column].color) {
            //         var color = tinycolor(framedata[row][column].color)
            //         getColor(row, column)
            //         ctx.fillStyle = color.toRgbString()
            //     }
            // }
            // else {

            color = tinycolor("#00ff00").setAlpha(alpha)
            getCustomColor()

            if (rand == "1" || randFlagScheme && framedata[row][column].color) {
                color = tinycolor(framedata[row][column].color)
            }
            else {
                // flag(rainbowFlag, row, column)
                getColor(row, column)
            }
            if (color) {
                color = tinycolor(color).setAlpha(alpha)
            }


            brightness = framedata[row][column].brightness


            ctx.fillStyle = color.lighten(brightness).toRgbString()



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
        // flag(rainbowFlag, currentrow, index)





        var alpha
        brightness = 35

        // set text style
        color = tinycolor("#00ff00")
        getCustomColor()
        getColor(currentrow, index)
        if (currentrow < rows) {
            if (framedata[currentrow][index].opacity > 0) {
                alpha = framedata[currentrow][index].opacity
            } else {
                alpha = 1
            }
            if (rand == "1" || randFlagScheme && !framedata[currentrow][index].character) {
                if (!randFlagScheme) {
                    const randomColorSchemeIndex = Math.floor(Math.random() * colorSchemes.length);
                    var colorScheme = colorSchemes[randomColorSchemeIndex]
                    var randomColorIndex = Math.floor(Math.random() * colorScheme.length);
                    var randomColor = colorScheme[randomColorIndex];
                    color = tinycolor(randomColor);
                }
                else {
                    var colorScheme = colorSchemes[randFlagScheme]
                    var randomColorIndex = Math.floor(Math.random() * colorScheme.length);
                    var randomColor = colorScheme[randomColorIndex];
                    color = tinycolor(randomColor);
                }
                if (currentrow < rows) {
                    framedata[currentrow][index].color = color
                }
            }
        }
        else {
            alpha = 0
        }


        color = color.setAlpha(alpha)

        ctx.fillStyle = color.lighten(brightness).toRgbString()




        if (currentrow < rows) {
            framedata[currentrow][index].opacity = color.getAlpha()
            framedata[currentrow][index].character = char
            framedata[currentrow][index].color = color.getOriginalInput()
            framedata[currentrow][index].brightness = brightness
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
    ctx.clearRect(0, 0, canvas.width, canvas.height)
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
function main() {
    if (!anim) {
        drawMatrix()
        setTimeout(main, (1000/25));
    }
    else {
        if (anim == 1) {
            setTimeout(() => { drawCustomAnim(); }, 0);
            setTimeout(() => { playBadApple(); }, 0);
            setTimeout(main, (1000/33));
        }
        else if (anim == 2) {
            setTimeout(() => { drawCustomAnim(); }, 0);
            setTimeout(() => { playBadApple(); }, 1000);
            setTimeout(main, (1000/24));
        }
        else {
            drawCustomAnim()
            setTimeout(main, (1000/20));
        }

    }
    // Adjust the delay (in milliseconds) for desired speed
}

var badAppleAudio = new Audio('./BadApple.ogg')

// Start the animation
main();