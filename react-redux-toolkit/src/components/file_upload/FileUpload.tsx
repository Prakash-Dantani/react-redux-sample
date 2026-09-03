import axios from "axios";
import { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };
  const handleSubmit = async () => {
    const formData = new FormData();

    if (!file) {
      alert("Please select a file");
      return;
    }

    formData.append("name", "Prakash");
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <label htmlFor="file">Select File</label> <br />
        <input
          type="file"
          name="file"
          id="file"
          className="border-amber-900"
          onChange={handleFileChange}
        />
      </div>
      <br />
      <input
        type="button"
        value="Upload File"
        className="btn"
        onClick={handleSubmit}
      />
    </>
  );
};

export default FileUpload;
