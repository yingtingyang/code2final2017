

function getPosition(){
	var p = $( "p:first" );
    var position = p.position();
    $( "p:last" ).text( "left: " + position.left + ", top: " + position.top );

}
function createCanvas(){

         canvas = createCanvas(500,500);
         canvas.position(position.left,position.y);
}
	