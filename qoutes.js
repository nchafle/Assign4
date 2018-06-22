
 fetch('http://quotes.rest/qod.json/')
 .then(result => { console.log(result);
                return result.json(); })
   .then(data => { 
       // console.log(data);
         const today = data.contents.quotes[0].quote;
          const writer = data.contents.quotes[0].author;
          console.log (data.contents.quotes[0]);
          document.getElementById("title").innerHTML = data.contents.quotes[0].title;
          document.getElementById("quote").innerHTML =  today ;
          document.getElementById("author").innerHTML = "  ......       "+ writer;
       
              })  

.catch(error => console.log(error)); 

