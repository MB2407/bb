import React, { useState, useEffect, Component } from 'react'
import axios from 'axios';

const ur ='https://bindings.azurewebsites.net/api/HttpTrigger3?code=ibGKDCaBa-WV2rz5LjfetjABUyEFYqOz93btJUL5seyIAzFuhAvcYw==';
const Form = () => {
    const [count, setCount] = useState('');
    const [id, setId] = useState('');
    const [a, setA] = useState('');
    const [url, setUrl] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        const resp = await axios.post(ur, {id, a, url, count});
        console.log(resp.data);
      }catch(error){
        console.log(error.resp);
      }
      
    };

/*class Form extends Component{
    constructor(props){
        super(props)

        this.state ={
            id: '',
            url: '',
            a: '',
            count: ''
        }
    }


changeHandler=(e)  =>{
    this.setState({
        [e.target.name]: e.target.value
    })
}

submitHandler = (e) => {
    e.preventDefault()
    axios.post('https://bindings.azurewebsites.net/api/HttpTrigger3?code=ibGKDCaBa-WV2rz5LjfetjABUyEFYqOz93btJUL5seyIAzFuhAvcYw==', this.state)
    .then(response => {
        console.log(response)
    })
}
*/


/*render()
{   const {id, url, a, count} = this.state
    return (
        <div>
            <form onSubmit={this.submitHandler}>
            <div>
                <input 
                type='text' 
                name ='userId' 
                onChange={this.changeHandler}
                value={id}></input>
            </div>
            <div>
                <input 
                type='text' 
                name ='title' 
                    onChange={this.changeHandler}
                value={url}></input>
            </div>
            <div>
                <input 
                type='text' 
                name ='body' 
                onChange={this.changeHandler}
                value={a}></input>
            </div>
            <div>
                <input 
                type='number' 
                name ='body' 
                onChange={this.changeHandler}
                value={count}></input>
            </div>
            <button type='submit'>Submit Now</button>
            </form>
        </div>
    )
}
}*/

return (
    <section>
      <h2 className='text-center'>post request</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='id' className='form-label'>
            id
          </label>
          <input
            type='text'
            className='form-input'
            id='id'
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='url' className='form-label'>
            url
          </label>
          <input
            type='text'
            className='form-input'
            id='url'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='a' className='form-label'>
            a
          </label>
          <input
            type='text'
            className='form-input'
            id='a'
            value={a}
            onChange={(e) => setA(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='count' className='form-label'>
            count
          </label>
          <input
            type='number'
            className='form-input'
            id='count'
            value={count}
            onChange={(e) => setCount((e.target.value))}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          login
        </button>
      </form>
    </section>
  );
};


export default Form;

// ek value lo, usse lo pass it to the function and subract
//for mein ek input and submit karne pr get value, pass it to the api call