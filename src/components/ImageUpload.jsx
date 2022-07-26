import React, { Component } from "react";
export default class MultipleImageUploadComponent extends Component {
  fileObj = [];
  fileArray = [];
  constructor(props) {
    super(props);
    this.state = {
      file: [null],
    };
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
  }
  uploadMultipleFiles(e) {
    this.fileObj.push(e.target.files);
    for (let i = 0; i < this.fileObj[0].length; i++) {
      this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]));
    }
    this.setState({ file: this.fileArray });
  }
  uploadFiles(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="mt-1 flex items-center">
        <span className="inline-block max-h-80 max-w-7xl  overflow-hidden bg-gray-100 ">
          {(this.fileArray || []).map((url) => (
            <img src={url} width="210" height="210" />
          ))}
        </span>
        <input
          id="input-banner-resto"
          type="file"
          className="ml-5 bg-white py-2 px-3 border border-gray-300 shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onChange={this.uploadMultipleFiles}
          multiple
        />
        <button
          type="button"
          className="flex-col py-2 px-4 ml-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#5587E8] hover:bg-[#2869eb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5784de]"
          onClick={this.uploadFiles}
        >
          Upload
        </button>
      </div>
    );
  }
}
