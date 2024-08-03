// Code Keypad Component Here


import React from 'react';

function Keypad() {
  function handleChange() {
    console.log('Entering password...');
  }

  return(
    <form>
    <input type="password"
    name='password'
    placeholder='Enter password...'
     onChange={handleChange} />;
     {/* <button onClick={handleChange}>submit</button> */}
    </form>
  ) 
}
export default Keypad;