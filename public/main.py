from PIL import Image
from moviepy import VideoFileClip
from pathlib import Path

# Your folder
FOLDER = Path("images/hero")

# Supported formats
IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}
VIDEO_EXTENSIONS = {".mp4"}

MAX_WIDTH = 1600
JPEG_QUALITY = 72
VIDEO_BITRATE = "1500k"  # lower = more compression

for file_path in FOLDER.iterdir():

    ext = file_path.suffix.lower()

    try:

        # ---------------- IMAGES ----------------
        if ext in IMAGE_EXTENSIONS:

            img = Image.open(file_path)

            width, height = img.size

            # Resize only if larger
            if width > MAX_WIDTH:
                ratio = MAX_WIDTH / width
                new_height = int(height * ratio)

                img = img.resize(
                    (MAX_WIDTH, new_height),
                    Image.LANCZOS
                )

            save_args = {
                "optimize": True
            }

            if ext in [".jpg", ".jpeg"]:

                if img.mode == "RGBA":
                    img = img.convert("RGB")

                save_args["quality"] = JPEG_QUALITY
                save_args["progressive"] = True

            elif ext == ".png":
                save_args["compress_level"] = 9

            elif ext == ".webp":
                save_args["quality"] = JPEG_QUALITY

            img.save(file_path, **save_args)

            print(f"✓ Compressed image: {file_path.name}")

        # ---------------- MP4 ----------------
        elif ext in VIDEO_EXTENSIONS:

            clip = VideoFileClip(str(file_path))

            width, height = clip.size

            # Resize only if larger
            if width > MAX_WIDTH:
                clip = clip.resized(width=MAX_WIDTH)

            temp_path = file_path.with_name(
                file_path.stem + "_temp.mp4"
            )

            clip.write_videofile(
                str(temp_path),
                codec="libx264",
                audio_codec="aac",
                bitrate=VIDEO_BITRATE
            )

            clip.close()

            # overwrite original
            temp_path.replace(file_path)

            print(f"✓ Compressed video: {file_path.name}")

    except Exception as e:
        print(f"✗ Error: {file_path.name}")
        print(e)

print("\nDone.")