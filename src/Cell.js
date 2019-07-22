import React from 'react';

export default class Cell extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: props.value
        }
    }

    colorSwitch = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return (
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={() => {
                console.log('color switched to #333')
                this.colorSwitch()
            }}>

            </div>
        )
    }
}