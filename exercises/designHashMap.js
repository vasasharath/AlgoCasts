var MyHashMap = function() {
    this.map = {};
};

MyHashMap.prototype.put = function(key, value) {
    this.map[key]=value;
};


MyHashMap.prototype.get = function(key) {
  let a = this.map[key];
  if(a===0){ return 0; }
  if(!a) { return -1;}
  return a;
};


MyHashMap.prototype.remove = function(key) {
  delete this.map[key];
};