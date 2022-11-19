
export default function Counter({likes,dislikes}) {

    return (
        <div className="counter">


            <div className='counterDiv'>
                <img alt='' src="/img/brokenHeart.png"></img>
                <h3>{dislikes}</h3>
            </div>

            <div className='counterDiv'>
                <img alt='' src="/img/heart.png"></img>
                <h3>{likes}</h3>
            </div>
        </div>

    )

}