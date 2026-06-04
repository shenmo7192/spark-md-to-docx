// preload.js - 暴露必要的 API 给渲染进程
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    platform: process.platform
});
