#!/bin/bash
cd ~/MagicMirror
node serveronly &
sleep 1
xinit /home/pi/chromium_start.sh
