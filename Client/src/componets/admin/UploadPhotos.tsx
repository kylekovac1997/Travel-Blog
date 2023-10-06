import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

const FileUpload: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/check-auth", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAuthenticated(data.isAuthenticated);
      });
  }, []);

  async function handleFileUpload(file?: File) {
    if (!file) {
      console.error("No file selected");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("uploadedFile", file);

      const response = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (!response.ok) {
        const data = await response.json();
        console.error(data.message);
      } else {
      }
    } catch (error) {
      console.error("Upload error:", (error as Error)?.message);
    }
  }

  const LoginApiCall = async () => {
    try {
      await axios.get("http://localhost:3000/login");
    } catch (error) {
      console.log(
        "Error in call loginApi",
        (error as AxiosError)?.response?.data
      );
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files?.length) {
                handleFileUpload(e.target.files[0]);
              }
            }}
          />
          <p>Upload a file to OneDrive</p>
        </>
      ) : (
        <p>
          You are not authenticated. Please{" "}
          <button onClick={() => LoginApiCall}>login</button>.
        </p>
      )}
    </div>
  );
};

export default FileUpload;
