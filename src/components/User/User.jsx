import s from "./User.module.css"

const User = ({name,avatar,tag,location,followers,views,likes}) => {




    return (
        <>
 <div className={s.user}>
    <div className={s.avatarWrap}>
        <img className = {s.avatar} src={avatar} alt="avatar" />
    </div>
     <h1 className = {s.name}>{name}</h1>
    <p className = {s.tag}>@{tag}</p>
    <p className = {s.location}>{location}</p>
<ul className = {s.stats}>
    <li className={s.statsItem}>
        <p className = {s.statsNames}>Followers</p>
        <p className = {s.statsCount}>{followers}</p>
    </li>
    <li className={s.statsItem}>
        <p className = {s.statsNames}>Views</p>
        <p className = {s.statsCount}>{views}</p>
    </li>
    <li className={s.statsItem}>
        <p className = {s.statsNames}>Likes</p>
        <p className = {s.statsCount}>{likes}</p>
    </li>
</ul>
 </div>



 </>
    );
}

export default User;
