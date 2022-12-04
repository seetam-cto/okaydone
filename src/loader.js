export default `
#globalLoader{
    position: fixed;
    z-index: 1700;
    top: 0;
    left: 0;
    background-color: #FBF2D9;
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
}
.loader {
 --clr: #FFAD00;
 /* color of spining  */
 width: 50px;
 height: 50px;
 position: relative;
}
.loader div:nth-child(1), .loader div:nth-child(2) {
 content: "";
 position: absolute;
 top: -10px;
 left: -10px;
 width: 100%;
 height: 100%;
 border-radius: 100%;
 border: 8px solid transparent;
 border-top-color: var(--clr);
}
.loader div:nth-child(1) {
 z-index: 100;
 animation: spin 1s infinite;
}
.loader div:nth-child(2) {
 border: 10px solid #ccc;
}
@keyframes spin {
 0% {
  -webkit-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
 }
 100% {
  -webkit-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  transform: rotate(360deg);
 }
}`;