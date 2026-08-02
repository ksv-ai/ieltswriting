const fs = require('fs');

function fix(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the literal string ',\n        ' with an actual newline
    // In regex, the literal backslash followed by n is '\\n'
    // Let's replace '",\\n        chartConfig' with '",\n        chartConfig'
    content = content.replace(/",\\n\s*chartConfig/g, '",\n        chartConfig');
    content = content.replace(/",\\n\s*htmlContent/g, '",\n        htmlContent');

    fs.writeFileSync(filePath, content);
}

fix('d:/Projects/Websites/@Tests/ieltswriting/questions.js');
fix('d:/Projects/Websites/@Tests/ieltswriting/questions2.js');
console.log("Syntax fixed");
