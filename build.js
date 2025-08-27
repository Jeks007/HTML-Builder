#!/usr/bin/env node

const path = require('path');
const { execSync } = require('child_process');

let __browserOpened = false;

function openHTML(filePath) {
    try {
        const absolutePath = path.resolve(filePath);
        
        // Быстрая проверка файла
        const fs = require('fs');
        if (!fs.existsSync(filePath)) {
            process.stderr.write('❌ File not found');
            process.exit(1);
        }
        
        process.stdout.write(`✅ Opening: ${path.basename(filePath)}`);
        
        // Открываем исходный файл
        if (process.platform === 'win32') {
            execSync(`cmd /c start "" "${absolutePath}"`, { 
                stdio: 'ignore',
                windowsHide: true 
            });
        }
        process.stdout.write(' 🌐');
        
    } catch (error) {
        process.stderr.write('❌ Error: ' + error.message);
        process.exit(1);
    }
}

// Парсинг аргументов
const args = process.argv;
if (args.length < 3) process.exit(1);

openHTML(args[2]);