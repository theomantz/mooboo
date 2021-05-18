const URLS = require('./newUrls.json')
const urlArray = require('./urls')

const parseUrls = () => {

  const urlList = []
  URLS.forEach(url => {
    urlList.push(url.urls.thumb)
  })
  console.log(URLS.length)
  console.log(urlList.length);
  return  console.log(urlList);

}

// return parseUrls()

function shuffle(a) {
  console.log(a.length)
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

console.log(shuffle(urlArray))