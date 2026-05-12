import sharp from 'sharp';
import { readdirSync } from 'fs';
import { join } from 'path';

const heroDir = './public/images/hero';
const files = readdirSync(heroDir).filter(f => f.endsWith('.jpg'));

for (const file of files) {
    const input = join(heroDir, file);
    const output = join(heroDir, file.replace('.jpg', '.webp'));

    await sharp(input)
        .resize(1920, 1080, { fit: 'cover' })
        .webp({ quality: 75 })
        .toFile(output);

    const origSize = (await sharp(input).metadata()).size;
    const newInfo = await sharp(output).metadata();
    console.log(`${file} → ${file.replace('.jpg', '.webp')}: ${Math.round(origSize / 1024)}KB → ${Math.round(newInfo.size / 1024)}KB`);
}

console.log('Done!');
