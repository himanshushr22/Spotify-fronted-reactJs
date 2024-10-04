import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import img18 from './img18.jpg'
import husnImg from './husn.jpg'
import go from './go.jpg'
import chaa from './cha.jpg'
import suzumeImg from './suzume.jpg'
import dilTuJaan from './DilTu.jpg'
import Aisekyu from './aiseKyu.jpg'
import Co2 from './Co2.jpg'
import Until from './Until.jpg'
import Falak from './Falak.jpg'
import OneVoice from './OneVoice.mp3'
import husn from './husn.mp3'
import LetHer from './LetHerGo.mp3'
import cha from './Cha.mp3'
import suzume from './suzume.mp3'
import dilTu from './dil-tu.mp3'
import AiseKyuu from './aisekyuu.mp3'
import co2 from './co2.mp3'
import until from './until.mp3'
import falak from './falak.mp3'

export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: img8,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 India",
        image: img9,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Trending India",
        image: img10,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Trending Global",
        image: img16,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Mega Hits",
        image: img11,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Happy Favorites",
        image: img15,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    }
]

export const songsData = [
    {
        id:0,
        name: "One Voice",
        image: img18,
        file:OneVoice,
        desc:"Rokudenashi",
        duration:"2:42"
    },
    {
        id:1,
        name: "Anuv Jain - HUSN",
        image: husnImg,
        file:husn,
        desc:"Anuv Jain",
        duration:"3:59"
    },
    {
        id:2,
        name: "Let Her Go",
        image: go,
        file:LetHer,
        desc:"Passenger",
        duration:"4:14"
    },
    {
        id:3,
        name: "Chuttamalle",
        image: chaa,
        file:cha,
        desc:"Devara Second Single ",
        duration:"3:44"
    },
    {
        id:4,
        name: "Suzume",
        image: suzumeImg,
        file:suzume,
        desc:"Suzume no Tojimari",
        duration:"4:30"
    },
    {
        id:5,
        name: "Dil Tu Jaan Tu",
        image: dilTuJaan,
        file:dilTu,
        desc:"Gurnazar Ft. Kritika Yadav ",
        duration:"3:17"
    },
    {
        id:6,
        name: "Aise Kyu",
        image: Aisekyu,
        file:AiseKyuu,
        desc:"Mismatched",
        duration:"5:51"
    },
    {
        id:7,
        name: "Prateek Kuhad",
        image: Co2,
        file:co2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:14"
    },
    {
        id:8,
        name: "Until I Found You",
        image: Until,
        file:until,
        desc:"Stephen Sanchez ft. Em Beihold",
        duration:"2:49"
    },
    {
        id:8,
        name: "Falak Tak",
        image: Falak,
        file:falak,
        desc:"Cover by Ayush Panda ft. Richa Ritambhara Das",
        duration:"3:02"
    }
]