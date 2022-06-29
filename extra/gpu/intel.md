# Intel

## Check if Hardware decoding is working

- Install the package: `intel-gpu-tools`
- Then do `sudo intel_gpu_top`


## Check GPU acceleration enabled
- Brave
  - `brave://gpu/`
- Firefox - Fedora
  - `sudo dnf install libva libva-utils libva-intel-driver`
  - `sudo dnf install intel-media-driver ffmpeg`
  - Install `enhanced-h264ify` extention in firefox to forcefull run video that can be used for hardware video decoding
    - https://addons.mozilla.org/en-US/firefox/addon/enhanced-h264ify/
    - This works youtube only
  - References: https://wiki.archlinux.org/title/Hardware_video_acceleration, https://fedoraproject.org/wiki/Firefox_Hardware_acceleration
