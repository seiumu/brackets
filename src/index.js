module.exports = function check(str, bracketsConfig) {
  let brackets = '';
  for(var i=0; i<bracketsConfig.length; i++){
    let open = bracketsConfig[i][0];
    let closed = bracketsConfig[i][1];
    brackets = brackets + open+closed;
  }
  console.log("brackets:"+brackets);
  let newstring = '';
    for(var l=0; l<str.length; l++){
      for(var b=0; b<brackets.length; b++){
        if(str[l]===brackets[b]){
        newstring=newstring+str[l];
        break;} // in case the opening and the closing brackets are the same
      }}
      console.log("cleaned string:"+newstring);
    for(var repeat=0; repeat<=(brackets.length)/2; repeat++){
        for(var c=0; c<brackets.length; c+=2){
          let open=brackets[c];
          let closed=brackets[c+1]
          let countOpen = newstring.split(open).length-1;
          let countClosed = newstring.split(closed).length-1;
          //console.log(newstring.split(open).length-1);
          //console.log(newstring.split(closed).length-1);
          let iterate = Math.max(countOpen, countClosed);
          if(countOpen!==countClosed){console.log(false); return false;}
          console.log(iterate);    
          
          while(iterate>0){
            newstring = newstring.replace(open+closed,"");
            console.log("string",newstring);
            iterate--;
          }
        }
    }
    if(newstring!==''){console.log(false); return false;}
  
  console.log(true);
  return true;
}
