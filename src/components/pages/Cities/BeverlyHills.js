import { useEffect, useState } from 'react'

const BeverlyHills = (props) => {

    const [beverly, setBeverly] = useState([]);
    const bravoUrl = (`${process.env.REACT_APP_BRAVO_API}searchcity?city=Beverly Hills`)

    useEffect(() => {
        console.log(bravoUrl)
        fetch(bravoUrl)
        .then(response => response.json())
        .then(jsonData => {
            setBeverly((jsonData))
            console.log(jsonData)
        })
    }, [])

    if (beverly.length < 1) {
        return (<h4>Content is loading</h4>)
    } else {
        let content = beverly.db.map((bevWives, i) => {
            return (
                <li className="bevWivesList" key={`bevWives-${i}`}> <img className="bevWivesImg" src={bevWives.img_url}/> {bevWives.first_name} {bevWives.last_name}  </li>
        )})
    

    return (
        <div>
            <h1>The Real Housewives of Beverly Hills</h1>
            <ul className="city-wives">
                {content}
            </ul>
        </div>
    )
  }
};

export default BeverlyHills;