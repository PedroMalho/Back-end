function Emitter(){
    // local
    // var events = {};
    // adicionar uma propriedade ao objecto/função
    this.events = {};
}

Emitter.prototype.on = function(type, listener) {
    if (this.events[type] == undefined){
        this.events[type]=[];
    } 
    this.events[type].push(listener);
}

module.exports=Emitter;