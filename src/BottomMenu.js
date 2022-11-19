
export default function BottomMenu({setLikes,setDislikes, setImageClicked, likes,dislikes}) {

    function handleLike() {
        if(likes<10&&dislikes<10){
            setLikes(prev=>prev+1)
            setImageClicked(true)
        }

    }
    function handleDislike() {
        if(likes<10&&dislikes<10){
            setDislikes(prev=>prev+1)
            setImageClicked(true)
        }

    }
    return (
        <div className="likes">


            <div className='likeDiv'>
                <img alt='' src="/img/dislike.png" onClick={handleDislike}></img>
            </div>

            <div className='likeDiv'>
                <img alt='' src="/img/like.png" onClick={handleLike}></img>

            </div>
        </div>
    )
}