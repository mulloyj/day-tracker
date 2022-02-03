import React, { useState } from "react";
import Layout from "../components/layout";

function Add() {
    type Rating = 1|2|3|4|5;
    let Ratings: Array<Rating>;
    Ratings = [1,2,3,4,5];

    const [rating, setRating] = useState(3);

    const btn = "bg-gray-300 border-2 rounded border-blue-500 text-lime-800 p-1 m-0.5 font-lg cursor-pointer";
    const active = " bg-lime-500";
    
    const switchRating = (new_rating: Rating) => {
        if (rating === new_rating)
            return;
        setRating(new_rating);
    }

    return <Layout>
        <div className="relative flex flex-col p-2 items-center justify-center">
            <p className="m-2 text-xl">How was your day?</p>
            <div className="justify-between">
                {Ratings.map((i) => {
                    let className = btn;
                    if (rating === i)
                        className += active;
                    return <button key={i} className={className} onClick={() => switchRating(i)}>{i}</button>;
                })}
            </div>
        </div>
    </Layout>
}

export default Add;