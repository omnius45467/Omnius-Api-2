/**
 * Created by jeremyrobles on 8/16/16.
 */
Array.prototype.remove= function(){
    var what, a= arguments, L= a.length, ax;
    while(L && this.length){
        what= a[--L];
        while((ax= this.indexOf(what))!= -1){
            this.splice(ax, 1);
        }
    }
    return this;
};
var queue = [
    'test',
    'time',
    'place'
];
var processed = [];

function isInArray(value, array) {
    return array.indexOf(value) > -1;
}

function a(queue, processed){
    queue.forEach(function(url){
        if(!isInArray(url, processed)){
            //remove from queue
            queue.remove(url);
            //move to processed
            processed.push(url);

        }
    });

}
