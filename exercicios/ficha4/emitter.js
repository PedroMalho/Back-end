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
};

Emitter.prototype.emit = function(event_name) {
    if (this.events[event_name] != undefined) {
        this.events[event_name].forEach(function(listener) {
            listener();
        });
    };
};


module.exports=Emitter;