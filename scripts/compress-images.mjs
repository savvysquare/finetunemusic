// scripts/compress-images.mjs
// Run with: node scripts/compress-images.mjs
import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const dirs = [
  { input: path.join(root, "src/assets"), output: path.join(root, "src/assets") },
  { input: path.join(root, "public/images"), output: path.join(root, "public/images") },
];

for (const { input, output } of dirs) {
  if (!existsSync(input)) continue;
  const files = (await readdir(input)).filter(f => /\.(jpe?g|png)$/i.test(f));
  for (const file of files) {
    const src = path.join(input, file);
    const dest = path.join(output, file);
    const ext = path.extname(file).toLowerCase();

    try {
      if (ext === ".jpg" || ext === ".jpeg") {
        await sharp(src)
          .jpeg({ quality: 72, progressive: true, mozjpeg: true })
          .toFile(dest + ".tmp");
      } else if (ext === ".png") {
        await sharp(src)
          .png({ compressionLevel: 9, palette: true })
          .toFile(dest + ".tmp");
      }

      // Replace original with compressed version
      const { rename, unlink } = await import("fs/promises");
      await unlink(dest).catch(() => {});
      await rename(dest + ".tmp", dest);

      console.log(`✓ Compressed: ${file}`);
    } catch (e) {
      console.error(`✗ Failed: ${file}`, e.message);
      // Clean up tmp if failed
      const { unlink } = await import("fs/promises");
      await unlink(dest + ".tmp").catch(() => {});
    }
  }
}
console.log("Done.");
