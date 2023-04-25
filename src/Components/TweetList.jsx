import { useState } from 'react'
import { Tweet } from './Tweets.jsx'
import { TweetForm } from './TweetForm.jsx'




  
  export function TweetList ({importedTweets}) {
    let [tweets, setTweets] = useState(importedTweets)
    
    const onDelete = (tweetId) => {
    setTweets((curr) => curr.filter((t) => t.id !== tweetId))
    }

    const addTweet = (tweet) => {
        setTweets([...tweets, tweet])
    }

    const handleSubmit = (tweet) => {
        const newTweet = {
            id: tweets[tweets.length-1?.id]+1 || 0,
            name: tweet.name,
            content: tweet.content,
            like : 0
        }

        addTweet(newTweet)
    }


    let tweetList = tweets.map((t) => (
    <Tweet
        key = {t.id}
        id = {t.id}
        name= {t.name} 
        content= {t.content} 
        like= {t.like}
        onDelete={() => {onDelete(t.id)}}
    />
    ))


    return (
        <>
            <TweetForm onSubmit={handleSubmit}/>
            <div className='tweet-container'>
                {tweetList.length? tweetList : <div className='noTweets'>Aucun tweets ici...</div>}
            </div>
        </>
    )
}