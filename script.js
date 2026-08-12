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
const helpBtn = document.getElementById('help-btn');
const settingsBtn = document.getElementById('settings-btn');
const savedQuestionsBtn = document.getElementById('saved-questions-btn');

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

// Upgrade Chart.js global defaults for a more professional, compact look
if (typeof Chart !== 'undefined') {
    Chart.defaults.font.family = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
    Chart.defaults.font.size = 11;
    Chart.defaults.color = '#475569';
    Chart.defaults.scale.grid.color = '#f1f5f9';
    Chart.defaults.scale.grid.borderColor = '#cbd5e1';
    Chart.defaults.plugins.title.font.size = 13;
    Chart.defaults.plugins.title.font.weight = 'bold';
    Chart.defaults.plugins.title.color = '#1e293b';
    Chart.defaults.plugins.title.padding = { top: 0, bottom: 10 };
    Chart.defaults.plugins.legend.labels.usePointStyle = true;
    Chart.defaults.plugins.legend.labels.boxWidth = 8;
    Chart.defaults.plugins.legend.position = 'bottom';
    Chart.defaults.maintainAspectRatio = true;
    Chart.defaults.aspectRatio = 1.5;
    Chart.defaults.layout = { padding: 0 };
}

const t1Answer = document.getElementById('t1-answer');
const t1WordCount = document.getElementById('t1-word-count');
const newT1Btn = document.getElementById('new-t1-btn');

const t1ModelLabel = document.getElementById('t1-model-label');
const t1ModelInlineBtn = document.getElementById('t1-model-inline-btn');
const t1ModelSideBtn = document.getElementById('t1-model-side-btn');
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
const t1CustomModel = document.getElementById('t1-custom-model');
const t2CustomModel = document.getElementById('t2-custom-model');
const t1SaveCustomBtn = document.getElementById('t1-save-custom-btn');
const t2SaveCustomBtn = document.getElementById('t2-save-custom-btn');
let isCustomMode = false;

// Modal
const submitModal = document.getElementById('submit-modal');
const summaryText = document.getElementById('summary-text');
const downloadBtn = document.getElementById('download-btn');
const downloadDocBtn = document.getElementById('download-doc-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalTitle = document.getElementById('modal-title');

const helpModal = document.getElementById('help-modal');
const closeHelpBtn = document.getElementById('close-help-btn');
const helpOverlay = document.getElementById('help-overlay');

const savedQuestionsModal = document.getElementById('saved-questions-modal');
const closeSavedBtn = document.getElementById('close-saved-btn');
const savedQuestionsOverlay = document.getElementById('saved-questions-overlay');
const savedQuestionsList = document.getElementById('saved-questions-list');

// AI Elements
const aiSettingsBtn = document.getElementById('ai-settings-btn');
const aiSettingsModal = document.getElementById('ai-settings-modal');
const closeAiSettingsBtn = document.getElementById('close-ai-settings-btn');
const aiSettingsOverlay = document.getElementById('ai-settings-overlay');
const saveAiKeyBtn = document.getElementById('save-ai-key-btn');
const aiApiKeyInput = document.getElementById('ai-api-key-input');

const aiResultsModal = document.getElementById('ai-results-modal');
const closeAiResultsBtn = document.getElementById('close-ai-results-btn');
const aiResultsOverlay = document.getElementById('ai-results-overlay');
const aiLoadingIndicator = document.getElementById('ai-loading-indicator');
const aiResultsContent = document.getElementById('ai-results-content');
const aiDownloadPdfBtn = document.getElementById('ai-download-pdf-btn');
const aiDownloadDocBtn = document.getElementById('ai-download-doc-btn');

const t1AiEvaluateBtn = document.getElementById('t1-ai-evaluate-btn');
const t2AiEvaluateBtn = document.getElementById('t2-ai-evaluate-btn');

let currentT1Model = null;
let currentT2Model = null;
let randomT1Model = null;
let randomT2Model = null;

let currentLoadedQuestionId = { 1: null, 2: null };

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
            settingsBtn.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-9.21l-3 3"></path></svg> Random Mode`;
            t1RandomMode.classList.add('hidden');
            t1CustomMode.classList.remove('hidden');
            t2RandomMode.classList.add('hidden');
            t2CustomMode.classList.remove('hidden');
            newT1Btn.classList.add('hidden');
            newT2Btn.classList.add('hidden');

            // Switch models to custom
            updateCustomModels();
        } else {
            settingsBtn.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> Custom Mode`;
            t1RandomMode.classList.remove('hidden');
            t1CustomMode.classList.add('hidden');
            t2RandomMode.classList.remove('hidden');
            t2CustomMode.classList.add('hidden');
            newT1Btn.classList.remove('hidden');
            newT2Btn.classList.remove('hidden');

            // Revert models to random
            setT1Model(randomT1Model);
            setT2Model(randomT2Model);
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

    // Help Button
    helpBtn.addEventListener('click', () => {
        helpModal.classList.remove('hidden');
    });
    closeHelpBtn.addEventListener('click', () => {
        helpModal.classList.add('hidden');
    });
    helpOverlay.addEventListener('click', () => {
        helpModal.classList.add('hidden');
    });

    // Saved Questions Modal
    savedQuestionsBtn.addEventListener('click', () => {
        renderSavedQuestions();
        savedQuestionsModal.classList.remove('hidden');
        savedQuestionsOverlay.classList.remove('hidden');
    });
    closeSavedBtn.addEventListener('click', () => {
        savedQuestionsModal.classList.add('hidden');
        savedQuestionsOverlay.classList.add('hidden');
    });
    savedQuestionsOverlay.addEventListener('click', () => {
        savedQuestionsModal.classList.add('hidden');
        savedQuestionsOverlay.classList.add('hidden');
    });

    // AI Settings Modal
    aiSettingsBtn.addEventListener('click', () => {
        aiApiKeyInput.value = localStorage.getItem('ielts_ai_key') || '';
        aiSettingsModal.classList.remove('hidden');
    });
    
    closeAiSettingsBtn.addEventListener('click', () => {
        aiSettingsModal.classList.add('hidden');
    });
    
    aiSettingsOverlay.addEventListener('click', () => {
        aiSettingsModal.classList.add('hidden');
    });
    
    saveAiKeyBtn.addEventListener('click', () => {
        const key = aiApiKeyInput.value.trim();
        if (key) {
            localStorage.setItem('ielts_ai_key', key);
            aiSettingsModal.classList.add('hidden');
            alert('API Key saved successfully!');
        } else {
            alert('Please enter a valid key or cancel.');
        }
    });

    // Close AI Results Modal
    closeAiResultsBtn.addEventListener('click', () => {
        aiResultsModal.classList.add('hidden');
    });
    aiResultsOverlay.addEventListener('click', () => {
        aiResultsModal.classList.add('hidden');
    });

    // AI Download Buttons
    aiDownloadPdfBtn.addEventListener('click', () => {
        const element = document.getElementById('ai-results-content');
        const opt = {
            margin:       0.5,
            filename:     'IELTS_AI_Evaluation.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
            pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
        };
        html2pdf().set(opt).from(element).save();
    });

    aiDownloadDocBtn.addEventListener('click', () => {
        const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
        const footer = "</body></html>";
        const sourceHTML = header + document.getElementById('ai-results-content').innerHTML + footer;
        
        const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
        const fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = 'IELTS_AI_Evaluation.doc';
        fileDownload.click();
        document.body.removeChild(fileDownload);
    });
    
    // Evaluate Buttons
    t1AiEvaluateBtn.addEventListener('click', () => evaluateEssay(1));
    t2AiEvaluateBtn.addEventListener('click', () => evaluateEssay(2));
    
    // Save Custom Questions
    t1SaveCustomBtn.addEventListener('click', () => saveCustomQuestion(1));
    t2SaveCustomBtn.addEventListener('click', () => saveCustomQuestion(2));

    // Custom Model Inputs
    t1CustomModel.addEventListener('input', () => {
        if (isCustomMode) updateCustomModels();
    });
    t2CustomModel.addEventListener('input', () => {
        if (isCustomMode) updateCustomModels();
    });

    // New Questions
    newT1Btn.addEventListener('click', loadRandomTask1);
    newT2Btn.addEventListener('click', loadRandomTask2);

    // Answer Areas
    t1Answer.addEventListener('input', () => updateWordCount(t1Answer, t1WordCount, 150));
    t2Answer.addEventListener('input', () => updateWordCount(t2Answer, t2WordCount, 250));

    // Global modifier tracking for Paste Bypass (ClipboardEvent lacks modifier keys)
    let isSecretModifierDown = false;
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Alt' || e.key === 'Shift') isSecretModifierDown = true;
    });
    document.addEventListener('keyup', (e) => {
        if (e.key === 'Alt' || e.key === 'Shift') isSecretModifierDown = false;
    });

    // Disable Paste (Exam Simulation) - With Secret Bypass
    const blockPaste = (e) => {
        // Secretly allow paste if the user holds Alt or Shift
        if (isSecretModifierDown) {
            return; // Allow paste
        }
        e.preventDefault();
        alert("Pasting from outside is disabled in exam mode.");
    };
    t1Answer.addEventListener('paste', blockPaste);
    t2Answer.addEventListener('paste', blockPaste);

    // Disable Right Click (Exam Simulation) - With Secret Bypass
    document.addEventListener('contextmenu', event => {
        if (!event.altKey && !event.shiftKey) {
            event.preventDefault();
        }
    });

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
    settingsBtn.addEventListener('click', toggleSettings);
    closeSettingsBtn.addEventListener('click', toggleSettings);
    settingsOverlay.addEventListener('click', toggleSettings);

    const fullscreenBtn = document.getElementById('fullscreen-btn');
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', () => {
            if (!document.fullscreenElement && !document.webkitFullscreenElement) {
                const docElm = document.documentElement;
                if (docElm.requestFullscreen) {
                    docElm.requestFullscreen().catch(err => alert(`Error: ${err.message}`));
                } else if (docElm.webkitRequestFullscreen) { /* Safari */
                    docElm.webkitRequestFullscreen();
                } else if (docElm.msRequestFullscreen) { /* IE11 */
                    docElm.msRequestFullscreen();
                } else {
                    alert("Full screen is not supported by this browser.");
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) { /* Safari */
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) { /* IE11 */
                    document.msExitFullscreen();
                }
            }
        });

        // Update icon based on fullscreen state
        const updateFullscreenIcon = () => {
            if (document.fullscreenElement || document.webkitFullscreenElement) {
                fullscreenBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
                    </svg>`;
                fullscreenBtn.title = "Exit Full Screen";
            } else {
                fullscreenBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                    </svg>`;
                fullscreenBtn.title = "Toggle Full Screen";
            }
        };

        document.addEventListener('fullscreenchange', updateFullscreenIcon);
        document.addEventListener('webkitfullscreenchange', updateFullscreenIcon);
    }

    downloadBtn.addEventListener('click', downloadOutput);
    downloadDocBtn.addEventListener('click', downloadOutputDoc);



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
function resizeLayout() {
    // Basic responsive handling if needed
    if (window.innerWidth < 768) {
        // Force splitters to adjust if necessary
    }
}

// --- Local Storage: Saved Custom Questions ---

function getSavedQuestions() {
    const saved = localStorage.getItem('ielts_saved_questions');
    return saved ? JSON.parse(saved) : [];
}

function saveCustomQuestion(taskNum) {
    const questions = getSavedQuestions();
    
    let promptText = '';
    let modelAnswer = '';
    let imageSrc = null;

    if (taskNum === 1) {
        promptText = document.getElementById('t1-custom-prompt').value.trim();
        modelAnswer = t1CustomModel.value.trim();
        imageSrc = t1CustomPreview.src;
    } else {
        promptText = document.getElementById('t2-custom-prompt').value.trim();
        modelAnswer = t2CustomModel.value.trim();
    }

    if (!promptText) {
        alert('Please enter a prompt to save.');
        return;
    }

    const timerStr = document.getElementById(taskNum === 1 ? 't1-time' : 't2-time') ? document.getElementById(taskNum === 1 ? 't1-time' : 't2-time').innerText : 'N/A';

    const saveAsNew = () => {
        const newQ = {
            id: Date.now().toString(),
            task: taskNum,
            promptText: promptText,
            imageSrc: imageSrc && !imageSrc.endsWith(window.location.host + '/') ? imageSrc : null,
            modelAnswer: modelAnswer,
            date: new Date().toLocaleString(),
            timer: timerStr,
            starred: false
        };
        questions.push(newQ);
        localStorage.setItem('ielts_saved_questions', JSON.stringify(questions));
        currentLoadedQuestionId[taskNum] = newQ.id;
        renderSavedQuestions();
        alert(`Task ${taskNum} Custom Question Saved!`);
    };

    const overwriteExisting = (existingId) => {
        const qIndex = questions.findIndex(item => item.id === existingId);
        if (qIndex > -1) {
            questions[qIndex].promptText = promptText;
            questions[qIndex].modelAnswer = modelAnswer;
            questions[qIndex].imageSrc = imageSrc && !imageSrc.endsWith(window.location.host + '/') ? imageSrc : null;
            questions[qIndex].date = new Date().toLocaleString();
            questions[qIndex].timer = timerStr;
            localStorage.setItem('ielts_saved_questions', JSON.stringify(questions));
            renderSavedQuestions();
            alert(`Task ${taskNum} Custom Question Updated!`);
        } else {
            saveAsNew(); // Fallback if somehow not found
        }
    };

    // Check if editing a loaded question
    const loadedId = currentLoadedQuestionId[taskNum];
    if (loadedId) {
        showCustomConfirm(
            "You are editing a previously saved question. Do you want to update it or save this as a brand new copy?",
            "Update Existing",
            "Save as New",
            () => overwriteExisting(loadedId),
            () => saveAsNew()
        );
        return;
    }

    // Check if exact prompt already exists
    const duplicateQ = questions.find(q => q.task === taskNum && q.promptText === promptText);
    if (duplicateQ) {
        showCustomConfirm(
            "This exact prompt already exists in your library. Do you want to overwrite it or save this as a duplicate?",
            "Overwrite",
            "Save as Duplicate",
            () => overwriteExisting(duplicateQ.id),
            () => saveAsNew()
        );
        return;
    }

    saveAsNew();
}

function showCustomConfirm(message, primaryText, secondaryText, onPrimary, onSecondary) {
    const modal = document.getElementById('custom-confirm-modal');
    const overlay = document.getElementById('custom-confirm-overlay');
    document.getElementById('custom-confirm-message').innerText = message;
    
    const btnPrimary = document.getElementById('custom-confirm-primary');
    const btnSecondary = document.getElementById('custom-confirm-secondary');
    const btnCancel = document.getElementById('custom-confirm-cancel');

    btnPrimary.innerText = primaryText;
    btnSecondary.innerText = secondaryText;

    modal.classList.remove('hidden');

    const cleanup = () => {
        modal.classList.add('hidden');
        btnPrimary.replaceWith(btnPrimary.cloneNode(true));
        btnSecondary.replaceWith(btnSecondary.cloneNode(true));
        btnCancel.replaceWith(btnCancel.cloneNode(true));
    };

    document.getElementById('custom-confirm-primary').addEventListener('click', () => { cleanup(); onPrimary(); });
    document.getElementById('custom-confirm-secondary').addEventListener('click', () => { cleanup(); onSecondary(); });
    document.getElementById('custom-confirm-cancel').addEventListener('click', () => { cleanup(); });
    overlay.addEventListener('click', () => { cleanup(); }, { once: true });
}

function renderSavedQuestions() {
    let questions = getSavedQuestions();
    savedQuestionsList.innerHTML = '';
    
    if (questions.length === 0) {
        savedQuestionsList.innerHTML = '<p style="color: #666; text-align: center;">No saved questions yet.</p>';
        return;
    }

    // Sort: Starred first, then by most recent (descending ID/timestamp)
    questions.sort((a, b) => {
        if (a.starred && !b.starred) return -1;
        if (!a.starred && b.starred) return 1;
        return b.id.localeCompare(a.id);
    });

    questions.forEach(q => {
        const item = document.createElement('div');
        item.className = 'saved-item';
        
        const starClass = q.starred ? 'starred' : '';
        const starPath = q.starred 
            ? '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>' 
            : '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>'; // The CSS will handle fill/color

        item.innerHTML = `
            <div class="saved-item-header">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <strong>Task ${q.task}</strong>
                    <button class="star-btn ${starClass}" onclick="toggleStarSavedQuestion('${q.id}')" title="Pin to top">
                        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">
                            ${starPath}
                        </svg>
                    </button>
                </div>
                <span style="font-size: 0.85rem; color: #64748b;">${q.date}${q.timer ? ` • Timer: ${q.timer}` : ''}</span>
            </div>
            <div class="saved-item-prompt">${q.promptText}</div>
            <div class="saved-item-actions">
                <button class="btn-delete" onclick="deleteSavedQuestion('${q.id}')">Delete</button>
                <button class="btn-load" onclick="loadSavedQuestion('${q.id}')">Load</button>
            </div>
        `;
        savedQuestionsList.appendChild(item);
    });
}

window.toggleStarSavedQuestion = function(id) {
    let questions = getSavedQuestions();
    const qIndex = questions.findIndex(item => item.id === id);
    if (qIndex > -1) {
        questions[qIndex].starred = !questions[qIndex].starred;
        localStorage.setItem('ielts_saved_questions', JSON.stringify(questions));
        renderSavedQuestions();
    }
};

    window.deleteSavedQuestion = function(id) {
        if (!confirm('Are you sure you want to delete this question?')) return;
        let questions = getSavedQuestions();
        questions = questions.filter(q => q.id !== id);
        localStorage.setItem('ielts_saved_questions', JSON.stringify(questions));
        if (currentLoadedQuestionId[1] === id) currentLoadedQuestionId[1] = null;
        if (currentLoadedQuestionId[2] === id) currentLoadedQuestionId[2] = null;
        renderSavedQuestions();
    };

    window.loadSavedQuestion = function(id) {
        const questions = getSavedQuestions();
        const q = questions.find(item => item.id === id);
        if (!q) return;

        // Switch to Custom Mode if not already
        isCustomMode = true;
        updateCustomModels();
        settingsBtn.style.color = 'var(--exam-blue)';
        document.querySelectorAll('.custom-input').forEach(el => el.classList.remove('readonly-bg'));
        t1RandomMode.classList.add('hidden');
        t1CustomMode.classList.remove('hidden');
        t2RandomMode.classList.add('hidden');
        t2CustomMode.classList.remove('hidden');

        currentLoadedQuestionId[q.task] = q.id;

        if (q.task === 1) {
        document.getElementById('t1-custom-prompt').value = q.promptText || '';
        t1CustomModel.value = q.modelAnswer || '';
        if (q.imageSrc) {
            t1CustomPreview.src = q.imageSrc;
            t1CustomPreview.classList.remove('hidden');
        } else {
            t1CustomPreview.src = '';
            t1CustomPreview.classList.add('hidden');
        }
        switchPart(1);
    } else if (q.task === 2) {
        document.getElementById('t2-custom-prompt').value = q.promptText || '';
        t2CustomModel.value = q.modelAnswer || '';
        switchPart(2);
    }

    updateCustomModels();
    
    // Close modal
    savedQuestionsModal.classList.add('hidden');
    savedQuestionsOverlay.classList.add('hidden');
};

// --- AI Evaluation ---

async function evaluateEssay(taskNum) {
    const apiKey = localStorage.getItem('ielts_ai_key');
    if (!apiKey) {
        alert("Please set your Gemini API Key in the AI Settings first.");
        aiSettingsBtn.click();
        return;
    }

    let promptText = "";
    let answerText = "";

    if (taskNum === 1) {
        promptText = isCustomMode ? document.getElementById('t1-custom-prompt').value : document.getElementById('t1-specific-prompt').innerText;
        answerText = document.getElementById('t1-answer').value.trim();
    } else {
        promptText = isCustomMode ? document.getElementById('t2-custom-prompt').value : document.getElementById('t2-specific-prompt').innerText;
        answerText = document.getElementById('t2-answer').value.trim();
    }

    if (!answerText) {
        alert("Please write an answer before evaluating.");
        return;
    }

    // Open Modal & Show Loading
    aiResultsModal.classList.remove('hidden');
    aiLoadingIndicator.style.display = 'block';
    aiResultsContent.style.display = 'none';
    aiResultsContent.innerHTML = '';
    aiDownloadPdfBtn.style.display = 'none';
    aiDownloadDocBtn.style.display = 'none';

    const systemPrompt = `You are an expert, strict IELTS examiner. Evaluate the user's IELTS Academic Writing Task ${taskNum} essay.

You MUST grade based strictly on the official public IELTS band descriptors.

Respond ONLY with a valid JSON object matching this exact structure, with no markdown code blocks outside of the JSON:
{
  "overallScore": "6.0",
  "vocabularyComplexity": "C1 - Intricate",
  "vocabularyComplexityTip": "Strive to incorporate even richer and more precise language.",
  "grammarMistakesCount": 12,
  "wordCount": 254,
  "vocabularyRepetition": [
    {"word": "obtained", "count": 4}
  ],
  "vocabularyRepetitionTip": "Try using synonyms for the above words.",
  "taskResponseScore": "7.0",
  "taskResponseText": "Detailed feedback paragraph about task response...",
  "coherenceCohesionScore": "6.0",
  "coherenceCohesionText": "Detailed feedback paragraph about coherence...",
  "lexicalResourceScore": "5.0",
  "lexicalResourceText": "Detailed feedback paragraph about vocabulary...",
  "grammaticalRangeScore": "5.0",
  "grammaticalRangeText": "Detailed feedback paragraph about grammar...",
  "polishedWriting": "A fully rewritten Band 9 version of their essay. Do NOT use markdown bold/italics here, just plain text with paragraphs."
}

Do not include any markdown formatting like \`\`\`json. Just return the raw JSON string.`;

    const payload = {
        contents: [
            {
                role: "user",
                parts: [
                    { text: systemPrompt },
                    { text: "\n\n--- QUESTION PROMPT ---\n" + promptText },
                    { text: "\n\n--- USER ESSAY ---\n" + answerText }
                ]
            }
        ],
        generationConfig: {
            temperature: 0.2,
            response_mime_type: "application/json"
        }
    };

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message);
        }

        const rawText = data.candidates[0].content.parts[0].text;
        const result = JSON.parse(rawText);
        
        let vocabRepHtml = result.vocabularyRepetition.map(item => `<div style="margin-bottom: 10px;"><strong>${item.word}: ${item.count}</strong></div>`).join('');
        
        const htmlContent = `
            <div class="ai-report-container">
                <div class="score-header">
                    <div style="text-align: right; color: #64748b; font-weight: 600; font-size: 0.95rem; margin-bottom: 20px;">
                        <span>Word Count: ${result.wordCount}</span>
                    </div>
                    <h3>Overall Band Score</h3>
                    <div class="huge-score">${result.overallScore}</div>
                    <div class="score-subtext">(+/- 0.5)</div>
                </div>

                <div class="ai-card">
                    <h4>Vocabulary Complexity:</h4>
                    <div class="card-value">${result.vocabularyComplexity}</div>
                    <div class="card-tip">${result.vocabularyComplexityTip}</div>
                </div>

                <div class="ai-card">
                    <h4>Grammar Mistakes: ${result.grammarMistakesCount}</h4>
                </div>

                <div class="ai-card">
                    <h4>Vocabulary Repetition:</h4>
                    <div class="vocab-rep-list">${vocabRepHtml}</div>
                    <div class="card-tip">${result.vocabularyRepetitionTip}</div>
                </div>

                <hr class="ai-divider">

                <div class="criteria-section">
                    <h3>Task ${taskNum === 1 ? 'Achievement' : 'Response'}</h3>
                    <div class="criteria-score">${result.taskResponseScore}</div>
                    <p>${result.taskResponseText}</p>
                </div>

                <hr class="ai-divider">

                <div class="criteria-section">
                    <h3>Coherence & Cohesion</h3>
                    <div class="criteria-score">${result.coherenceCohesionScore}</div>
                    <p>${result.coherenceCohesionText}</p>
                </div>

                <hr class="ai-divider">

                <div class="criteria-section">
                    <h3>Lexical Resource</h3>
                    <div class="criteria-score">${result.lexicalResourceScore}</div>
                    <p>${result.lexicalResourceText}</p>
                </div>

                <hr class="ai-divider">

                <div class="criteria-section">
                    <h3>Grammatical Range & Accuracy</h3>
                    <div class="criteria-score">${result.grammaticalRangeScore}</div>
                    <p>${result.grammaticalRangeText}</p>
                </div>

                <div class="original-writing-section" style="margin-top: 40px;">
                    <h3>Your Original Essay</h3>
                    <div class="original-box" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 25px; font-size: 1.1rem; line-height: 1.8; color: #334155; white-space: pre-wrap;">
                        ${answerText}
                    </div>
                </div>

                <div class="polished-writing-section">
                    <h3>Polished Writing (Band 9)</h3>
                    <div class="polished-box">
                        ${result.polishedWriting.split('\n').map(p => p.trim() ? `<p>${p}</p>` : '').join('')}
                    </div>
                </div>
            </div>
        `;
        
        aiResultsContent.innerHTML = htmlContent;
        
        aiLoadingIndicator.style.display = 'none';
        aiResultsContent.style.display = 'block';
        aiDownloadPdfBtn.style.display = 'inline-block';
        aiDownloadDocBtn.style.display = 'inline-block';
        
    } catch (error) {
        aiLoadingIndicator.style.display = 'none';
        aiResultsContent.style.display = 'block';
        aiResultsContent.innerHTML = `<div style="color: #ef4444; padding: 20px; background: #fef2f2; border-radius: 8px; border: 1px solid #fecaca;">
            <strong>Evaluation Failed</strong><br><br>
            ${error.message || 'An error occurred while contacting the AI.'}<br><br>
            Please check your API key and internet connection.
        </div>`;
    }
}

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

// --- Custom Model Setters ---
function formatModelText(text) {
    if (!text) return '';
    let formatted = text
        .replace(/Introduction:/g, '<strong>Introduction:</strong>')
        .replace(/Overview:/g, '<strong>Overview:</strong>')
        .replace(/Body Paragraph (\d+):/g, '<strong>Body Paragraph $1:</strong>')
        .replace(/Conclusion:/g, '<strong>Conclusion:</strong>')
        .replace(/How to Plan Your Answer:/g, '<strong style="color: #16a34a; display: block; margin-top: 15px; font-size: 1.2rem;">How to Plan Your Answer:</strong>')
        .replace(/Points to Note for this Question:/g, '<strong style="color: #6366f1; display: block; margin-top: 15px; font-size: 1.1rem;">Points to Note for this Question:</strong>');
    return formatted;
}

function calculateModelWordCount(text) {
    if (!text) return 0;
    // Exclude labels from word count
    let textForCount = text
        .replace(/Introduction:\n?/g, '')
        .replace(/Overview:\n?/g, '')
        .replace(/Conclusion:\n?/g, '')
        .replace(/Body Paragraph \d+:\n?/g, '')
        .replace(/How to Plan Your Answer:[\s\S]*/, '') // Exclude planning phase entirely from count
        .replace(/Points to Note for this Question:[\s\S]*/, '');
    let words = textForCount.match(/\S+/g);
    return words ? words.length : 0;
}

function updateCustomModels() {
    setT1Model(t1CustomModel.value.trim() || null);
    setT2Model(t2CustomModel.value.trim() || null);
}

function setT1Model(modelText) {
    // Strip out the statically generated Word Count line if it exists
    if (modelText) {
        modelText = modelText.replace(/\\n\\nWord Count: \d+ words/g, '');
        modelText = modelText.replace(/\n\nWord Count: \d+ words/g, '');
    }

    currentT1Model = modelText;
    if (currentT1Model) {
        t1ModelLabel.classList.remove('hidden');
        t1ModelInlineBtn.classList.remove('hidden');
        t1ModelSideBtn.classList.remove('hidden');
        t1InlineModelText.innerHTML = formatModelText(currentT1Model);
        t1SideModelText.innerHTML = formatModelText(currentT1Model);

        let wc = calculateModelWordCount(currentT1Model);
        document.getElementById('t1-inline-model-wc').textContent = `Word Count: ${wc} words`;
        document.getElementById('t1-side-model-wc').textContent = `Word Count: ${wc} words`;
    } else {
        t1ModelLabel.classList.add('hidden');
        t1ModelInlineBtn.classList.add('hidden');
        t1ModelSideBtn.classList.add('hidden');

        // Hide areas
        t1InlineModelArea.classList.add('hidden');
        t1HSplitter.classList.add('hidden');
        t1MiddlePanel.classList.add('hidden');
        t1VSplitter2.classList.add('hidden');
        t1ModelInlineBtn.textContent = "Below";
        t1ModelSideBtn.textContent = "Side";
        t1InlineModelText.innerHTML = '';
        t1SideModelText.innerHTML = '';
        document.getElementById('t1-inline-model-wc').textContent = '';
        document.getElementById('t1-side-model-wc').textContent = '';
    }
}

function setT2Model(modelText) {
    // Strip out the statically generated Word Count line if it exists
    if (modelText) {
        modelText = modelText.replace(/\\n\\nWord Count: \d+ words/g, '');
        modelText = modelText.replace(/\n\nWord Count: \d+ words/g, '');
    }

    currentT2Model = modelText;
    if (currentT2Model) {
        t2ModelLabel.classList.remove('hidden');
        t2ModelInlineBtn.classList.remove('hidden');
        t2ModelSideBtn.classList.remove('hidden');
        t2InlineModelText.innerHTML = formatModelText(currentT2Model);
        t2SideModelText.innerHTML = formatModelText(currentT2Model);

        let wc = calculateModelWordCount(currentT2Model);
        document.getElementById('t2-inline-model-wc').textContent = `Word Count: ${wc} words`;
        document.getElementById('t2-side-model-wc').textContent = `Word Count: ${wc} words`;
    } else {
        t2ModelLabel.classList.add('hidden');
        t2ModelInlineBtn.classList.add('hidden');
        t2ModelSideBtn.classList.add('hidden');

        // Hide areas
        t2InlineModelArea.classList.add('hidden');
        t2HSplitter.classList.add('hidden');
        t2MiddlePanel.classList.add('hidden');
        t2VSplitter2.classList.add('hidden');
        t2ModelInlineBtn.textContent = "Below";
        t2ModelSideBtn.textContent = "Side";
        t2InlineModelText.innerHTML = '';
        t2SideModelText.innerHTML = '';
        document.getElementById('t2-inline-model-wc').textContent = '';
        document.getElementById('t2-side-model-wc').textContent = '';
    }
}

// --- Content Loading ---
function loadRandomTask1() {
    if (typeof IELTS_QUESTIONS === 'undefined') return;
    const q = IELTS_QUESTIONS[Math.floor(Math.random() * IELTS_QUESTIONS.length)];
    t1SpecificPrompt.textContent = q.promptText;

    randomT1Model = q.modelAnswer || null;
    if (!isCustomMode) {
        setT1Model(randomT1Model);
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

    randomT2Model = q.modelAnswer || null;
    if (!isCustomMode) {
        setT2Model(randomT2Model);
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
    const t1Text = t1Answer.value;
    const t2Text = t2Answer.value;

    let content = "IELTS WRITING EXAM PRACTICE\n";
    content += "Date: " + new Date().toLocaleString() + "\n";
    content += "--------------------------------------\n\n";
    content += "TASK 1\n";
    content += t1Text + "\n\n";
    content += "--------------------------------------\n\n";
    content += "TASK 2\n";
    content += t2Text + "\n";

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `IELTS_Writing_Practice_${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}

function downloadOutputDoc() {
    const t1Text = t1Answer.value;
    const t2Text = t2Answer.value;

    const content = `
        <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
        <head>
            <meta charset='utf-8'>
            <title>IELTS Essays</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; }
                h1 { color: #005eb8; font-size: 24px; }
                h2 { color: #333; font-size: 18px; margin-top: 20px; border-bottom: 1px solid #ccc; }
                p { font-size: 14px; white-space: pre-wrap; }
            </style>
        </head>
        <body>
            <h1>IELTS Writing Practice</h1>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            
            <h2>Task 1</h2>
            <p>${t1Text.replace(/\n/g, '<br>')}</p>
            
            <h2>Task 2</h2>
            <p>${t2Text.replace(/\n/g, '<br>')}</p>
        </body>
        </html>
    `;

    const blob = new Blob(['\ufeff', content], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `IELTS_Writing_Practice_${new Date().toISOString().slice(0, 10)}.doc`;
    a.click();
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
