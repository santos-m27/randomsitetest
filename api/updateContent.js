// api/updateContent.js
export default async function handler(req, res) {
    if (req.method === "POST") {
      const { title, description, projects } = req.body;
  
      // Here, you would normally update the content in your external database/file.
      // Simulate a successful update:
      // Update the content (you'd use some real database logic here)
      console.log("Updated content:", { title, description, projects });
  
      res.status(200).json({ message: "Content updated successfully" });
    } else {
      res.status(405).json({ error: "Method not allowed" });
    }
  }
  