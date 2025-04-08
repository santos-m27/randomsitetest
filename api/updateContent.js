import fs from 'fs';
import path from 'path';

const contentFilePath = path.resolve('./content.json');

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { title, description, projects } = req.body;

        // Simulate the update in the content.json file
        const updatedContent = { title, description, projects };

        try {
            // Read the existing content
            const currentContent = fs.existsSync(contentFilePath) ? JSON.parse(fs.readFileSync(contentFilePath, 'utf8')) : {};

            // Update the content with the new data
            const newContent = { ...currentContent, ...updatedContent };

            // Save the new content back to the JSON file
            fs.writeFileSync(contentFilePath, JSON.stringify(newContent, null, 2));

            console.log("Updated content:", newContent);

            // Respond with a success message
            res.status(200).json({ message: "Content updated successfully" });
        } catch (error) {
            console.error("Error updating content:", error);
            res.status(500).json({ error: "Failed to update content" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
