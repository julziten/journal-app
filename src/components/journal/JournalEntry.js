import React from 'react';

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div 
                className="journal__entry-picture"
                style={ { 
                    backgroundSize: 'cover', 
                    backgroundImage: 'url(https://the-dna-universe.com/wp-content/uploads/2020/12/Astronaut_7_6450-x-3870-px-1024x614.jpg)'  } }
            >
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content mt-1">
                    Hola, soy un texto! Bla bla bla. Hola, soy un texto! Bla bla bla
                </p>
            </div>

            <div className="journal__entry-date">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
