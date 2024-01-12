import React from "react"
import {data} from '../data/data.js'

const Food = () => {
    console.log(data)
    return (
        
        <div>
            <h1>Top Rate Menu Items </h1>

            {/* Filter Row */}
            <div>
                 {/* Filter Type */}
                <div>
                    <p>Filter Type</p>
                    <div>
                        <button>All</button>
                        <button>Chicken</button>
                        <button>Salad</button>
                    </div>
                </div>

                {/** Filter Price */}
                <div>
                    <p>Filter Price</p>
                    <div>
                        <button>$$</button>
                         <button>$$$</button>
                          <button>$</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

 export default Food