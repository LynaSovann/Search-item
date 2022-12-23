import axios from "axios";
import React from "react";
const {useState} = React;
const App = () => {
    const api = "https://fortnite-api.theapinetwork.com/store/get";
    const [item, createItem] = useState([]);
    const [value, createValue] = useState("");
    axios.get(api).then(data => {
        console.log(data.data.data);
        createItem(data.data.data);
    }).catch(err => console.log(err));
    const searchItem = item.filter(names => {
        return names.item.name.toLowerCase().includes(value.toLowerCase().trim());
    })
    const deleteText = () => {
        createValue("");
    }
    return (
        <main>
            <header>
                <a href="/">
                    <h1>L <span>xx</span> H</h1>
                    <h1>Me<span>&</span>U</h1>
                </a>
                <div className="search">
                    <h1>Fortnite Items</h1>
                    <input type="text" placeholder="Search anything..." value={value} onChange={(e) => createValue(e.target.value)}/>
                </div>
                <div className="loading" style={{display: item.length === 0 ? "flex" : "none"}}>
                    <h1 content="Loading...">Loading...</h1>
                </div>
                <div className="not-found" style={{display: searchItem.length > 0 ? "none" :  value.length > 0 ? "flex" : "none"}}>
                    <button onClick={deleteText}>Delete</button>
                    <h1>Item not found.</h1>
                </div>
            </header>
            <div className="container">
                {
                    searchItem.map((item, index) => {
                        return (
                            <div className="item" key={index}>
                                <div className="images">
                                    <img src={item.item.images.icon}/>
                                </div>
                                <div className="title">
                                    <h1>Name: {item.item.name}</h1>
                                    <p>Description: {item.item.description === "" || typeof item.item.description === "object" ? "Description is empty!" : item.item.description} </p>
                                    <p className="rarity">Rarity: {item.item.rarity}</p>
                                    <p>Type: {item.item.type}</p>
                                    <p>Average stars: {item.item.ratings.avgStars}</p>
                                    <p>Number votes: {item.item.ratings.numberVotes}</p>
                                    <p>Total points: {item.item.ratings.totalPoints}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <footer>
                <div className="credit">
                    <p>Contact me <a href="https://www.facebook.com/sovann.lyna.311?mibextid=LQQJ4d" target= "_blank">Lee Hour</a></p>
                </div>
            </footer>
        </main>
    )
}
export default App;