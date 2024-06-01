

const User = ({name,age}) => {
console.log(age);

    return (
        <>
 <div>

     <h1>{name}</h1>
{age>=18 && <p>Adult</p>}
 </div>



 </>
    );
}

export default User;
