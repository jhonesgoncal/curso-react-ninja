'use strict'

import React from 'react'

const Title = React.createClass({
    render: function() {
        return <h1>Titulo { this.props.name } </h1>
    }
})

export default Title;