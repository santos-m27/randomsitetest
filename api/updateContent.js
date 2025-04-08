import fs from 'fs';
import path from 'path';

const contentFilePath = path.resolve('/tmp/content.json');  // Vercel's temporary directory

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, description, projects } = req.body;

    // Validate data before proceeding
    if (!title || !description || !projects) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      // Check if file exists
      let currentContent = {};
      if (fs.existsSync(contentFilePath)) {
        currentContent = JSON.parse(fs.readFileSync(contentFilePath, 'utf8'));
      }

      // Update content with the new data
      const updatedContent = { title, description, projects };
      const newContent = { ...currentContent, ...updatedContent };

      // Save the updated content to the file in the temporary directory
      fs.writeFileSync(contentFilePath, JSON.stringify(newContent, null, 2));

      console.log("Updated content:", newContent);

      // Respond with success
      res.status(200).json({ message: 'Content updated successfully' });
    } catch (error) {
      console.error('Error updating content:', error);
      res.status(500).json({ error: 'Failed to update content' });
    }
  } else {
    // Handle other HTTP methods
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
