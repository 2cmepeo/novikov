function t(id){
	return document.getElementById(id);
}
function audioApp(){
	var audio = new Audio();
	var audio_index = 1;
	var is_playing = false;
	var playingtrack;
	var trackbox = t("playlist");
	var tracks = {
	    "track1":["April 2021", "Dmitry Novikov", "https://stream27.hearthis.at/listen.mp3?id=5799587&track=p2746494t2a4u2d4s25303u2c4i50354a454a4y22363l58484b4n5b4b4w2w2w2z3q5g4r2&key=9475644&t=-62169987208", "https://www.vedelisteze.sk/wp-content/uploads/2016/03/webucation-adi-header-3sec.gif", "I love I love I love myself <br> I know I know I know myself<br>Ya playa haters you should love yourself brr"],
    "track2":["EKB Trance Mix", "Dmitry Novikov", "https://stream38.hearthis.at/listen.mp3?id=5029405&track=249464b46443y2w2v23394y284a4x2k5a4k574w25333j584642364d4b4y2z284z3q5g4r2&key=9475644&t=-62169987208", "https://data.whicdn.com/images/95666870/original.gif", "니 멋대로 살어 어차피 니 꺼야 <br> 애쓰지 좀 말어 져도 괜찮아 <br> Errbody say La la la la la"],
    "track3":["Hot Summer 20", "Dmitry Novikov", "https://stream39.hearthis.at/listen.mp3?id=5019325&track=447474i5r2b4b4y2v233v203i554u2h5b4b4d484d4f4e4y2k5u2e464f4z28423z3q5g4r2&key=9475644&t=-62169987208", "https://img1.liveinternet.ru/images/attach/d/1/135/365/135365623_91188d02f1a57589ade16892019a204a_dancinggifsonpinterestdansgiftumblr_500256.gif", "손목에 Rolex 이젠 boring <br> 길거릴 도배해 우리 노랜 <br> 놀이라 보기엔 이건 범죄"],
    "track4":["CoronaMix", "Dmitry Novikov", "https://stream40.hearthis.at/listen.mp3?id=5011247&track=u2c47464p2x2849444332374a47464k5y234949423x2i584c4946464e4e403y2z3q5g4r2&key=9475644&t=-62169987208", "https://i.pinimg.com/originals/80/c3/8a/80c38a1cb54732cc759c2ff11b676971.gif", "Lipstick Chateau 와인빛 Color (Lalalala) <br> 하얀 Champagne 버블에 Shower (Lalalala)"],
    "track5":["Melodic Mix", "Dmitry Novikov", "https://stream39.hearthis.at/listen.mp3?id=5916358&track=y2w2d4c4t2y2233344x2u2y2m5k584f5c494m5w253b484x264a4e4j5d4e4a433z3q5g4r2&key=9475644&t=-62169987208", "https://thumbs.gfycat.com/AdventurousMeaslyBluetonguelizard-size_restricted.gif", "I’m creeping in your heart babe <br> 뒤집고 무너트리고 삼켜 <br> 그래 널 훔쳐 탐닉해"],
    "track6":["에라 모르겠다 (FXXK IT)", "BIGBANG", "https://a.tumblr.com/tumblr_oi2vknnVFP1tqmylco1.mp3", "https://i.pinimg.com/originals/a5/4c/f2/a54cf2e024d8eaca58d9ed31dbf6fd02.gif", "술 취했으니 <br> 눈 좀 붙여 잠깐만 <br> 어디 가서 쉴까 <br> baby 난 손만 잡고 자"],
    "track7":["뱅뱅뱅 (BANG BANG BANG)", "BIGBANG", "https://a.tumblr.com/tumblr_nptikgeQ9F1tqmylco1.mp3", "https://pa1.narvii.com/7001/4aa985b84d3172dc487a0b239afdf51b48f488dbr1-728-542_hq.gif", "난 불을 질러 네 심장을 워 <br> 널 미치게 하고 싶어 <br> B.I.G Yea we bang like this 모두 다 같이"],
    
	};
	for(var track in tracks){
		var tb = document.createElement("div");
    var pb = document.createElement("div");
    var tn = document.createElement("div");
    var ta = document.createElement("div");
    var tg = document.createElement("div");
    var tq = document.createElement("div");
    var ti = document.createElement("div");
    
		tb.id = "play_item";
	  pb.className = "item_play fa fa-play";
	  tn.className = "item_name";
	  ta.className = "item_artist";
	  tg.className = "item_gif";
    tq.className = "item_quote";
    ti.className = "item_icons";
    ti.innerHTML = "<i class='fa fa-check' aria-hidden='true'></i> <i class='fa fa-share-alt' aria-hidden='true'></i> <i class='fa fa-heart-o' aria-hidden='true'></i> <i class='fa fa-ellipsis-h' aria-hidden='true'></i> ";
    
		tn.innerHTML = tracks[track][0];
    ta.innerHTML = tracks[track][1];
    pb.id = tracks[track][2];
    tg.innerHTML = "<div style='background: url("+tracks[track][3]+") center center; background-size: cover;'></div>";
    tq.innerHTML = tracks[track][4];
    pb.addEventListener("click", switchTrack);
    
    tb.appendChild(pb);
    tb.appendChild(tn);
    tb.appendChild(ta);
    tb.appendChild(tg);
    tb.appendChild(tq);
    tb.appendChild(ti);
    trackbox.appendChild(tb);
    
		audio_index++;
	}
	audio.addEventListener("ended",function(){
	    t(playingtrack).className = "item_play fa fa-play";
		playingtrack = "";
		is_playing = false;
	});
	function switchTrack(event){
		if(is_playing){
		    if(playingtrack != event.target.id){
			    is_playing = true;
				t(playingtrack).className = "item_play fa fa-play";
          t(playingtrack).parentElement.className = "no";
			    event.target.className = "item_play fa fa-pause";
          event.target.parentElement.className = "active";
			    audio.src = event.target.id;
	            audio.play();
			} else {
			    audio.pause();
			    is_playing = false;
				event.target.className = "item_play fa fa-play";
        event.target.parentElement.className = "no";
			}
		} else {
			is_playing = true;
			event.target.className = "item_play fa fa-pause";
      event.target.parentElement.className = "active";
			if(playingtrack != event.target.id){
				audio.src = event.target.id;
        event.target.parentElement.className = "no";
			}
	        audio.play();
      event.target.parentElement.className = "active";
		}
		playingtrack = event.target.id;
	}
}
window.addEventListener("load", audioApp);
