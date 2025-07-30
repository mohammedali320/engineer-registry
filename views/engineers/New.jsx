const React = require('react')

function Show(props){
    return(
        <div>
            <h1>{props.engineer.name}</h1>
            <a href='/engineers'>Go back to Index Page</a>
            <p>
                The {props.engineer.name} specialty is  {props.engineer.specialty} and 
                {props.engineer.available? ' is available': ' is not availble'}
            </p>
              <form action={`/engineers/${props.engineer._id}?_method=DELETE`} method="POST">
                <input type="submit" value={`Delete this ${props.engineer.name}`}/>
            </form>
            <div>
            <a href={`/engineers/${props.engineer._id}/edit`}><button>{`Edit this ${props.engineer.name}`}</button></a>
            </div>
        </div>
    )
}

module.exports = Show