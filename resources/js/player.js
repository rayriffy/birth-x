let player = document.getElementById("player");
function mute(){
    player.muted = !player.muted;
    if(player.muted){
        document.getElementById("mute").id = "unmute";
    }else{
        document.getElementById("unmute").id = "mute";
    }
    update();
}