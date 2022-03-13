
  function time(){
    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let session = 'AM';

        if (hour === 0) {
            hour = 12;
        }
        if (hour > 12) {
            hour = hour - 12;
            period = 'PM';
        }
        hour = (hour < 10) ? '0' + hour : hour;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        let currentTime = hour + ':' + minutes + ':' + seconds + ' ' + session;

        document.querySelector('.clock').innerText = currentTime;
  };

  setInterval(time , 1000);