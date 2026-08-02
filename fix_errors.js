const fs = require('fs');

function fixFile(filePath, isTask2) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix 1: literal physical newlines in modelAnswer -> \n
    content = content.replace(/modelAnswer:\s*"([^"]*)"/g, (match, p1) => {
        let fixed = p1.replace(/\r?\n/g, '\\n');
        return `modelAnswer: "${fixed}"`;
    });
    
    // Fix 2: Add \n\n before specific question phrases in promptText
    if (isTask2) {
        content = content.replace(/promptText:\s*"([^"]*)"/g, (match, p1) => {
            let fixed = p1;
            // Common question triggers in IELTS Task 2
            const triggers = [
                "To what extent do you agree",
                "Do you agree or disagree",
                "Discuss both these views",
                "Discuss both views",
                "What are the causes",
                "What are the main causes",
                "What can be done",
                "How can this be solved",
                "Do the advantages",
                "Is this a positive or negative",
                "Why is this the case",
                "What problems does this cause",
                "What are the reasons",
                "What measures can be taken"
            ];
            
            for (const t of triggers) {
                let regex = new RegExp(`\\. (\\s*)(${t})`, 'i');
                if (regex.test(fixed)) {
                    // Replace ". To what extent..." with ".\n\nTo what extent..."
                    fixed = fixed.replace(regex, `.\\n\\n$2`);
                    break; // Only split once
                }
            }
            return `promptText: "${fixed}"`;
        });
    }

    fs.writeFileSync(filePath, content);
}

fixFile('d:/Projects/Websites/@Tests/ieltswriting/questions.js', false);
fixFile('d:/Projects/Websites/@Tests/ieltswriting/questions2.js', true);
console.log("Fixes applied successfully.");
