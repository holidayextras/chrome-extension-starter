# Chrome Extension Starter Repo

> A Repo to make learning Chrome Extensions simple.

## Table of Contents

- [Background](#background)
- [Installation](#installation)
- [Further Reading](#further-reading)

## Background
This repo accompanies the following tech talk at The HX Project Lounge conference:

https://docs.google.com/presentation/d/1wonYMXPqXZE7_cfnnrf47jcxnA-Z0wg0XFq__b4nDPo/edit?usp=sharing

It is designed only to encourage experiementation with Chrome Extension development and provides only the most basic examples. It contains:

## Extension Type A - A Browser Action Extension

This type of extension appears in the toolbar of the browser next to the URL bar. It can perform functionality which acts both in it's own process and UI or interacts with the browser page, using a content script.

## Extension Type B - A Page Action Extension

This type of extension functionas as above but only appears active on certain sites as defined by the background script. This allows you to target just the sites you want to execute the extension behaviour on.

## Installation

Clone this repo and then go to chrome://extensions/ and then Load Unpacked and navigate to the src/ folder of the extenxion and load it from source. The extension should appear in the browser.

### Further Reading

https://developer.chrome.com/extensions/manifest

https://code.tutsplus.com/tutorials/developing-google-chrome-extensions--net-33076

http://waitingphoenix.com/how-to-make-your-chrome-extension-access-webpage/

https://www.youtube.com/watch?v=vnXb1S6l_jE