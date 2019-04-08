import React, { Component } from 'react'
import NoteSection from ''

export default class Editor extends Component {
    submitThisForm = (data) => {
        alert(data)
    }

    render() {
        const { template } = this.props
        return (
            <form onSubmit={this.submitThisForm}>
                {
                    Object
                        .keys(template)
                        .map((noteTitle, titleKey) => {
                            return <NoteSection noteTitle />
                        })
                }
                <input type="submit" value="COPY" />
            </form>
        )
    }
}