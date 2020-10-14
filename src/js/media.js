const obj = {
  $buffers: function () {
    var arr = [];
    for (var i = 0; i < this.buffered.length; i++) {
      arr[i] = {
        from: this.buffered.start(i),
        to: this.buffered.end(i),
      };
    }
    return arr;
  },

  $currentTime: function () {
    const obj = {};
    obj.hours = Math.floor(this.currentTime / 60 / 60);
    obj.minutes = Math.floor((this.currentTime / 60) % 60);
    obj.seconds = Math.floor(this.currentTime % 60);
    return obj;
  },

  $duration: function () {
    const obj = {};
    obj.hours = Math.floor(this.duration / 60 / 60);
    obj.minutes = Math.floor((this.duration / 60) % 60);
    obj.seconds = Math.floor(this.duration % 60);
    return obj;
  },

  $timeLeft: function () {
    const obj = {};
    obj.hours = Math.floor((this.duration - this.currentTime) / 60 / 60);
    obj.minutes = Math.floor(((this.duration - this.currentTime) / 60) % 60);
    obj.seconds = Math.floor((this.duration - this.currentTime) % 60);
    return obj;
  },
};

for (let i in obj) {
  Object.defineProperty(HTMLVideoElement.prototype, i, {
    get: obj[i],
  });
  Object.defineProperty(HTMLAudioElement.prototype, i, {
    get: obj[i],
  });
}
