import axios from 'axios';
import config from './constant';
import store from '../store/index'

export default async (url = "", jsondata = {}, who = 1, type = "POST", conType = "application/json; charset=UTF-8") => {
  if (who == 1) {//开发
    url = config.apiPrefix1 + url;
  } else if (who == 2) {
    url = config.apiPrefix2 + url;
  } else if (who == 3) {
    url = config.apiPrefix3 + url;
  } else if (who == 4) {
    url = config.apiPrefix4 + url;
  }

  return new Promise((resolve, reject) => {

    const user = JSON.parse(localStorage.getItem("user"));
    axios({
      method: type,
      url: url,
      data: JSON.stringify(jsondata),
      headers: {
        Authorization: "bearer " + user.access_token,
        deviceId: user.deviceId
      },
      withCredentials: false
    }).then(res => {
      res.status == 200 ? "" : fadeInOut("系统繁忙，请稍后再试");
      resolve(res)
    }).catch(err => {
      throw new Error(err);
      reject(err)
    })
  })
}

function parseUrl() {
  var url = window.location.href;
  url = String(url);
  if (url.indexOf('?') !== -1) {
    url = url.split('?')[1];
    url = url.replace(/=/g, '":"').replace(/&/g, '","');
    url = JSON.parse('{"' + url + '"}');
    return url;
  }
}

function fadeInOut(msg) {
  var time = null;
  var time1 = null;
  clearInterval(time);
  clearInterval(time1);
  var div = document.createElement("div");
  div.innerHTML = msg;
  div.setAttribute('id', 'msgP');
  document.body.appendChild(div);
  var num = 0;
  var step = 30;
  time = setInterval(function () {
    num += step;
    if (num >= 360) {
      time1 = setTimeout(() => {
        document.body.removeChild(div)
        clearTimeout(time1)
      }, 1000)
      clearInterval(time)
    } else {
      document.getElementById("msgP").style.background = 'rgba(0,0,0,' + (num / 400) + ')';
    }
  }, 50)
}
