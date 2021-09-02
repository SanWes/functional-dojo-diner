import React, {useState} from 'react';


const FunctionalMenu = (props) => {

    //Using State withing Functional Component
    const [ numMeals, setNumMeals] = useState(props.numMealsServed);

    const doSomething = () => {
        console.log(`you just got served ${props.nameOfDish}`); 
        setNumMeals(numMeals +1 )
    }

    const takeSomething = () => {
        console.log(`you just got served ${props.nameOfDish}`); 
        setNumMeals(numMeals -1 )
    }

    return (
        <>
           
            <div className="menuItem">
                <h3>Dish Name: {props.nameOfDish}</h3>
                <h5>Price: {props.price}</h5>
                <p>Description: {props.children}</p>
                <p>Meals ordered so far: {numMeals}</p>

                <p> <button onClick = {doSomething} >Serve Meal!</button> </p>

                {/* created a specific function after render() but before return statement to enter pure javascript. */}

                <p><button onMouseOver = {takeSomething}>Meal Wasted</button></p>
            </div>
        
        </>
        )
}


export default FunctionalMenu