# Convert

A ImageMagick tool

## Resize the image

- `convert -resize 320x240 FROM_IMAGE_PATH.(png/svg) FINAL_IMAGE_PATH.(png/svg)`
- `convert -resize 50% FROM_IMAGE_PATH.(png/svg) FINAL_IMAGE_PATH.(png/svg)`

## Pixilate Image

- `convert -scale 5% -scale 1500% SOURCE.jpg pixelated.jpg`
  - change the scales as required

## References

[1]: [command line - How to resize an image through the terminal? - Ask Ubuntu](https://askubuntu.com/questions/271776/how-to-resize-an-image-through-the-terminal)

[2]: [software recommendation - How can I pixelate an image via the command line on Linux - Graphic Design Stack Exchange](https://graphicdesign.stackexchange.com/questions/8422/how-can-i-pixelate-an-image-via-the-command-line-on-linux)