var posts=["2023/11/13/Unscreen/","2024/01/03/Suno ai/","2023/11/10/bing AI/","2023/11/11/collov.ai/","2023/11/13/dora/","2023/11/09/damo/","2023/11/13/lingma/","2023/11/13/meitu/","2023/11/10/meshy/","2023/11/11/midjourney/","2023/11/12/xinghuo/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };