import React from 'react'
import {Reaction, Memory, Verbal, Visual } from "../Components/ui/svg/Iconsvg.jsx";

const SummaryData = [
    {
        id: 1,
        title: "Reaction",
        icon: <Reaction />,
        score: 80
    },

    {
        id: 2,
        title: "Memory",
        icon: <Memory />,
        score: 92
    },

    {
        id:3,
        title:"Verbal",
        icon: <Verbal />,
        score:61
    },

    {
        id :4 ,
        title:"Visual",
        icon: <Visual/>,
        score:72
    }

];

export default SummaryData