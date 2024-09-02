import './language.css'

const Languageoption=(props)=>{
    return(
        <select onChange={props.onChange} className='translate'>
            <option >Translate</option>
            <option value={'en'}>English</option>
            <option value={'hi'}>Hindi</option>
            <option value={'chi'}>chinese</option>
        </select>
    )
}
export default Languageoption;