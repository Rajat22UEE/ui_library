import fs from "fs";
import https from "https";
import path from "path";

const GITHUB_RAW_URL =
  "https://raw.githubusercontent.com/Rajat22UEE/ui_library/main/components/ui/";

export async function downloadComponent(component) {
  const url = `${GITHUB_RAW_URL}${component}.jsx`;
  const targetDir = path.resolve(process.cwd(), "components/ui");
  const filePath = path.join(targetDir, `${component}.jsx`);

  // Create components/ui/ folder if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log("📂 Created components/ui/ directory.");
  }

  // Fetch the component from GitHub
  https.get(url, (res) => {
    if (res.statusCode !== 200) {
      console.error(`❌ Component "${component}" not found.`);
      return;
    }

    const file = fs.createWriteStream(filePath);
    res.pipe(file);

    file.on("finish", () => {
      file.close();
      console.log(`✅ Successfully added ${component}.jsx to components/ui/`);
    });
  }).on("error", (err) => {
    console.error(`❌ Error fetching component: ${err.message}`);
  });
}
