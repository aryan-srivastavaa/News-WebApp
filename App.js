import React,{useState} from 'react';
import Template from './Template';
import Loading from './Loading';

function App() {
    var url = 'https:newsapi.org/v2/everything?q=cricket&from=2021-10-19&sortBy=publishedAt&apiKey=5d6e173ad74b4f0bab0ca20595b6bf3b';

const [news,setNews] = useState([]);
const [search,setSearch] = useState();
 async function dataa(){
     setSearch(0);
let a = await fetch(url);
let data = await a.json();
setSearch(1);
setNews(data.articles);
console.log(data.articles);
}
    return (
        <div>
           <button className="btn-click" onClick={dataa}>{(search==1)?'Refresh':'GetNews'}</button>
           {(search==0)?<Loading />:news.map((newsdata,index)=>{
              return <Template key={index}
              author={newsdata.author} 
              title={newsdata.title} 
              description={newsdata.description} 
              url={newsdata.url} 
              img={newsdata.urlToImage}
              />
           })}
           {/* {} */}
        </div>
    )
}

export default App
