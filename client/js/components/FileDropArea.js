import React from 'react';

export default React.createClass({

    getInitialState() {
        return {pictures: []};
    },

    dragOverHandler(event) {
        event.preventDefault();
    },

    dropHandler(event) {
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
        let files = event.dataTransfer.files;
        for (let i=0; i<files.length; i++) {
            let reader = new FileReader();
            reader.onloadend = () => {
                let pictures = this.state.pictures;
                pictures.push(reader.result);
                this.setState({pictures: pictures});
            };
            reader.readAsDataURL(files[i]);
        }
    },

    render() {
        let imgs = this.state.pictures.map(picture => <img src={picture} style={{padding: "4px 0"}}/>);
        return (
            <div onDragOver={this.dragOverHandler} onDrop={this.dropHandler} style={{width:"100%", minHeight:"300px"}}>
                Drag images in this area to add them to the gallery
                {imgs}
            </div>
        );
    }
});