// --- App State ---
let currentChart = null;
let timerInterval = null;
let secondsRemaining = 60 * 60; // 60 minutes default for total test
let isTimerRunning = false;
let isTimerHidden = false;
let currentPart = 1;

// --- DOM Elements ---
// Top Bar
const timerDisplay = document.getElementById('timer-display');
const timerEditContainer = document.getElementById('timer-edit-container');
const timerInput = document.getElementById('timer-input');
const timerSaveBtn = document.getElementById('timer-save');
const toggleTimeBtn = document.getElementById('toggle-time-btn');
const fontIncreaseBtn = document.getElementById('font-increase');
const fontDecreaseBtn = document.getElementById('font-decrease');
const settingsBtn = document.getElementById('settings-btn');

// Sections
const task1Section = document.getElementById('task1-section');
const task2Section = document.getElementById('task2-section');

// Bottom Nav
const navPart1 = document.getElementById('nav-part1');
const navPart2 = document.getElementById('nav-part2');
const submitBtn = document.getElementById('submit-btn');

// Task 1 Elements
const t1SpecificPrompt = document.getElementById('t1-specific-prompt');
const t1ChartCanvas = document.getElementById('t1-chart');
const t1HtmlDiagram = document.getElementById('t1-html-diagram');
const t1Answer = document.getElementById('t1-answer');
const t1WordCount = document.getElementById('t1-word-count');
const newT1Btn = document.getElementById('new-t1-btn');

const t1ModelLabel = document.getElementById('t1-model-label');
const t1ModelInlineBtn = document.getElementById('t1-model-inline-btn');
const t1ModelSideBtn = document.getElementById('t1-model-side-btn');
const t1ModelPopupBtn = document.getElementById('t1-model-popup-btn');
const t1HSplitter = document.getElementById('t1-h-splitter');
const t1InlineModelArea = document.getElementById('t1-inline-model-area');
const t1InlineModelText = document.getElementById('t1-inline-model-text');
const t1MiddlePanel = document.getElementById('t1-middle-panel');
const t1SideModelText = document.getElementById('t1-side-model-text');
const t1VSplitter1 = document.getElementById('t1-v-splitter-1');
const t1VSplitter2 = document.getElementById('t1-v-splitter-2');

// Task 2 Elements
const t2SpecificPrompt = document.getElementById('t2-specific-prompt');
const t2Answer = document.getElementById('t2-answer');
const t2WordCount = document.getElementById('t2-word-count');
const newT2Btn = document.getElementById('new-t2-btn');

const t2ModelLabel = document.getElementById('t2-model-label');
const t2ModelInlineBtn = document.getElementById('t2-model-inline-btn');
const t2ModelSideBtn = document.getElementById('t2-model-side-btn');
const t2ModelPopupBtn = document.getElementById('t2-model-popup-btn');
const t2HSplitter = document.getElementById('t2-h-splitter');
const t2InlineModelArea = document.getElementById('t2-inline-model-area');
const t2InlineModelText = document.getElementById('t2-inline-model-text');
const t2MiddlePanel = document.getElementById('t2-middle-panel');
const t2SideModelText = document.getElementById('t2-side-model-text');
const t2VSplitter1 = document.getElementById('t2-v-splitter-1');
const t2VSplitter2 = document.getElementById('t2-v-splitter-2');

// Custom Mode Elements
const t1RandomMode = document.getElementById('t1-random-mode');
const t1CustomMode = document.getElementById('t1-custom-mode');
const t2RandomMode = document.getElementById('t2-random-mode');
const t2CustomMode = document.getElementById('t2-custom-mode');
const t1CustomUpload = document.getElementById('t1-custom-upload');
const t1CustomPreview = document.getElementById('t1-custom-preview');
let isCustomMode = false;

// Modal
const submitModal = document.getElementById('submit-modal');
const summaryText = document.getElementById('summary-text');
const downloadBtn = document.getElementById('download-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalTitle = document.getElementById('modal-title');

const modelModal = document.getElementById('model-modal');
const modelAnswerText = document.getElementById('model-answer-text');
const closeModelBtn = document.getElementById('close-model-btn');
const modelOverlay = document.getElementById('model-overlay');

let currentT1Model = null;
let currentT2Model = null;


// --- Initialization ---
function init() {
    loadRandomTask1();
    loadRandomTask2();
    setupSplitters();
    setupEventListeners();
    updateTimerDisplay();
}

// --- Event Listeners ---
function setupEventListeners() {
    // Nav Switching
    navPart1.addEventListener('click', () => switchPart(1));
    navPart2.addEventListener('click', () => switchPart(2));

    // Timer Controls
    timerDisplay.addEventListener('click', () => {
        if (isTimerRunning) return;
        timerDisplay.classList.add('hidden');
        timerEditContainer.classList.remove('hidden');
    });

    timerSaveBtn.addEventListener('click', () => {
        let mins = parseInt(timerInput.value, 10);
        if (isNaN(mins) || mins < 1) mins = 1;
        if (mins > 120) mins = 120;
        secondsRemaining = mins * 60;
        updateTimerDisplay();
        timerEditContainer.classList.add('hidden');
        timerDisplay.classList.remove('hidden');
    });

    toggleTimeBtn.addEventListener('click', () => {
        isTimerHidden = !isTimerHidden;
        if (isTimerHidden) {
            timerDisplay.style.visibility = 'hidden';
            toggleTimeBtn.textContent = 'Show';
        } else {
            timerDisplay.style.visibility = 'visible';
            toggleTimeBtn.textContent = 'Hide';
        }
    });

    // Font Sizing
    let currentFontSize = 16;
    fontIncreaseBtn.addEventListener('click', () => {
        if (currentFontSize < 24) {
            currentFontSize += 2;
            document.documentElement.style.setProperty('--base-font-size', `${currentFontSize}px`);
        }
    });
    fontDecreaseBtn.addEventListener('click', () => {
        if (currentFontSize > 12) {
            currentFontSize -= 2;
            document.documentElement.style.setProperty('--base-font-size', `${currentFontSize}px`);
        }
    });

    // Settings / Custom Mode
    settingsBtn.addEventListener('click', () => {
        isCustomMode = !isCustomMode;
        if (isCustomMode) {
            t1RandomMode.classList.add('hidden');
            t1CustomMode.classList.remove('hidden');
            t2RandomMode.classList.add('hidden');
            t2CustomMode.classList.remove('hidden');
            newT1Btn.classList.add('hidden');
            newT2Btn.classList.add('hidden');
        } else {
            t1RandomMode.classList.remove('hidden');
            t1CustomMode.classList.add('hidden');
            t2RandomMode.classList.remove('hidden');
            t2CustomMode.classList.add('hidden');
            newT1Btn.classList.remove('hidden');
            newT2Btn.classList.remove('hidden');
        }
    });

    // Custom Upload T1
    t1CustomUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                t1CustomPreview.src = event.target.result;
                t1CustomPreview.classList.remove('hidden');
            };
            reader.readAsDataURL(file);
        } else {
            t1CustomPreview.classList.add('hidden');
            t1CustomPreview.src = '';
        }
    });

    // New Questions
    newT1Btn.addEventListener('click', loadRandomTask1);
    newT2Btn.addEventListener('click', loadRandomTask2);

    // Answer Areas
    t1Answer.addEventListener('input', () => updateWordCount(t1Answer, t1WordCount, 150));
    t2Answer.addEventListener('input', () => updateWordCount(t2Answer, t2WordCount, 250));

    // Disable Paste (Exam Simulation)
    const blockPaste = (e) => {
        e.preventDefault();
        alert("Pasting from outside is disabled in exam mode.");
    };
    t1Answer.addEventListener('paste', blockPaste);
    t2Answer.addEventListener('paste', blockPaste);

    // Disable Right Click (Exam Simulation)
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Start Timer on first type
    const startOnType = () => {
        if (!isTimerRunning && secondsRemaining > 0) {
            startTimer();
        }
    };
    t1Answer.addEventListener('focus', startOnType);
    t2Answer.addEventListener('focus', startOnType);

    // Submit
    submitBtn.addEventListener('click', submitExam);
    closeModalBtn.addEventListener('click', () => submitModal.classList.add('hidden'));
    downloadBtn.addEventListener('click', downloadOutput);

    // Model Answers Popups
    t1ModelPopupBtn.addEventListener('click', () => {
        if (currentT1Model) {
            modelAnswerText.textContent = currentT1Model;
            modelModal.classList.remove('hidden');
        }
    });
    t2ModelPopupBtn.addEventListener('click', () => {
        if (currentT2Model) {
            modelAnswerText.textContent = currentT2Model;
            modelModal.classList.remove('hidden');
        }
    });
    closeModelBtn.addEventListener('click', () => modelModal.classList.add('hidden'));
    modelOverlay.addEventListener('click', () => modelModal.classList.add('hidden'));

    // Inline Model Toggles (Below View)
    t1ModelInlineBtn.addEventListener('click', () => {
        const isHidden = t1InlineModelArea.classList.contains('hidden');
        if (isHidden) {
            // Hide Side view if open
            t1MiddlePanel.classList.add('hidden');
            t1VSplitter2.classList.add('hidden');
            t1ModelSideBtn.textContent = "Side";

            t1InlineModelArea.classList.remove('hidden');
            t1HSplitter.classList.remove('hidden');
            t1ModelInlineBtn.textContent = "Hide Below";
        } else {
            t1InlineModelArea.classList.add('hidden');
            t1HSplitter.classList.add('hidden');
            t1ModelInlineBtn.textContent = "Below";
        }
    });
    t2ModelInlineBtn.addEventListener('click', () => {
        const isHidden = t2InlineModelArea.classList.contains('hidden');
        if (isHidden) {
            // Hide Side view if open
            t2MiddlePanel.classList.add('hidden');
            t2VSplitter2.classList.add('hidden');
            t2ModelSideBtn.textContent = "Side";

            t2InlineModelArea.classList.remove('hidden');
            t2HSplitter.classList.remove('hidden');
            t2ModelInlineBtn.textContent = "Hide Below";
        } else {
            t2InlineModelArea.classList.add('hidden');
            t2HSplitter.classList.add('hidden');
            t2ModelInlineBtn.textContent = "Below";
        }
    });

    // Side Model Toggles (Middle Panel)
    t1ModelSideBtn.addEventListener('click', () => {
        const isHidden = t1MiddlePanel.classList.contains('hidden');
        if (isHidden) {
            // Hide Below view if open
            t1InlineModelArea.classList.add('hidden');
            t1HSplitter.classList.add('hidden');
            t1ModelInlineBtn.textContent = "Below";

            t1MiddlePanel.classList.remove('hidden');
            t1VSplitter2.classList.remove('hidden');
            t1ModelSideBtn.textContent = "Hide Side";
        } else {
            t1MiddlePanel.classList.add('hidden');
            t1VSplitter2.classList.add('hidden');
            t1ModelSideBtn.textContent = "Side";
        }
    });
    t2ModelSideBtn.addEventListener('click', () => {
        const isHidden = t2MiddlePanel.classList.contains('hidden');
        if (isHidden) {
            // Hide Below view if open
            t2InlineModelArea.classList.add('hidden');
            t2HSplitter.classList.add('hidden');
            t2ModelInlineBtn.textContent = "Below";

            t2MiddlePanel.classList.remove('hidden');
            t2VSplitter2.classList.remove('hidden');
            t2ModelSideBtn.textContent = "Hide Side";
        } else {
            t2MiddlePanel.classList.add('hidden');
            t2VSplitter2.classList.add('hidden');
            t2ModelSideBtn.textContent = "Side";
        }
    });
}

// --- Navigation ---
function switchPart(part) {
    currentPart = part;
    if (part === 1) {
        navPart1.classList.add('active');
        navPart2.classList.remove('active');
        task1Section.classList.add('active');
        task1Section.classList.remove('hidden');
        task2Section.classList.add('hidden');
        task2Section.classList.remove('active');
    } else {
        navPart2.classList.add('active');
        navPart1.classList.remove('active');
        task2Section.classList.add('active');
        task2Section.classList.remove('hidden');
        task1Section.classList.add('hidden');
        task1Section.classList.remove('active');
    }
}

// --- Content Loading ---
function loadRandomTask1() {
    if (typeof IELTS_QUESTIONS === 'undefined') return;
    const q = IELTS_QUESTIONS[Math.floor(Math.random() * IELTS_QUESTIONS.length)];
    t1SpecificPrompt.textContent = q.promptText;

    if (q.modelAnswer) {
        currentT1Model = q.modelAnswer;
        t1InlineModelText.textContent = currentT1Model;
        t1SideModelText.textContent = currentT1Model;
        t1ModelLabel.classList.remove('hidden');
        t1ModelInlineBtn.classList.remove('hidden');
        t1ModelSideBtn.classList.remove('hidden');
        t1ModelPopupBtn.classList.remove('hidden');
    } else {
        currentT1Model = null;
        t1InlineModelText.textContent = '';
        t1SideModelText.textContent = '';
        t1ModelLabel.classList.add('hidden');
        t1ModelInlineBtn.classList.add('hidden');
        t1ModelSideBtn.classList.add('hidden');
        t1ModelPopupBtn.classList.add('hidden');
        // Hide areas
        t1InlineModelArea.classList.add('hidden');
        t1HSplitter.classList.add('hidden');
        t1ModelInlineBtn.textContent = "Below";
        t1MiddlePanel.classList.add('hidden');
        t1VSplitter2.classList.add('hidden');
        t1ModelSideBtn.textContent = "Side";
    }

    if (currentChart) {
        currentChart.destroy();
        currentChart = null;
    }

    if (q.type === 'html') {
        t1ChartCanvas.classList.add('hidden');
        t1HtmlDiagram.classList.remove('hidden');
        t1HtmlDiagram.innerHTML = q.htmlContent;
    } else {
        t1HtmlDiagram.classList.add('hidden');
        t1ChartCanvas.classList.remove('hidden');
        currentChart = new Chart(t1ChartCanvas, q.chartConfig);
    }
}

function loadRandomTask2() {
    if (typeof IELTS_QUESTIONS_2 === 'undefined') return;
    const q = IELTS_QUESTIONS_2[Math.floor(Math.random() * IELTS_QUESTIONS_2.length)];
    t2SpecificPrompt.textContent = q.promptText;

    if (q.modelAnswer) {
        currentT2Model = q.modelAnswer;
        t2InlineModelText.textContent = currentT2Model;
        t2SideModelText.textContent = currentT2Model;
        t2ModelLabel.classList.remove('hidden');
        t2ModelInlineBtn.classList.remove('hidden');
        t2ModelSideBtn.classList.remove('hidden');
        t2ModelPopupBtn.classList.remove('hidden');
    } else {
        currentT2Model = null;
        t2InlineModelText.textContent = '';
        t2SideModelText.textContent = '';
        t2ModelLabel.classList.add('hidden');
        t2ModelInlineBtn.classList.add('hidden');
        t2ModelSideBtn.classList.add('hidden');
        t2ModelPopupBtn.classList.add('hidden');
        // Hide areas
        t2InlineModelArea.classList.add('hidden');
        t2HSplitter.classList.add('hidden');
        t2ModelInlineBtn.textContent = "Below";
        t2MiddlePanel.classList.add('hidden');
        t2VSplitter2.classList.add('hidden');
        t2ModelSideBtn.textContent = "Side";
    }
}

// --- Word Counter ---
function updateWordCount(textarea, displayEl, minTarget) {
    const text = textarea.value.trim();
    const words = text.length > 0 ? text.match(/\S+/g) : [];
    const count = words ? words.length : 0;
    
    displayEl.textContent = `Word count: ${count}`;
    displayEl.style.color = count >= minTarget ? '#388e3c' : '#666';
    return count;
}

// --- Timer ---
function updateTimerDisplay() {
    const mins = Math.floor(secondsRemaining / 60);
    const secs = secondsRemaining % 60;
    timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    if (secondsRemaining <= 300) { // Under 5 minutes turns red, and forces display if hidden
        timerDisplay.classList.add('danger');
        if (isTimerHidden) toggleTimeBtn.click();
    } else {
        timerDisplay.classList.remove('danger');
    }
}

function startTimer() {
    isTimerRunning = true;
    timerInterval = setInterval(() => {
        secondsRemaining--;
        updateTimerDisplay();
        
        if (secondsRemaining <= 0) {
            clearInterval(timerInterval);
            isTimerRunning = false;
            timeUp();
        }
    }, 1000);
}

function timeUp() {
    t1Answer.disabled = true;
    t2Answer.disabled = true;
    modalTitle.textContent = "Time's Up!";
    submitExam();
}

// --- Submission ---
function submitExam() {
    if (timerInterval) clearInterval(timerInterval);
    isTimerRunning = false;
    t1Answer.disabled = true;
    t2Answer.disabled = true;

    const count1 = updateWordCount(t1Answer, t1WordCount, 150);
    const count2 = updateWordCount(t2Answer, t2WordCount, 250);
    const timeUsed = parseInt(timerInput.value, 10) * 60 - secondsRemaining;
    const usedMins = Math.floor(timeUsed / 60);
    const usedSecs = timeUsed % 60;

    summaryText.innerHTML = `
        <strong>Time Used:</strong> ${usedMins}m ${usedSecs}s<br><br>
        <strong>Task 1:</strong> ${count1} words<br>
        <strong>Task 2:</strong> ${count2} words
    `;
    submitModal.classList.remove('hidden');
}

function downloadOutput() {
    let content = "=== IELTS WRITING PRACTICE ===\n\n";
    content += "--- TASK 1 ---\n";
    content += isCustomMode ? document.getElementById('t1-custom-prompt').value : t1SpecificPrompt.textContent;
    content += "\n\nAnswer:\n";
    content += t1Answer.value + "\n\n\n";

    content += "--- TASK 2 ---\n";
    content += isCustomMode ? document.getElementById('t2-custom-prompt').value : t2SpecificPrompt.textContent;
    content += "\n\nAnswer:\n";
    content += t2Answer.value + "\n";

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `IELTS_Writing_Full_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// --- Splitter Logic ---
function setupSplitters() {
    const hSplitters = [
        { el: t1HSplitter, area: t1InlineModelArea, container: document.getElementById('t1-left-panel') },
        { el: t2HSplitter, area: t2InlineModelArea, container: document.getElementById('t2-left-panel') }
    ];
    let activeHSplitter = null;

    hSplitters.forEach(s => {
        if (!s.el) return;
        s.el.addEventListener('mousedown', (e) => {
            activeHSplitter = s;
            s.el.classList.add('active');
            document.body.style.cursor = 'row-resize';
            e.preventDefault();
        });
    });

    const vSplitters = [
        { el: t1VSplitter1, type: 'left' },
        { el: t2VSplitter1, type: 'left' },
        { el: t1VSplitter2, type: 'middle' },
        { el: t2VSplitter2, type: 'middle' }
    ];
    let activeVSplitter = null;

    vSplitters.forEach(s => {
        if (!s.el) return;
        s.el.addEventListener('mousedown', (e) => {
            activeVSplitter = s;
            s.el.classList.add('active');
            document.body.style.cursor = 'col-resize';
            e.preventDefault();
        });
    });

    document.addEventListener('mousemove', (e) => {
        // Vertical splitters
        if (activeVSplitter) {
            const containerWidth = document.body.clientWidth;
            if (activeVSplitter.type === 'left') {
                let newLeftWidth = (e.clientX / containerWidth) * 100;
                if (newLeftWidth < 15) newLeftWidth = 15;
                if (newLeftWidth > 70) newLeftWidth = 70;
                document.documentElement.style.setProperty('--left-panel-width', `${newLeftWidth}%`);
            } else if (activeVSplitter.type === 'middle') {
                let leftWidth = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--left-panel-width')) || 45;
                let newMiddleWidth = (e.clientX / containerWidth) * 100 - leftWidth;
                if (newMiddleWidth < 10) newMiddleWidth = 10;
                if (newMiddleWidth > 60) newMiddleWidth = 60;
                document.documentElement.style.setProperty('--middle-panel-width', `${newMiddleWidth}%`);
            }
        }

        // Horizontal splitters
        if (activeHSplitter) {
            const containerRect = activeHSplitter.container.getBoundingClientRect();
            const newHeight = containerRect.bottom - e.clientY;
            const containerHeight = containerRect.height;
            let heightPercent = (newHeight / containerHeight) * 100;
            if (heightPercent < 15) heightPercent = 15;
            if (heightPercent > 75) heightPercent = 75;
            activeHSplitter.area.style.height = `${heightPercent}%`;
        }
    });

    document.addEventListener('mouseup', () => {
        if (activeVSplitter) {
            activeVSplitter.el.classList.remove('active');
            activeVSplitter = null;
            document.body.style.cursor = 'default';
        }
        if (activeHSplitter) {
            activeHSplitter.el.classList.remove('active');
            activeHSplitter = null;
            document.body.style.cursor = 'default';
        }
    });
}

// Start app
window.onload = init;
