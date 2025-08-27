#!/usr/bin/env node

const path = require('path');
const { execSync } = require('child_process');
const fs = require('fs');

function openHTML(filePath) {
    try {
        const absolutePath = path.resolve(filePath);
        
        // Проверка существования файла
        if (!fs.existsSync(filePath)) {
            console.error('❌ File not found:', filePath);
            process.exit(1);
        }
        
        console.log('✅ Opening:', path.basename(filePath));
        
        // Кроссплатформенное открытие файла
        if (process.platform === 'win32') {
            // Windows
            execSync(`start "" "${absolutePath}"`, { 
                stdio: 'ignore',
                windowsHide: true 
            });
        } else if (process.platform === 'darwin') {
            // macOS
            execSync(`open "${absolutePath}"`, { stdio: 'ignore' });
        } else {
            // Linux
            execSync(`xdg-open "${absolutePath}"`, { stdio: 'ignore' });
        }
        
        console.log('🌐 Browser opened');
        
    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
}

// Обработка аргументов командной строки
const args = process.argv.slice(2);
if (args.length === 0) {
    console.log('Usage: node build.js <file.html> [--open]');
    process.exit(1);
}

openHTML(args[0]);