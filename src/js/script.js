let pic1 = document.getElementById('pic1');
let pic2 = document.getElementById('pic2');
let pic3 = document.getElementById('pic3');
let imag = document.getElementById('image');
// function loadImage(success, error){
//     pic1.onload = success;
//     pic1.onerror = error;
// }
// loadImage(()=>{
//     console.log('Загрузка завершена');
// }, ()=>{
//     console.log('Ошибка загрузки');
// })

// 2
// function success(){
//     console.log('Загрузка завершена');
//
// }
// function error(){
//     console.log('Ошибка загрузки');
// }
// function loadImage(){
//     return new Promise(function (resolve,reject){
//         pic1.onload = resolve;
//         pic1.onerror = reject;
//     })
//
// }
//
// loadImage().then(success, error);


// 3
function success(){
    console.log('Загрузка завершена');

}
function error(){
    console.log('Ошибка загрузки');
}
function third() {
    console.log('third function');
}

async function loadImage(){
    await new Promise(function (resolve,reject){

        pic1.onload = function(){
            resolve();
            success();
        }
        pic1.onerror = function(){
            reject();
            error();
        }
    })

}
loadImage()
    .then(function() {
        return third();
    })


// 4
//3

// function error(){
//     console.log('Ошибка загрузки');
// }
// async function loadImage4(url){
//     return await new Promise((resolve, reject) => {
//         let pic = new Image();
//         pic.onload = function(){
//             resolve(pic);
//         }
//         pic.onerror = function(){
//             reject();
//             error();
//         }
//         pic.src = url;
//         imag.appendChild(pic);
//
//     })};
//
// loadImage4("img/picture1.jpeg")
//     .then(function() {
//         return loadImage4("img/picture2.jpg");
//     })
//     .then(function() {
//         return loadImage4("img/picture3.jpg");
//     })
//     .then(function third() {
//     console.log('все сообщения загружены');
//
//     });
