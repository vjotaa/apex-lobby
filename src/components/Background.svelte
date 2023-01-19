<div class="flex justify-center items-center h-screen w-full bg-blue-300 background">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <slot></slot>
</div>

<style>
    
@keyframes move {
    100% {
        transform: translateZ(-1px);
        transform: rotate(360deg);
    }
}

.background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    overflow: hidden;
}

.background span {
    z-index: -99;
    width: 16vmin;
    height: 16vmin;
    border-radius: 16vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 36;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}


.background span:nth-child(0) {
    color: #FFACAC;
    top: 84%;
    left: 53%;
    animation-duration: 118s;
    animation-delay: -127s;
    transform-origin: -22vw -18vh;
    box-shadow: 32vmin 0 4.58376735647815vmin currentColor;
}
.background span:nth-child(1) {
    color: #b54a78;
    top: 89%;
    left: 68%;
    animation-duration: 106s;
    animation-delay: -104s;
    transform-origin: -19vw 16vh;
    box-shadow: 32vmin 0 4.06835684330925vmin currentColor;
}
.background span:nth-child(2) {
    color: #603c9f;
    top: 77%;
    left: 77%;
    animation-duration: 43s;
    animation-delay: -31s;
    transform-origin: 11vw 6vh;
    box-shadow: 32vmin 0 4.86083423545826vmin currentColor;
}
.background span:nth-child(3) {
    color: #FFACAC;
    top: 1%;
    left: 98%;
    animation-duration: 53s;
    animation-delay: -119s;
    transform-origin: 8vw 4vh;
    box-shadow: 32vmin 0 4.076603669502163vmin currentColor;
}
.background span:nth-child(4) {
    color: #b54a78;
    top: 84%;
    left: 97%;
    animation-duration: 86s;
    animation-delay: -68s;
    transform-origin: 21vw 22vh;
    box-shadow: 32vmin 0 4.121443522195396vmin currentColor;
}
.background span:nth-child(5) {
    color: #FFACAC;
    top: 32%;
    left: 4%;
    animation-duration: 50s;
    animation-delay: -83s;
    transform-origin: -10vw -21vh;
    box-shadow: -32vmin 0 4.382058290533886vmin currentColor;
}
.background span:nth-child(6) {
    color: #b54a78;
    top: 3%;
    left: 6%;
    animation-duration: 28s;
    animation-delay: -5s;
    transform-origin: 9vw -12vh;
    box-shadow: 32vmin 0 4.511693885657518vmin currentColor;
}
.background span:nth-child(7) {
    color: #b54a78;
    top: 72%;
    left: 65%;
    animation-duration: 104s;
    animation-delay: -88s;
    transform-origin: 13vw -20vh;
    box-shadow: -32vmin 0 4.006240229143068vmin currentColor;
}
.background span:nth-child(8) {
    color: #FFACAC;
    top: 81%;
    left: 64%;
    animation-duration: 49s;
    animation-delay: -67s;
    transform-origin: 24vw -24vh;
    box-shadow: 32vmin 0 4.113640535908541vmin currentColor;
}
.background span:nth-child(9) {
    color: #b54a78;
    top: 3%;
    left: 23%;
    animation-duration: 110s;
    animation-delay: -74s;
    transform-origin: -8vw -9vh;
    box-shadow: -32vmin 0 4.418480921852981vmin currentColor;
}
.background span:nth-child(10) {
    color: #603c9f;
    top: 73%;
    left: 24%;
    animation-duration: 91s;
    animation-delay: -170s;
    transform-origin: 21vw -15vh;
    box-shadow: 32vmin 0 4.2069351658868515vmin currentColor;
}
.background span:nth-child(11) {
    color: #b54a78;
    top: 95%;
    left: 7%;
    animation-duration: 55s;
    animation-delay: -133s;
    transform-origin: 19vw -22vh;
    box-shadow: -32vmin 0 4.906773355397024vmin currentColor;
}
.background span:nth-child(12) {
    color: #FFACAC;
    top: 85%;
    left: 88%;
    animation-duration: 8s;
    animation-delay: -29;
    transform-origin: 13vw 23vh;
    box-shadow: 32vmin 0 4.927492483794237vmin currentColor;
}
.background span:nth-child(13) {
    color: #b54a78;
    top: 33%;
    left: 14%;
    animation-duration: 70;
    animation-delay: -106s;
    transform-origin: 7vw 2vh;
    box-shadow: -32vmin 0 4.926970238789783vmin currentColor;
}
.background span:nth-child(14) {
    color: #b54a78;
    top: 44%;
    left: 33%;
    animation-duration: 170;
    animation-delay: -84s;
    transform-origin: 11vw 10vh;
    box-shadow: 32vmin 0 4.971022962906278vmin currentColor;
}
.background span:nth-child(15) {
    color: #FFACAC;
    top: 45%;
    left: 46%;
    animation-duration: 70s;
    animation-delay: -3s;
    transform-origin: 18vw 10vh;
    box-shadow: -32vmin 0 4.11100131068473vmin currentColor;
}
.background span:nth-child(16) {
    color: #603c9f;
    top: 84%;
    left: 13%;
    animation-duration: 111s;
    animation-delay: -110s;
    transform-origin: 20vw 24vh;
    box-shadow: -32vmin 0 4.631634202161633vmin currentColor;
}
.background span:nth-child(17) {
    color: #b54a78;
    top: 3%;
    left: 81%;
    animation-duration: 50s;
    animation-delay: -67s;
    transform-origin: 7vw 22vh;
    box-shadow: 32vmin 0 4.114291600597042vmin currentColor;
}
</style>