import React from 'react';

function Item(){
    return <p>WOOHOO</p>
}

function NoItem(){
    return <h1>WELCOME TO HELL PAL</h1>
}
let submitConfirm = (details) => {
  alert(details);
};

function nameF(name){
    return <><label> Name:
        <input type="text" value={name} />
    </label><br></br></>
    }

function ageF(age){
    return <><label> Age:
        <input type="text" value={age} />
    </label><br></br></>
    }

function genderF(gender){
    return <><label> Gender:
        <input type="text" value={gender} />
    </label><br></br></>
    }

function telephoneF(telephone){
    return <><label> Telephone:
        <input type="text" value={telephone} />
    </label><br></br></>
    }

export default (properties) => (
  <form>
    {properties.name ? nameF() : ''}
    {properties.age ? ageF() : ''}
    {properties.gender ? genderF() : ''}
    {properties.telephone ? telephoneF() : ''}
    {properties.name == "John" ? "Hello John" : "Hello"}
    <button onClick={() => submitConfirm('You have submitted the data!')}>
      Submit
    </button>
    <div>      {properties.test ? Item() : NoItem()}
    </div>
  </form>

);
