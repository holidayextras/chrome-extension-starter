# Chrome Extension Starter Repo

> A Chrome extension that manipulates the requests to SBP websites, changing the domain and query string.

## Table of Contents

- [Background](#background)
- [Install](#Installation)
- [Further Reading](#Additional Reading Material)

## Background
This repo accompanies the following tech talk at The HX Project Lounge conference. It is designed only to encourage experiementation with Chrome Extension development and provides only the most basic examples. It contains:

### Extension Type A - A Browser Action Extension

This type of extension appears in the toolbar of the browser next to the URL bar. It can perform functionality which acts both in it's own process and UI or interacts with the browser page, using a content script.

### Extension Type B - A Page Action Extension

This type of extension appears in the broswer toolbar itself on certain sites as defined by the background script. This allows you to target just the sites you want to execute the extension behaviour on.

## Installation

Clone this repo and then go to chrome://extensions/ and then Load Unpacked and navigate to the src/ folder of the extenxion and load it from source. The extension should appear in the browser.

### Additional Reading Material

https://developer.chrome.com/extensions/manifest

https://code.tutsplus.com/tutorials/developing-google-chrome-extensions--net-33076

http://waitingphoenix.com/how-to-make-your-chrome-extension-access-webpage/

https://www.youtube.com/watch?v=vnXb1S6l_jE