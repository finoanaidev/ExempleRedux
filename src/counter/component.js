const component = ({count, handleIncrementClick, handleDecrementClick}) => (
<div>
    <h1 > {count} coucouuu</h1>
    <button onClick= {handleDecrementClick}>decrementer</button>
    <button onClick={handleIncrementClick}>incrementer</button>
</div>

);
export default component