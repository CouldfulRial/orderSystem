import { useState } from 'react';
import './card.css';

function Card({ name, pic }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }

    return (
        <div className="Card">
            <div class="card">
                <div class="card-body">
                        <h5 class="card-text" className="FoodTitle">{name}</h5>
                </div>

                <img
                    src={pic}
                    className="FoodImg"
                    alt="..."
                />

                <div class="form-check">
                    <hr/>
                    <input
                        class="form-check-input"
                        type="checkbox"
                        value="sss"
                        id="flexCheckDefault"
                        className="CheckBox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                </div>
            </div>
        </div>
    );
}
  
  export default Card;
