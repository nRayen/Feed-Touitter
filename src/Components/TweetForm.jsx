export function TweetForm ({onSubmit}) {
    const handleSubmit = (e) => {

        e.preventDefault()

        const name = e.target.name.value
        const content = e.target.content.value

        if (name == "" || content == ""){
            alert("Formulaire incomplet")
            return
        }
        

        const newTweet = {
            name,
            content,
            like : 0
        }

        onSubmit(newTweet)
        e.target.reset()
    }





    return (
        <form className="addTweet" onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" placeholder='Votre nom' />
            <input type="text" name="content" id="content" placeholder='Votre Tweet' />
            <input type="submit" />
        </form>
    )
}