/*const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];


const mouse = {
    x: undefined,
    y: undefined,
};

class Particle{
    constructor(x,y,directionX, directionY,size) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
    }
    update(){
        if(this.x > canvas.width || this.x <0){
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0){
            this.directionY = -this.directionY;
        }

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        if (distance < mouse.radius + this.size){
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10){
                this.x +=10;
            }
            if (mouse.x > this.x && this.x > this.size * 10){
                this.x -=10;
            }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10){
                this.x +=10;
            }
            if (mouse.y > this.y && this.y > this.size * 10){
                this.x -=10;
            }
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
    draw(){
        ctx.fillStyle = "#38CCAE";
        ctx.beginPath();
        ctx.arc(this.x ,this.y ,this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function connect(){
    let opacityValue = 1;
    for(let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = (( particlesArray[a].x - particlesArray[b].x)
                * (particlesArray[a].x - particlesArray[b].x))
                     + ((particlesArray[a].y - particlesArray[b].y)
                         * (particlesArray[a].y - particlesArray[b].y));
            if (distance < (canvas.width/6) * (canvas.height/6)) {
                opacityValue = 1 - (distance/20000)
                ctx.strokeStyle = '#fff' + opacityValue + ")";
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

function options(){
    let numberOfParticles = (canvas.height * canvas.width) / 9000;
    for (let i = 0; i < numberOfParticles/2; i++){
        let size = 4;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size *2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size *2);
        let directionX = (Math.random() * 5) - 2.5;
        let directionY = (Math.random() * 5) - 2.5;
        let color = "#fff";
        particlesArray.push(new Particle(x,y,directionX, directionY,size,color));
    }
}



function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    requestAnimationFrame(animate);
    connect();
}

window.addEventListener('resize', function (){
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    mouse.radius = ((canvas.height/80) * (canvas.height/80));
})

options()
animate();
*/