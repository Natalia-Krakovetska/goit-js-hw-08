

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
console.log(Player);
console.log(throttle);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = localStorage.getItem('videoplayer-current-time');

    player.on('timeupdate', throttle(function(data) {        
        localStorage.setItem('videoplayer-current-time',JSON.stringify(data.seconds))
    }),1000);

    console.log(player);
    player.setCurrentTime(CURRENT_TIME).then(function(seconds) {
        seconds = data.seconds;
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                break;    
            default:             
                break;
        }
    });
