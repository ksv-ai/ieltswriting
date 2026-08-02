const fs = require('fs');

function checkFile(filePath, varName) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Quick hack to evaluate the file and extract the array
    const evalContent = content + `\nmodule.exports = ${varName};`;
    const tempPath = filePath + '.temp.js';
    fs.writeFileSync(tempPath, evalContent);
    const questions = require(tempPath);
    fs.unlinkSync(tempPath);

    const missing = questions.filter(q => !q.modelAnswer).map(q => q.id);
    const present = questions.filter(q => q.modelAnswer).map(q => q.id);
    
    console.log(`${varName} Total: ${questions.length}`);
    console.log(`${varName} Missing modelAnswer: ${missing.length} ->`, missing);
    console.log(`${varName} Present: ${present.length}\n`);
}

checkFile('d:/Projects/Websites/@Tests/ieltswriting/questions.js', 'IELTS_QUESTIONS');
checkFile('d:/Projects/Websites/@Tests/ieltswriting/questions2.js', 'IELTS_QUESTIONS_2');
