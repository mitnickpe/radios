import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Título",
            artist: "6Subtitulo",
            cover: "https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-modern-square-cool-music-for-party-lights-png-image_1629696.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://dc621.4shared.com/img/ztohiMJHfa/520a8639/dlink__2Fdownload_2FztohiMJHfa_2Ff62c7b86_5FOzuna_5FFt_5FFeid_5F-_5FHey_5FM.mp3_3Fsbsr_3D0e56d079203be4daa2e25c2329f542f2ada_26bip_3DMTc5LjYuNTYuMTM0_26lgfp_3D52_26bip_3DMTc5LjYuNTYuMTM0/preview.mp3", 
            active: true,
        },
        {
            name:"Soundstorm - Relax Radio",
            artist: "Lounge",
            cover: "https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-modern-square-cool-music-for-party-lights-png-image_1629696.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=22794",
            active: false,
        },
        {
            name:"SomaFM Left Coast 70's",
            artist: "70's",
            cover: "https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-modern-square-cool-music-for-party-lights-png-image_1629696.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "http://ice2.somafm.com/seventies-128-mp3",
            active: false,
        },
        {
            name:"Hotmixradio 80",
            artist: "80's",
            cover: "https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-modern-square-cool-music-for-party-lights-png-image_1629696.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "http://streaming.hotmixradio.fm/hotmixradio-80-128.mp3?from=tunein",
            active: false,
        },
        {
            name:"Hotmixradio Lounge",
            artist: "Lounge",
            cover: "https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-modern-square-cool-music-for-party-lights-png-image_1629696.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: " http://streaming.hotmixradio.fr/hotmixradio-lounge-128.mp3?from=tunein",
            active: false,
        },
        {
            name:"FFH The 90's",
            artist: "90's",
            cover: "https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-modern-square-cool-music-for-party-lights-png-image_1629696.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "http://mp3.ffh.de/ffhchannels/hq90er.mp3?amsparams=playerid:RTFFHTunein;skey:1581676248",
            active: false,
        },
        {
            name:"Sunshine Live",
            artist: "Electronic",
            cover: "https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-modern-square-cool-music-for-party-lights-png-image_1629696.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "http://sunshinelive.hoerradar.de/sunshinelive-live-mp3-hq?sABC=5r46783o%230%231o70r21o79929956s30p83402120q5q4%23gharva&amsparams=playerid:tunein;skey:1581676603",
            active: false,
        },
        {
            name:"Indie 88",
            artist: "Indie",
            cover: "https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-modern-square-cool-music-for-party-lights-png-image_1629696.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "http://cob-ais.leanstream.co/CINDFM-MP3?args=tunein_01",
            active: false,
        },
        {
            name:"That Christmas Channel",
            artist: "Christmas",
            cover: "https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-modern-square-cool-music-for-party-lights-png-image_1629696.jpg",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "http://los.cdnstream.com/1102_128",
            active: false,
        },
        {
            name:"Fun Kids",
            artist: "Kids",
            cover: "https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-modern-square-cool-music-for-party-lights-png-image_1629696.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://listen-funkids.sharp-stream.com/funkids.mp3?device=tunein",
            active: false,
        },
        {
            name:"Costa del Mar",
            artist: "Lounge",
            cover: "https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-modern-square-cool-music-for-party-lights-png-image_1629696.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "http://stream.cdm-chillout.com:8020/stream-mp3-Chill",
            active: false,
        },
        {
            name:"La Z Latina",
            artist: "Latin Music",
            cover: "https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-modern-square-cool-music-for-party-lights-png-image_1629696.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "http://playerservices.streamtheworld.com/api/livestream-redirect/XEQR_FM.mp3?tdtok=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6ImZTeXA4In0.eyJpc3MiOiJ0aXNydiIsInN1YiI6IjIxMDY0IiwiaWF0IjoxNTgxNjc3NjI5LCJ0ZC1yZWciOmZhbHNlfQ.OMSwENr75iagPVR3nvwThrfNUw1lLuC7x1jCWc5qOAo",
            active: false,
        },
        {
            name:"Soundstorm Relax",
            artist: "Relax",
            cover: "https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-modern-square-cool-music-for-party-lights-png-image_1629696.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "http://stream.soundstorm-radio.com:8000/stream1",
            active: false,
        },
        {
            name:"Defjay Radio",
            artist: "70's",
            cover: "https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-modern-square-cool-music-for-party-lights-png-image_1629696.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "http://ice2.somafm.com/seventies-128-mp3",
            active: false,
        },
        {
            name:"R&B",
            artist: "80's",
            cover: "https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-modern-square-cool-music-for-party-lights-png-image_1629696.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "http://pool.defjay.com/DEFJAY.mp3",
            active: false,
        },
        {
            name:"1.FM Reggae Trade",
            artist: "Reggae",
            cover: "https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-modern-square-cool-music-for-party-lights-png-image_1629696.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "http://strm112.1.fm/reggae_mobile_mp3",
            active: false,
        },
        {
            name:"Bandit Rock",
            artist: "Rock",
            cover: "https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-modern-square-cool-music-for-party-lights-png-image_1629696.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "http://fm02-ice.stream.khz.se/fm02_mp3",
            active: false,
        },
        {
            name:"Classical MPR",
            artist: "Classic",
            cover: "https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-modern-square-cool-music-for-party-lights-png-image_1629696.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "http://cms.stream.publicradio.org/cms.mp3?aw_0_1st.playerid=RadioTime&aw_0_1st.skey=1582304573&aw_0_1st.platform=tunein",
            active: false,
        },
        {
            name:"Amazing Blues",
            artist: "Blues",
            cover: "https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-modern-square-cool-music-for-party-lights-png-image_1629696.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "http://mainstream.amazingradios.com:8000/blues128",
            active: false,
        },
        {
            name:"ABC Jazz",
            artist: "Jazz",
            cover: "https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-modern-square-cool-music-for-party-lights-png-image_1629696.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "http://live-radio02.mediahubaustralia.com/JAZW/mp3/",
            active: false,
        },
        {
            name:"Hits for Kids",
            artist: "Kids",
            cover: "https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-modern-square-cool-music-for-party-lights-png-image_1629696.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "http://s1-webradio.antenne.de/hits-fuer-kids/stream/mp3?aw_0_1st.playerid=tunein.com",
            active: false,
        },
    ];
}

export default chillHop;
