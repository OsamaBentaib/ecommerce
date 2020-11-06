import React, { Component } from "react";
import Dropzone from "react-dropzone";

export class ImageForm extends Component {
  render() {
    const { image, onDropImage } = this.props;
    return (
      <Dropzone onDrop={onDropImage} accept={"image/*"} maxFiles={1} multiple>
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps({
              className: "dropzone image__select __bg_image_item",
            })}
          >
            <div class="w-100">
              {image && (
                <img style={{ width: "100%" }} src={image.preview} alt="..." />
              )}
            </div>
            {!image && (
              <div>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            )}
          </div>
        )}
      </Dropzone>
    );
  }
}

export default ImageForm;
