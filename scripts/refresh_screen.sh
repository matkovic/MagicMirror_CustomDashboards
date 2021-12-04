# from https://gist.github.com/Codesleuth/3e6dd8cde9f8705397e3
# refresh chromium screen from ssh
export DISPLAY=:0.0
xdotool key --window "$(xdotool search --onlyvisible --class chromium | head -n 1)" F5
