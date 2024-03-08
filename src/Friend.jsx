
export default function Friend(friend){
    console.log(friend.friend)
    const {name, website} = friend.friend


    return (
        <div>
            <h3>Name:{name} </h3>
            <p>Website:{website}</p>
        </div>
    )



}