'use strict'

import React from 'react'
import Title from './title'

const App = React.createClass({
    render: function () {
        return (
            <div className='container'>
                Aplicação
                <Title  name='jhones' />
            </div>
        )
    }
})

export default App;