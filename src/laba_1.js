import React from 'react';
const HelloWorld = () => {
    function likePage(){
        alert('I am happy that you like it!');
    }
    function dislikePage(){
       alert('I will try to improve it!');
       
    }
    return(
        <div>
            <img width={110} height={100} src = "https://www.meme-arsenal.com/memes/442fb7e9d3773f0bfbdf636bc0e55447.jpg" onClick={likePage}/>
            <img width={100} height={100} style={{ margin: '0px 0px 0px 50px'}} src = "https://polotnos.cdnbro.com/posts/1861600-stikery-dizlaik-22.jpg" onClick={dislikePage}/>
        </div>
    );
};

export default HelloWorld;