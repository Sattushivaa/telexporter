(function(){
  let sidehandle = document.createElement('div');
  Object.assign(sidehandle.style,{
    position : 'fixed',
    zIndex : 1000,
    padding : '10px',
    top : screen.availHeight/2+'px',
    left : '0px',
    background : 'white',
    borderRadius : '0px 5px 5px 0px',
    border: '1px solid black'
  });
  sidehandle.innerText='📤';
  document.body.append(sidehandle);
  sidehandle.onclick = () =>{
    let messages = '';
    document.querySelectorAll('div.message.spoilers-container').forEach(el=>{
      let sender = 'You';
      let text = '';
      let timel = el.querySelector('.time span.i18n');
      let time = timel.innerHTML;
    
      let ifrecbody = el.querySelector('span.translatable-message');
      
      if(ifrecbody!=null){
        sender = document.querySelector('div.chat.active span.peer-title').innerText;
        text = ifrecbody.innerText;
      } else {
        let cloned = el;
        el.querySelector('span.time').remove();
        el.querySelector('span.clearfix').remove();
        text = el.innerText;
      }
      messages+=`${time}    ${sender} : ${text}\n`;
    })
    let blb = new Blob([messages]);
    let u = URL.createObjectURL(blb);
    let link = document.createElement('a');
    link.download = 'chat.txt';
    link.href = u;
    document.body.append(link);
    link.style.display='none';
    link.click()
  }
})();
