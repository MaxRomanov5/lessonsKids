

const User = ({name,avatar,tag,location,followers,views,likes}) => {




    return (
        <>
 <div>
<img src={avatar} alt="" />
     <h1>{name}</h1>
<p>{tag}</p>
<p>{location}</p>
<ul>
    <li>
   
        <p>Followers</p>
        <p>{followers}</p>
    </li>
    <li>
        <p>Views</p>
        <p>{views}</p>
    </li>
    <li>
        <p>Likes</p>
        {likes}
    </li>
</ul>
 </div>



 </>
    );
}

export default User;
