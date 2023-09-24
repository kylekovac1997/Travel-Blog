import React, { useEffect, useState } from "react";

const FileUpload: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/check-auth", {
      method: "GET",
      credentials: "include", // Important if you're using sessions or cookies.
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
        credentials: "include", // ensure cookies/session are sent
      });

      if (!response.ok) {
        const data = await response.json();
        console.error(data.message);
        // TODO: Handle the error in your UI as needed, e.g., set some state and display an error message.
      } else {
        // TODO: Handle the successful upload, e.g., show a success message to the user.
      }
    } catch (error) {
      console.error("Upload error:", error.message);
    }
  }

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
          <a href="http://localhost:3000/login">login</a>.
        </p>
      )}
    </div>
  );
};

export default FileUpload;
