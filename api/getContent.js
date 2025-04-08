// api/getContent.js
export default async function handler(req, res) {
    // Simulating fetching data from an external source (like a remote file or DB)
    const content = {
      title: "Your Name",
      description: "Developer • Creator • Innovator",
      projects: ["Project 1", "Project 2", "Project 3"]
    };
  
    res.status(200).json(content);
  }
  