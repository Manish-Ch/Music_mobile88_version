// Pure mobile version
// Pure mobile version
// Pure mobile version
// Pure mobile version
// Pure mobile version
// Pure mobile version

// let screen_width = window.innerWidth;
// let screen_height = window.innerHeight;
// // console.log(screen_height,screen_width);
// let nav_bar = document.getElementById('nav_bar');
// let master_play = document.getElementById('master-play');
// let mobile = document.getElementById('mobile');
// // nav profile changing app to website
// function mobileVersion() {
//     if(screen_width <= 550){
//         menu_side.style.display = 'none';
//         song_side.style.display = 'none';
//         nav_bar.style.display = 'none';
//         master_play.style.display = 'none';
//         lib.style.display = 'none';
//         rad.style.display = 'none';
//     }
// }
// function normalVersion() {
//     menu_side.style.display = 'grid';
//     song_side.style.display = 'inline';
//     nav_bar.style.display = 'inline';
//     master_play.style.display = 'flex';
// }
// End of nav profile

// song list (second row)
let msl_playlist0 = document.getElementById('msl_playlist');
let msl_songs0 = document.getElementById('msl_songs');
let msl_album0 = document.getElementById('msl_album');
let msl_artists0 = document.getElementById('msl_artists');

function msl_playlist() {
    msl_songs0.style.backgroundColor = '#1f222b';
    msl_songs0.style.color = '#fff';
    msl_album0.style.backgroundColor = '#1f222b';
    msl_album0.style.color = '#fff';
    msl_artists0.style.backgroundColor = '#1f222b';
    msl_artists0.style.color = '#fff';
    msl_playlist0.style.backgroundColor = '#fff';
    msl_playlist0.style.color = '#000';
}
function msl_songs() {
    msl_songs0.style.backgroundColor = '#fff';
    msl_songs0.style.color = '#000';
    msl_album0.style.backgroundColor = '#1f222b';
    msl_album0.style.color = '#fff';
    msl_artists0.style.backgroundColor = '#1f222b';
    msl_artists0.style.color = '#fff';
    msl_playlist0.style.backgroundColor = '#1f222b';
    msl_playlist0.style.color = '#fff';
}
function msl_album() {
    msl_songs0.style.backgroundColor = '#1f222b';
    msl_songs0.style.color = '#fff';
    msl_album0.style.backgroundColor = '#fff';
    msl_album0.style.color = '#000';
    msl_artists0.style.backgroundColor = '#1f222b';
    msl_artists0.style.color = '#fff';
    msl_playlist0.style.backgroundColor = '#1f222b';
    msl_playlist0.style.color = '#fff';
}
function msl_artists() {
    msl_songs0.style.backgroundColor = '#1f222b';
    msl_songs0.style.color = '#fff';
    msl_album0.style.backgroundColor = '#1f222b';
    msl_album0.style.color = '#fff';
    msl_artists0.style.backgroundColor = '#fff';
    msl_artists0.style.color = '#000';
    msl_playlist0.style.backgroundColor = '#1f222b';
    msl_playlist0.style.color = '#fff';
}
// End of song list
let bih1 = document.getElementById('bih1');
let bih2 = document.getElementById('bih2');
let bim1 = document.getElementById('bim1');
let bim2 = document.getElementById('bim2');
let bip1 = document.getElementById('bip1');
let bip2 = document.getElementById('bip2');
let main_name = document.getElementById('main_name');
let main_name23 = true;
bih1.addEventListener('click',bih1f);
bim1.addEventListener('click',bim1f);
bip1.addEventListener('click',bip1f);
main_name.addEventListener('click',()=>{
    if (main_name23) {
        bih1f();
    }
    else{
        bim1f();
    }
})
// Home button 1
function bih1f(){
    bih1.style.display = 'none';
    bih2.style.display = 'inline';
    bih2.style.animation = 'bih22 300ms linear';
    bih2.style.color = '#5fe85d';
    main_name.innerHTML = 'Discover';
    main_name23 = false;
    
    bim2.style.display = 'none';
    bim1.style.display = 'inline';
    bim1.style.animation = 'none';
    bim1.style.color = '#fff';
    
    bip2.style.display = 'none';
    bip1.style.display = 'inline';
    bip1.style.animation = 'none';
}
// Music button 1
function bim1f(){
    bim1.style.display = 'none';
    bim2.style.display = 'inline';
    bim2.style.animation = 'bih22 300ms linear';
    bim2.style.color = '#5fe85d';
    main_name.innerHTML = 'My <span>Music</span>'
    main_name23 = true;
        
    bih2.style.display = 'none';
    bih1.style.display = 'inline';
    bih1.style.animation = 'none';
    bih1.style.color = '#fff';
    
    bip2.style.display = 'none';
    bip1.style.display = 'inline';
    bip1.style.animation = 'none';
    bip1.style.color = '#fff';
}
// profile button 1
function bip1f(){
    bip1.style.display = 'none';
    bip2.style.display = 'inline';
    bip2.style.animation = 'bih22 300ms linear';
    bip2.style.color = '#5fe85d';
    
    bih2.style.display = 'none';
    bih1.style.display = 'inline';
    bih1.style.animation = 'none';
    bih1.style.color = '#fff';

    bim2.style.display = 'none';
    bim1.style.display = 'inline';
    bim1.style.animation = 'none';
    bim1.style.color = '#fff';
}