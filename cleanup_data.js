const fs = require('fs');

function cleanupFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(/modelAnswer:\s*"([^"]*)"/g, (match, p1) => {
        let text = p1.replace(/\\\\n/g, '\n').replace(/\\n/g, '\n');
        
        // 1. Remove Word Count
        text = text.replace(/\n\nWord Count: \d+ words/g, '');
        
        // 2. Remove Overview and Conclusion from Planning Phase
        // We look for "- Overview: [text]" or "- Conclusion: [text]"
        // and replace them with nothing.
        text = text.replace(/\n- Overview: [^\n]*/g, '');
        text = text.replace(/\n- Conclusion: [^\n]*/g, '');
        
        // Escape newlines back
        let escaped = text.replace(/\n/g, '\\n');
        return `modelAnswer: "${escaped}"`;
    });

    fs.writeFileSync(filePath, content);
}

cleanupFile('d:/Projects/Websites/@Tests/ieltswriting/questions.js');
cleanupFile('d:/Projects/Websites/@Tests/ieltswriting/questions2.js');
console.log("Cleanup successful.");
