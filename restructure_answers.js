const fs = require('fs');

function processModelAnswer(text, isTask2) {
    // 1. Remove escaped \n if any, replace with real newlines for processing
    let raw = text.replace(/\\\\n/g, '\n').replace(/\\n/g, '\n');
    let paragraphs = raw.split('\n\n').map(p => p.trim()).filter(p => p.length > 0);
    
    let intro = paragraphs.find(p => p.startsWith('Introduction:'));
    let overview = paragraphs.find(p => p.startsWith('Overview:'));
    let conclusion = paragraphs.find(p => p.startsWith('Conclusion:'));
    let bodies = paragraphs.filter(p => p.startsWith('Body Paragraph'));
    
    let newOrder = [];
    if (intro) newOrder.push(intro);
    newOrder = newOrder.concat(bodies);
    
    if (!isTask2 && overview) {
        newOrder.push(overview);
    }
    if (isTask2 && conclusion) {
        newOrder.push(conclusion);
    }
    
    // If we somehow missed the labels, just return the original text
    if (!intro && bodies.length === 0) return text;
    
    // 4. Calculate word count (excluding labels)
    let textForCount = newOrder.join('\n\n')
        .replace(/Introduction:\n?/g, '')
        .replace(/Overview:\n?/g, '')
        .replace(/Conclusion:\n?/g, '')
        .replace(/Body Paragraph \d+:\n?/g, '');
        
    let words = textForCount.match(/\S+/g);
    let wordCount = words ? words.length : 0;
    
    // 5. Generate Main Points
    let mainPointsText = "Main Points (Planning Phase):\n";
    bodies.forEach((body, idx) => {
        let bodyText = body.replace(/Body Paragraph \d+:\n?/, '');
        let firstSentence = bodyText.split(/(?<=[.?!])\s+/)[0];
        mainPointsText += `- Body ${idx + 1}: ${firstSentence}\n`;
    });
    
    if (!isTask2 && overview) {
        let ovText = overview.replace(/Overview:\n?/, '');
        let firstSentence = ovText.split(/(?<=[.?!])\s+/)[0];
        mainPointsText += `- Overview: ${firstSentence}`;
    } else if (isTask2 && conclusion) {
        let conText = conclusion.replace(/Conclusion:\n?/, '');
        let firstSentence = conText.split(/(?<=[.?!])\s+/)[0];
        mainPointsText += `- Conclusion: ${firstSentence}`;
    }
    
    newOrder.push(`Word Count: ${wordCount} words`);
    newOrder.push(mainPointsText.trim());
    
    // escape newlines back to \n
    return newOrder.join('\\n\\n').replace(/\n/g, '\\n');
}

function processFile(filePath, isTask2) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(/modelAnswer:\s*"([^"]*)"/g, (match, p1) => {
        let restructured = processModelAnswer(p1, isTask2);
        return `modelAnswer: "${restructured}"`;
    });

    fs.writeFileSync(filePath, content);
}

processFile('d:/Projects/Websites/@Tests/ieltswriting/questions.js', false);
processFile('d:/Projects/Websites/@Tests/ieltswriting/questions2.js', true);
console.log("Answers restructured successfully.");
