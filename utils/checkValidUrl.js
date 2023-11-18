export function checkUrl(url, setValidUrl, setLongUrl) {
  const urlRegex = /^(ftp|http|https):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

  if (urlRegex.test(url)) {
    setLongUrl(url);
    setValidUrl(true);
  } else {
    const urlRegex = /^[^ "]+\.[a-zA-Z]{2,}(:[0-9]+)?([/?].*)?$/;
    if(urlRegex.test(url)){
        setLongUrl("http://" + url);
        setValidUrl(true);
      } else {
        setValidUrl(false);
      }
  } 
}