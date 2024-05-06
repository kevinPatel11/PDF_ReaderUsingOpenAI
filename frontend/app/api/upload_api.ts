// src/upload_api.ts

export async function uploadPDF(file: File): Promise<void> {
    try {
      const formData = new FormData();
      formData.append('pdf', file);
  
        const response = await fetch("http://127.0.0.1:5000/process_new_pdf", { 
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();


          console.log("File uploaded successfully", data);
        } else {
          throw new Error("Failed to upload file");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
}
  