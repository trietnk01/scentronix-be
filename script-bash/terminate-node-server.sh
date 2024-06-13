#!/bin/sh

# Author : Diennk
# Copyright (c) Tutorialspoint.com
# Script follows here:


PM2_EXIST=$(if pm2 list 2> /dev/null | grep -q ScentronixServer; then echo "Yes" ; else echo "No" ; fi)
if [ $PM2_EXIST = Yes ] ; then
    pm2 stop ScentronixServer
    pm2 delete ScentronixServer
fi
rm -rf dist