// Funções do preloader
function showPreloader() {
    const preloader = document.getElementById("preloader1");
    preloader.style.opacity = "1";
    preloader.style.zIndex = "1050";
}

function hidePreloader() {
    const preloader = document.getElementById("preloader1");
    preloader.style.opacity = "0";
    preloader.style.zIndex = "-1";
}

// Preloader Gamificado
function showGamefiedPreloader() {
    const preloader = document.getElementById("preloader1");
    preloader.innerHTML = `
        <div class="preloader-content">
            <svg viewBox="0 0 200 200" class="skill-loader">
                <defs>
                    <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#9333EA"/>
                        <stop offset="100%" stop-color="#7928CA"/>
                    </linearGradient>
                </defs>
                <path 
                    d="M100 20 L140 60 Q160 80, 160 110 A60 60 0 1 1 40 110 Q40 80, 60 60 Z" 
                    fill="url(#skillGradient)" 
                    class="loader-path"
                />
                <text x="100" y="120" text-anchor="middle" fill="white" font-size="16">
                    Analisando...
                </text>
            </svg>
            <p class="loading-text">Preparando seu perfil ideal</p>
        </div>
    `;
    preloader.style.opacity = "1";
    preloader.style.zIndex = "1050";
}

// Renderizar Resultado Gamificado
function renderGamefiedResult(result) {
    const responseContainer = document.getElementById("responseContainer");
    responseContainer.innerHTML = `
       <div class="result-card">
           <div class="result-header">
               <h3>Análise de Compatibilidade: ${result.jobTitle}</h3>
               <div class="badge ${getBadgeClass(result.compatibilityScore)}">
                   ${getBadgeIcon(result.compatibilityScore)}
               </div>
           </div>
           <div class="result-content">
               <div class="chart-section">
                   <div class="pie-chart" data-compatibility="${result.compatibilityScore}">
                       <svg viewBox="0 0 36 36" class="circular-chart">
                           <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                           <path class="circle" stroke-dasharray="${result.compatibilityScore}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                           <text x="18" y="20.35" class="percentage">${result.compatibilityScore}%</text>
                       </svg>
                   </div>
                   <div class="result-summary">
                       <h4>${getBadgeText(result.compatibilityScore)}</h4>
                   </div>
               </div>
               <div class="analysis-description">
                   <p>Com base na análise do seu perfil em relação aos requisitos da vaga, identificamos uma compatibilidade básica. Suas habilidades em Python, desenvolvimento Full-Stack e IA são valiosas, porém há oportunidades de crescimento em áreas importantes como cloud computing (AWS), infraestrutura como código (Terraform) e práticas DevOps. Recomendamos focar no desenvolvimento dessas competências para aumentar suas chances de sucesso nesta posição.</p>
               </div>
               <div class="cv-improvements">
                   <h5>Sugestões para o Currículo</h5>
                   <p>Para melhorar seu currículo, considere:</p>
                   <ul>
                       <li>Destacar projetos práticos relacionados às habilidades compatíveis</li>
                       <li>Incluir certificações relevantes</li>
                       <li>Detalhar experiências com tecnologias específicas</li>
                       <li>Quantificar resultados e impactos em projetos anteriores</li>
                   </ul>
               </div>
               <div class="skills-section">
                   <div class="matched-skills">
                       <h5>Habilidades Compatíveis</h5>
                       <ul>
                           ${result.matchedSkills.map(skill => `<li>✓ ${skill}</li>`).join('')}
                       </ul>
                   </div>
                   <div class="missing-skills">
                       <h5>Habilidades a Desenvolver</h5>
                       <ul>
                           ${result.missingSkills.map(skill => `<li>★ ${skill}</li>`).join('')}
                       </ul>
                   </div>
               </div>
               <button id="saveAnalysisBtn" class="save-btn">
                   Salvar Análise
               </button>
           </div>
       </div>
   `;
    responseContainer.classList.remove("hidden");
    responseContainer.scrollIntoView({ behavior: "smooth" });

    document.getElementById("saveAnalysisBtn").addEventListener("click", saveAnalysis);
}

// Funções auxiliares
function getBadgeClass(score) {
    if (score >= 90) return 'gold-badge';
    if (score >= 75) return 'silver-badge';
    return 'bronze-badge';
}

function getBadgeIcon(score) {
    if (score >= 90) return '🏆';
    if (score >= 75) return '⭐';
    return '✨';
}

function getBadgeText(score) {
    if (score >= 90) return "Excelente Compatibilidade";
    if (score >= 75) return "Boa Compatibilidade";
    return "Compatibilidade Básica";
}

function saveAnalysis() {
    // Lógica para salvar análise (pode ser implementada conforme necessidade)
    alert('Funcionalidade de salvar análise');
}

// Render resultados

// function renderGamefiedResult(result) {
//     const responseContainer = document.getElementById("responseContainer");
//     responseContainer.innerHTML = `
//         <div class="result-card">
//             <div class="result-header">
//                 <h3>${result.jobTitle}</h3>
//                 <div class="badge ${getBadgeClass(result.compatibilityScore)}">
//                     ${getBadgeIcon(result.compatibilityScore)}
//                 </div>
//             </div>
//             <div class="result-content">
//                 <div class="chart-section">
//                     <div class="pie-chart" data-compatibility="${result.compatibilityScore}">
//                         <svg viewBox="0 0 36 36" class="circular-chart">
//                             <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
//                             <path class="circle" stroke-dasharray="${result.compatibilityScore}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
//                             <text x="18" y="20.35" class="percentage">${result.compatibilityScore}%</text>
//                         </svg>
//                     </div>
//                     <div class="result-summary">
//                         <h4>${getBadgeText(result.compatibilityScore)}</h4>
//                     </div>
//                 </div>
//                 <div class="skills-section">
//                     <div class="matched-skills">
//                         <h5>Habilidades Compatíveis</h5>
//                         <ul>
//                             ${result.matchedSkills.map(skill => `<li>✓ ${skill}</li>`).join('')}
//                         </ul>
//                     </div>
//                     <div class="missing-skills">
//                         <h5>Habilidades a Desenvolver</h5>
//                         <ul>
//                             ${result.missingSkills.map(skill => `<li>★ ${skill}</li>`).join('')}
//                         </ul>
//                     </div>
//                 </div>
//                 <div class="analysis-description">
//                     <h5>Descrição da Análise</h5>
//                     <p>${result.analysisDescription}</p>
//                 </div>
//                 <button id="saveAnalysisBtn" class="save-btn">
//                     Salvar Análise
//                 </button>
//             </div>
//         </div>
//     `;
//     responseContainer.classList.remove("hidden");
//     responseContainer.scrollIntoView({ behavior: "smooth" });

//     document.getElementById("saveAnalysisBtn").addEventListener("click", saveAnalysis);
// }

// File Upload Handler
const fileInput = document.getElementById("inp_file");
const dropArea = document.querySelector(".file-drop-area");
const fileInfo = document.getElementById("fileInfo");
const fileName = document.getElementById("fileName");

dropArea.addEventListener("click", () => fileInput.click());

dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.classList.add("drag-over");
});

dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("drag-over");
});

dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    dropArea.classList.remove("drag-over");
    fileInput.files = e.dataTransfer.files;
    updateFileInfo();
});

fileInput.addEventListener("change", updateFileInfo);

function updateFileInfo() {
    if (fileInput.files.length > 0) {
        fileInfo.classList.remove("hidden");
        fileName.textContent = fileInput.files[0].name;
    } else {
        fileInfo.classList.add("hidden");
    }
}

// Form Submission
document.getElementById("btnSubmit").addEventListener("click", async function (event) {
    event.preventDefault();

    const file = fileInput.files[0];
    const jobpost = document.getElementById("inp_textarea").value;

    if (!file) {
        alert("Por favor, selecione um arquivo de currículo.");
        return;
    }

    if (!jobpost.trim()) {
        alert("Por favor, insira a descrição da vaga.");
        return;
    }

    showGamefiedPreloader();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("jobpost", jobpost);
    formData.append("message", "faça seu trabalho");

    try {
        const response = await fetch("http://127.0.0.1:8000/api/services/scorejobs", {
            method: "POST",
            body: formData
        });

        hidePreloader();

        if (response.ok) {
            const resultText = await response.text();
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = resultText;

            // Extrai a pontuação total
            const compatibilityScoreElement = Array.from(tempDiv.querySelectorAll('strong'))
                .find(el => el.textContent.includes('Pontuação Total:'));

            const compatibilityScore = compatibilityScoreElement
                ? parseInt(compatibilityScoreElement.nextSibling.textContent.replace('%', ''))
                : 0;

            // Extrai o título da vaga
            const jobTitleElement = tempDiv.querySelector('h2');
            const jobTitle = jobTitleElement ? jobTitleElement.textContent : 'Análise de Vaga';

            // Extrai a conclusão/descrição
            const conclusionElement = Array.from(tempDiv.querySelectorAll('p')).find(p => p.textContent.startsWith('O CV de'));
            const analysisDescription = conclusionElement ? conclusionElement.textContent : 'Análise detalhada do perfil';

            const matchedSkills = ['Python', 'Full-Stack', 'IA'];
            const missingSkills = ['Golang', 'React', 'Terraform', 'AWS', 'DevOps'];

            const result = {
                compatibilityScore,
                matchedSkills,
                missingSkills,
                jobTitle,
                analysisDescription
            };

            renderGamefiedResult(result);
        } else {
            const errorText = await response.text();
            alert("Erro ao processar a análise: " + errorText);
        }
    } catch (error) {
        hidePreloader();
        alert("Erro ao enviar a requisição: " + error.message);
    }
});