function DateFomatter(timestamp) {
    const secondsAgo = Math.floor((Date.now() - timestamp) / 1000);
  
    if(secondsAgo === 0){
      return "just now";
    }
    else if(secondsAgo < 60) {
      return secondsAgo + " second" + (secondsAgo === 1 ? "" : "s") + " ago";
    } 
    else if(secondsAgo < 3600){
      const minutesAgo = Math.floor(secondsAgo / 60);
      return minutesAgo + " minute" + (minutesAgo === 1 ? "" : "s") + " ago";
    } 
    else if(secondsAgo < 86400){
      const hoursAgo = Math.floor(secondsAgo / 3600);
      return hoursAgo + " hour" + (hoursAgo === 1 ? "" : "s") + " ago";
    } 
    else if (secondsAgo < 31536000) {
      const daysAgo = Math.floor(secondsAgo / 86400);
      return daysAgo + " day" + (daysAgo === 1 ? "" : "s") + " ago";
    } 
    else {
      const yearsAgo = Math.floor(secondsAgo / 31536000);
      return yearsAgo + " year" + (yearsAgo === 1 ? "" : "s") + " ago";
    }
  }

  export default DateFomatter;