const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');


// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columns = Math.floor((canvas.width / 20)+1); 
// Number of columns
const rows = Math.floor((canvas.height / 20)); 
const rowsPX = rows*20

const matrix_old = 'abcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()*&^%+-/~{[|`]}'; // Characters to be displayed
const matrix_maybe = 'ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ二コソヤ日012345789Z:・¦｜."=*+-<>'; // Characters to be displayed
const matrix = '259817:."=*+-¦|_Zｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ '; // Characters to be displayed


const stripewidth = Math.round(columns/12.5)


// Create an array of column positions
const columnPositions = Array(columns).fill(0);




const searchParams = new URLSearchParams(window.location.search);




const pride = searchParams.get("pride")
const rand = searchParams.get("rand")
const randColors = parseInt(searchParams.get("randc"))
customColor = searchParams.get("hex")
console.log(searchParams.get("hex"))
const showCursor = searchParams.get("cursor")
const anim = searchParams.get("anim")


customColor = '#' + searchParams.get("hex")




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
    demiboy
];


        
// Function to draw the matrix effect
function drawMatrix() {
    // Set a semi-transparent black background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set the text color
    ctx.fillStyle = '#00ff00';
    if (customColor) {
        ctx.fillStyle = customColor;
    }
    ctx.font = 'bold 15px Cascadia Code';
    
    

    // Iterate over each column
    columnPositions.forEach((position, index) => {
        // Generate a random character
        const char = matrix[Math.floor(Math.random() * matrix.length)];
//          ctx.fillStyle = '#FFFFFF';
        

        currentrow = Math.floor((position / 20));

        if (pride == "1") {
            if (currentrow <= (rows/6)) {
                if ((index <= (stripewidth + currentrow - 2)) & (index >= currentrow - 1)) {
                    ctx.fillStyle = progressPride[0];
                }
                else if ((index <= (stripewidth + currentrow - 2 + stripewidth)) & (index >= currentrow - 2 + stripewidth)) {
                    ctx.fillStyle = progressPride[1];
                }
                else if ((index <= (stripewidth + currentrow - 1 - stripewidth)) & (index >= currentrow - 1 - stripewidth)) {
                    ctx.fillStyle = progressPride[2];
                }
                else if ((index <= (stripewidth + currentrow - 1 - stripewidth - stripewidth)) & (index >= currentrow - 1 - stripewidth - stripewidth)) {
                    ctx.fillStyle = progressPride[3];
                }
                else if (index <= (stripewidth + currentrow - 1 - stripewidth - stripewidth - stripewidth)) {
                    ctx.fillStyle = progressPride[4];
                }
                else {
                    ctx.fillStyle = progressPride[5];
                }
            }
            else if (currentrow <= (rows/6)*2) {
                if ((index <= (stripewidth + currentrow - 2)) & (index >= currentrow - 1)) {
                    ctx.fillStyle = progressPride[0];
                }
                else if ((index <= (stripewidth + currentrow - 2 + stripewidth)) & (index >= currentrow - 2 + stripewidth)) {
                    ctx.fillStyle = progressPride[1];
                }
                else if ((index <= (stripewidth + currentrow - 1 - stripewidth)) & (index >= currentrow - 1 - stripewidth)) {
                    ctx.fillStyle = progressPride[2];
                }
                else if ((index <= (stripewidth + currentrow - 1 - stripewidth - stripewidth)) & (index >= currentrow - 1 - stripewidth - stripewidth)) {
                    ctx.fillStyle = progressPride[3];
                }
                else if (index <= (stripewidth + currentrow - 1 - stripewidth - stripewidth - stripewidth)) {
                    ctx.fillStyle = progressPride[4];
                }
                else {
                    ctx.fillStyle = progressPride[6];
                }
            }
            else if (currentrow <= (rows/6)*3) {
                if ((index <= (stripewidth + currentrow - 2)) & (index >= currentrow - 1)) {
                    ctx.fillStyle = progressPride[0];
                }
                else if ((index <= (stripewidth + currentrow - 2 + stripewidth)) & (index >= currentrow - 2 + stripewidth)) {
                    ctx.fillStyle = progressPride[1];
                }
                else if ((index <= (stripewidth + currentrow - 1 - stripewidth)) & (index >= currentrow - 1 - stripewidth)) {
                    ctx.fillStyle = progressPride[2];
                }
                else if ((index <= (stripewidth + currentrow - 1 - stripewidth - stripewidth)) & (index >= currentrow - 1 - stripewidth - stripewidth)) {
                    ctx.fillStyle = progressPride[3];
                }
                else if (index <= (stripewidth + currentrow - 1 - stripewidth - stripewidth - stripewidth)) {
                    ctx.fillStyle = progressPride[4];
                }
                else {
                    ctx.fillStyle = progressPride[7];
                }
            }
            else if (currentrow <= (rows/6)*4) {
                if ((index <= (stripewidth + (rows-currentrow) - 1)) & (index >= (rows-currentrow))) {
                    ctx.fillStyle = progressPride[0];
                }
                else if ((index <= (stripewidth + (rows-currentrow) - 1 + stripewidth)) & (index >= (rows-currentrow) + stripewidth)) {
                    ctx.fillStyle = progressPride[1];
                }
                else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth)) & (index >= (rows-currentrow) - stripewidth)) {
                    ctx.fillStyle = progressPride[2];
                }
                else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth)) & (index >= (rows-currentrow) - stripewidth - stripewidth)) {
                    ctx.fillStyle = progressPride[3];
                }
                else if (index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth - stripewidth)) {
                    ctx.fillStyle = progressPride[4];
                }
                else {
                    ctx.fillStyle = progressPride[8];
                }
            }
            else if (currentrow <= (rows/6)*5) {
                if ((index <= (stripewidth + (rows-currentrow) - 1)) & (index >= (rows-currentrow))) {
                    ctx.fillStyle = progressPride[0];
                }
                else if ((index <= (stripewidth + (rows-currentrow) - 1 + stripewidth)) & (index >= (rows-currentrow) + stripewidth)) {
                    ctx.fillStyle = progressPride[1];
                }
                else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth)) & (index >= (rows-currentrow) - stripewidth)) {
                    ctx.fillStyle = progressPride[2];
                }
                else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth)) & (index >= (rows-currentrow) - stripewidth - stripewidth)) {
                    ctx.fillStyle = progressPride[3];
                }
                else if (index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth - stripewidth)) {
                    ctx.fillStyle = progressPride[4];
                }
                else {
                    ctx.fillStyle = progressPride[9];
                }
            }
            else if (currentrow > (rows/6)*5) {
                if ((index <= (stripewidth + (rows-currentrow) - 1)) & (index >= (rows-currentrow))) {
                    ctx.fillStyle = progressPride[0];
                }
                else if ((index <= (stripewidth + (rows-currentrow) - 1 + stripewidth)) & (index >= (rows-currentrow) + stripewidth)) {
                    ctx.fillStyle = progressPride[1];
                }
                else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth)) & (index >= (rows-currentrow) - stripewidth)) {
                    ctx.fillStyle = progressPride[2];
                }
                else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth)) & (index >= (rows-currentrow) - stripewidth - stripewidth)) {
                    ctx.fillStyle = progressPride[3];
                }
                else if (index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth - stripewidth)) {
                    ctx.fillStyle = progressPride[4];
                }
                else {
                    ctx.fillStyle = progressPride[1];
                }
            }
        }
        

        else if (pride == "2") {
            if (currentrow <= (rows/6)) {
                ctx.fillStyle = rainbow[0];
            }
            else if (currentrow <= (rows/6)*2) {
                ctx.fillStyle = rainbow[1];
            }
            else if (currentrow <= (rows/6)*3) {
                ctx.fillStyle = rainbow[2];
            }
            else if (currentrow <= (rows/6)*4) {
                ctx.fillStyle = rainbow[3];
            }
            else if (currentrow <= (rows/6)*5) {
                ctx.fillStyle = rainbow[4];
            }
            else if (currentrow > (rows/6)*5) {
                ctx.fillStyle = rainbow[5];
            }
        }


        else if (pride == "3") {

            if (currentrow <= (rows/4)) {
                ctx.fillStyle = nonbinary[0];
            }
            else if (currentrow <= (rows/4)*2) {
                ctx.fillStyle = nonbinary[1];
            }
            else if (currentrow <= (rows/4)*3) {
                ctx.fillStyle = nonbinary[2];
            }
            else if (currentrow > (rows/4)*3) {
                ctx.fillStyle = nonbinary[3];
            }
        }


        else if (pride == "4") {

            if (currentrow <= (rows/5)) {
                ctx.fillStyle = trans[0];
            }
            else if (currentrow <= (rows/5)*2) {
                ctx.fillStyle = trans[1];
            }
            else if (currentrow <= (rows/5)*3) {
                ctx.fillStyle = trans[2];
            }
            else if (currentrow <= (rows/5)*4) {
                ctx.fillStyle = trans[1];
            }
            else if (currentrow > (rows/5)*4) {
                ctx.fillStyle = trans[0];
            }
        }


        else if (pride == "5") {
            if (currentrow <= (rows/7)) {
                ctx.fillStyle = lesbian[0];
            }
            else if (currentrow <= (rows/7)*2) {
                ctx.fillStyle = lesbian[1];
            }
            else if (currentrow <= (rows/7)*3) {
                ctx.fillStyle = lesbian[2];
            }
            else if (currentrow <= (rows/7)*4) {
                ctx.fillStyle = lesbian[3];
            }
            else if (currentrow <= (rows/7)*5) {
                ctx.fillStyle = lesbian[4];
            }
            else if (currentrow <= (rows/7)*6) {
                ctx.fillStyle = lesbian[5];
            }
            else if (currentrow > (rows/7)*6) {
                ctx.fillStyle = lesbian[6];
            }
        }


        else if (pride == "6") {
            if (currentrow <= (rows/5)*2) {
                ctx.fillStyle = bi[0];
            }
            else if (currentrow <= (rows/5)*3) {
                ctx.fillStyle = bi[1];
            }
            else if (currentrow > (rows/5)*3) {
                ctx.fillStyle = bi[2];
            }
        }


        else if (pride == "7") {
            if (currentrow <= (rows/3)) {
                ctx.fillStyle = pan[0];
            }
            else if (currentrow <= (rows/3)*2) {
                ctx.fillStyle = pan[1];
            }
            else if (currentrow > (rows/3)*2) {
                ctx.fillStyle = pan[2];
            }
        }


        else if (pride == "8") {
            if (currentrow <= (rows/4)) {
                ctx.fillStyle = ace[0];
            }
            else if (currentrow <= (rows/4)*2) {
                ctx.fillStyle = ace[1];
            }
            else if (currentrow <= (rows/4)*3) {
                ctx.fillStyle = ace[2];
            }
            else if (currentrow > (rows/4)*3) {
                ctx.fillStyle = ace[3];
            }
        }


        else if (pride == "9") {
            if (currentrow <= (rows/5)) {
                ctx.fillStyle = aromantic[0];
            }
            else if (currentrow <= (rows/5)*2) {
                ctx.fillStyle = aromantic[1];
            }
            else if (currentrow <= (rows/5)*3) {
                ctx.fillStyle = aromantic[2];
            }
            else if (currentrow <= (rows/5)*4) {
                ctx.fillStyle = aromantic[3];
            }
            else if (currentrow > (rows/5)*4) {
                ctx.fillStyle = aromantic[4];
            }
        }


        else if (pride == "10") {
            if (currentrow <= (rows/7)) {
                ctx.fillStyle = agender[0];
            }
            else if (currentrow <= (rows/7)*2) {
                ctx.fillStyle = agender[1];
            }
            else if (currentrow <= (rows/7)*3) {
                ctx.fillStyle = agender[2];
            }
            else if (currentrow <= (rows/7)*4) {
                ctx.fillStyle = agender[3];
            }
            else if (currentrow <= (rows/7)*5) {
                ctx.fillStyle = agender[2];
            }
            else if (currentrow <= (rows/7)*6) {
                ctx.fillStyle = agender[1];
            }
            else if (currentrow > (rows/7)*6) {
                ctx.fillStyle = agender[0];
            }
        }


        else if (pride == "11") {
            if (currentrow <= (rows/5)) {
                ctx.fillStyle = aroace[0];
            }
            else if (currentrow <= (rows/5)*2) {
                ctx.fillStyle = aroace[1];
            }
            else if (currentrow <= (rows/5)*3) {
                ctx.fillStyle = aroace[2];
            }
            else if (currentrow <= (rows/5)*4) {
                ctx.fillStyle = aroace[3];
            }
            else if (currentrow <= (rows/5)*5) {
                ctx.fillStyle = aroace[4];
            }
        }


        else if (pride == "12") {
            if (currentrow <= (rows/5)) {
                ctx.fillStyle = cupioromantic[0];
            }
            else if (currentrow <= (rows/5)*2) {
                ctx.fillStyle = cupioromantic[1];
            }
            else if (currentrow <= (rows/5)*3) {
                ctx.fillStyle = cupioromantic[2];
            }
            else if (currentrow <= (rows/5)*4) {
                ctx.fillStyle = cupioromantic[3];
            }
            else if (currentrow <= (rows/5)*5) {
                ctx.fillStyle = cupioromantic[4];
            }
        }


        else if (pride == "13") {
            if (currentrow <= (rows/7)) {
                ctx.fillStyle = demiboy[0];
            }
            else if (currentrow <= (rows/7)*2) {
                ctx.fillStyle = demiboy[1];
            }
            else if (currentrow <= (rows/7)*3) {
                ctx.fillStyle = demiboy[2];
            }
            else if (currentrow <= (rows/7)*4) {
                ctx.fillStyle = demiboy[3];
            }
            else if (currentrow <= (rows/7)*5) {
                ctx.fillStyle = demiboy[2];
            }
            else if (currentrow <= (rows/7)*6) {
                ctx.fillStyle = demiboy[1];
            }
            else if (currentrow > (rows/7)*6) {
                ctx.fillStyle = demiboy[0];
            }
        }


        else if (pride == "14") {
            if (currentrow <= (rows/7)) {
                ctx.fillStyle = demigirl[0];
            }
            else if (currentrow <= (rows/7)*2) {
                ctx.fillStyle = demigirl[1];
            }
            else if (currentrow <= (rows/7)*3) {
                ctx.fillStyle = demigirl[2];
            }
            else if (currentrow <= (rows/7)*4) {
                ctx.fillStyle = demigirl[3];
            }
            else if (currentrow <= (rows/7)*5) {
                ctx.fillStyle = demigirl[2];
            }
            else if (currentrow <= (rows/7)*6) {
                ctx.fillStyle = demigirl[1];
            }
            else if (currentrow > (rows/7)*6) {
                ctx.fillStyle = demigirl[0];
            }
        }


        else if (pride == "15") {

            if (currentrow <= (rows/5)) {
                ctx.fillStyle = omnisexual[0];
            }
            else if (currentrow <= (rows/5)*2) {
                ctx.fillStyle = omnisexual[1];
            }
            else if (currentrow <= (rows/5)*3) {
                ctx.fillStyle = omnisexual[2];
            }
            else if (currentrow <= (rows/5)*4) {
                ctx.fillStyle = omnisexual[3];
            }
            else if (currentrow > (rows/5)*4) {
                ctx.fillStyle = omnisexual[4];
            }
        }





        else if (rand == "1" || randColors) {
            if (!randColors) {
                const randomColorSchemeIndex = Math.floor(Math.random() * colorSchemes.length);
                var colorScheme = colorSchemes[randomColorSchemeIndex]
                var randomColorIndex = Math.floor(Math.random() * colorScheme.length);
                var randomColor = colorScheme[randomColorIndex];
                ctx.fillStyle = randomColor;
            }
            else {
                var colorScheme = colorSchemes[randColors]
                var randomColorIndex = Math.floor(Math.random() * colorScheme.length);
                var randomColor = colorScheme[randomColorIndex];
                ctx.fillStyle = randomColor;
            }
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
        ctx.fillText(lines[i], x, y + ((i*lineheight)-(lines.length*lineheight/2)) );

    
    // ctx.fillText(frame, canvas.width/4, canvas.height/4)
    // ctx.fillText(badAppleAudio.currentTime, (canvas.width/4)+80, canvas.height/4)


    var frames = animation.length

}

// Function to continuously update and render the animation
function animate() {
    if (!anim) {
        drawMatrix()
        setTimeout(animate, (1000/20));
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
