import React, { useEffect, useState } from 'react'
import axios from "axios";


export default function Admin() {
    const [questions, setQUestions] = useState([])
    useEffect(() => {
        axios.get('https://dotslash4-api.herokuapp.com/').then((result) => {
            if (result.data) {
                setQUestions(result.data.questions)
            }
        })
    }, [])
    return (
        <div>
            HELLO ADMIN
            {questions.map((question) => {
                {/* create a card for viewing all questions */ }
                return <div>
                    {question.difficulty}
                </div>
            })}
            <form action="https://dotslash4-api.herokuapp.com/addQuestion" method="POST">
                <label htmlFor="question">QUESTION</label>
                <input type="text" name="question" required />

                <label htmlFor="marks">MARKS</label>
                <input type="number" name="marks" id="marks" required />

                <label htmlFor="difficulty">Difficulty</label>
                <input type="number" name="difficulty" id="difficulty" max="10" required />

                <button type="submit">BYE</button>
            </form>
        </div>
    )
}

