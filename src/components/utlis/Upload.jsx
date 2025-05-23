import React, { useRef, useState } from 'react';

function FileUpload() {
  const [files, setFiles] = useState({});
  const [isOverlayDraggedOver, setIsOverlayDraggedOver] = useState(false);
  const [counter, setCounter] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [tokenUri, setTokenUri] = useState("");

  const uploadFile = async (fileToUpload) => {
    try {
      setUploading(true);
      const data = new FormData();
      data.set("file", fileToUpload);
      const res = await fetch("/api/legalRecords/uploadDocuments", {
        method: "POST",
        body: data,
      });

      const resData = await res.json();

      if (res.ok) {
        // Assuming the server returns a token ID after uploading
        const { tokenId } = resData; // Retrieve tokenId from server response
     
      } else {
        console.error("Error during upload");
      }

      setUploading(false);
    } catch (e) {
      console.log(e);
      setUploading(false);
      toast.error("Trouble uploading file");
    }
  }; 



  const addFile = (file) => {
    const isImage = file.type.match('image.*');
    const objectURL = URL.createObjectURL(file);
    setFiles((prevFiles) => ({
      ...prevFiles,
      [objectURL]: file,
    }));
  };

  const handleFileChange = (e) => {

   setFiles(e.target.files[0]);

    
  };

  const dropHandler = (ev) => {
    ev.preventDefault();
    for (const file of ev.dataTransfer.files) {
      addFile(file);
    }
    setIsOverlayDraggedOver(false);
    setCounter(0);
  };

  const dragEnterHandler = (e) => {
    e.preventDefault();
    if (hasFiles(e)) {
      setCounter((prevCounter) => prevCounter + 1);
      setIsOverlayDraggedOver(true);
    }
  };

  const dragLeaveHandler = (e) => {
    if (hasFiles(e)) {
      setCounter((prevCounter) => prevCounter - 1);
      if (counter <= 1) {
        setIsOverlayDraggedOver(false);
      }
    }
  };

  const dragOverHandler = (e) => {
    if (hasFiles(e)) {
      e.preventDefault();
    }
  };

  const hasFiles = ({ dataTransfer: { types = [] } }) => {
    return types.indexOf('Files') > -1;
  };

  const deleteFile = (objectURL) => {
    const updatedFiles = { ...files };
    delete updatedFiles[objectURL];
    setFiles(updatedFiles);
  };

  const submitFiles = () => {
   
    console.log(files);
  };

  const cancelUpload = () => {
    setFiles({});
  };

  return (
 


      <main className="container mx-auto max-w-screen-lg h-full">
        <article
          aria-label="File Upload Modal"
          className="relative h-full flex flex-col bg-white shadow-xl rounded-md"
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
          onDragLeave={dragLeaveHandler}
          onDragEnter={dragEnterHandler}
        >
          <div
            id="overlay"
            className={`w-full h-full absolute top-0 left-0 pointer-events-none z-50 flex flex-col items-center justify-center rounded-md ${
              isOverlayDraggedOver ? 'draggedover' : ''
            }`}
          >
            
          </div>

          <section className="h-full overflow-auto p-8 w-full  flex flex-col">
            <header className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
              <p className="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
                <span>Drag and drop your</span>&nbsp;<span>files anywhere or</span>
              </p>
              <input
                id="hidden-input"
                type="file"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
              <button className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none" onClick={() => document.getElementById('hidden-input').click()}>
                Upload a file
              </button>
            </header>

            <h1 className="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">
              To Upload
            </h1>

            <ul id="gallery" className="flex flex-1 flex-wrap -m-1">
              {Object.keys(files).map((objectURL) => (
                <li key={objectURL} id={objectURL} className="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24">
                  <article tabIndex="0" className="group w-full h-full rounded-md focus:outline-none focus:shadow-outline relative bg-gray-100 cursor-pointer shadow-sm">
                    {files[objectURL].type.match('image.*') ? (
                      <img alt="upload preview" className="img-preview w-full h-full sticky object-cover rounded-md bg-fixed" src={objectURL} />
                    ) : null}
                    <section className="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                      <h1 className="flex-1 group-hover:text-blue-800">{files[objectURL].name}</h1>
                      <div className="flex">
                        <span className="p-1 text-blue-800">
                          <i>
                            <svg className="fill-current w-4 h-4 ml-auto pt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                              <path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z" />
                            </svg>
                          </i>
                        </span>
                        <p className="p-1 size text-xs text-gray-700">{files[objectURL].size > 1024 ? (files[objectURL].size > 1048576 ? Math.round(files[objectURL].size / 1048576) + 'mb' : Math.round(files[objectURL].size / 1024) + 'kb') : files[objectURL].size + 'b'}</p>
                        <button className="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md text-gray-800" onClick={() => deleteFile(objectURL)}>
                          <svg className="pointer-events-none fill-current w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path className="pointer-events-none" d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                          </svg>
                        </button>
                      </div>
                    </section>
                  </article>
                </li>
              ))}
              {Object.keys(files).length === 0 && (
                <li id="empty" className="h-full w-full text-center flex flex-col items-center justify-center">
                  <img className="mx-auto w-32" src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png" alt="no data" />
                  <span className="text-small text-gray-500">No files selected</span>
                </li>
              )}
            </ul>
          </section>

          <footer className="flex justify-end px-8 pb-8 pt-4">
            <button onClick={()=>uploadFile(files)} id="submit" className="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none">
              Upload now
            </button>
            <button id="cancel" className="ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none" onClick={cancelUpload}>
              Cancel
            </button>
          </footer>
        </article>
      </main>

  );
}

export default FileUpload;