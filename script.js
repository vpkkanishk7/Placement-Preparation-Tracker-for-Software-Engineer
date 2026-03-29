// --- LOCAL STORAGE (SAVE + LOAD) ---
function saveData() {
    localStorage.setItem("placementTracker", JSON.stringify(globalDatabase));
}

function loadData() {
    const data = localStorage.getItem("placementTracker");
    if (data) {
        Object.assign(globalDatabase, JSON.parse(data));
    }
}

// --- TOAST NOTIFICATION ---
function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 100);
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// --- DARK MODE ---
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// --- STREAK SYSTEM ---
function updateStreak() {
    let streak = localStorage.getItem("streak") || 0;
    let lastDate = localStorage.getItem("lastDate");

    const today = new Date().toDateString();

    if (lastDate !== today) {
        streak++;
        localStorage.setItem("streak", streak);
        localStorage.setItem("lastDate", today);
    }

    document.getElementById("streak-count").innerText = streak;
}

// --- NAVIGATION ---
function navigate(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    event.target.classList.add('active');
}

// --- DASHBOARD ---
function renderDashboard() {
    const stats = globalDatabase.stats;

    const dsaTotal = stats.dsaTotal || 0;
    const aptTotal = globalDatabase.aptitude.length;

    const dsaPercentage = dsaTotal === 0 ? 0 : (stats.dsaSolved / dsaTotal) * 100;
    const aptPercentage = aptTotal === 0 ? 0 : (stats.aptCompleted / aptTotal) * 100;

    document.getElementById('dsa-progress-fill').style.width = dsaPercentage + '%';
    document.getElementById('dsa-progress-text').innerText = `${stats.dsaSolved} / ${dsaTotal} Problems Solved`;

    document.getElementById('apt-progress-fill').style.width = aptPercentage + '%';
    document.getElementById('apt-progress-text').innerText = `${stats.aptCompleted} / ${aptTotal} Modules Completed`;

    document.getElementById('app-count-text').innerText = stats.activeApps;
}

// --- APTITUDE ---
function renderAptitude() {
    const container = document.getElementById('aptitude-container');
    container.innerHTML = "";
    let completedCount = 0;

    const groupedAptitude = {};
    globalDatabase.aptitude.forEach((item, index) => {
        if (!groupedAptitude[item.category]) {
            groupedAptitude[item.category] = [];
        }
        groupedAptitude[item.category].push({ ...item, originalIndex: index });
    });

    for (const category in groupedAptitude) {
        container.innerHTML += `<div class="category-header">${category}</div>`;

        groupedAptitude[category].forEach(item => {
            if (item.completed) completedCount++;
            const isChecked = item.completed ? "checked" : "";
            const isCompletedClass = item.completed ? "completed" : "";

            container.innerHTML += `
                <label class="checklist-item ${isCompletedClass}">
                    <input type="checkbox" ${isChecked} onchange="toggleAptitude(${item.originalIndex})">
                    <span>${item.topic}</span>
                </label>
            `;
        });
    }

    container.innerHTML += `
        <div class="platform-box">
            <h4>🚀 Top Recommended Practice Platforms</h4>
            <p><strong>General:</strong> IndiaBIX, GeeksforGeeks</p>
            <p><strong>Company Prep:</strong> PrepInsta, Code 360</p>
        </div>
    `;

    globalDatabase.stats.aptCompleted = completedCount;
    renderDashboard();
}

// toggle aptitude
function toggleAptitude(index) {
    globalDatabase.aptitude[index].completed = !globalDatabase.aptitude[index].completed;
    saveData();
    renderAptitude();
}

// --- JOB TRACKER ---
function renderJobs() {
    const tbody = document.getElementById('job-table-body');
    tbody.innerHTML = "";
    let activeCount = 0;

    globalDatabase.jobs.forEach((job, index) => {
        if (job.status !== "Rejected") activeCount++;

        let statusBadge = `<span class="badge">${job.status}</span>`;

        tbody.innerHTML += `
            <tr>
                <td style="font-weight:600;">${job.company}</td>
                <td>${job.role}</td>
                <td>${statusBadge}</td>
                <td>
                    <button class="btn btn-danger" onclick="deleteJob(${index})">Remove</button>
                </td>
            </tr>
        `;
    });

    globalDatabase.stats.activeApps = activeCount;
    renderDashboard();
}

// add job
function addJob() {
    const company = document.getElementById('job-company').value;
    const role = document.getElementById('job-role').value;
    const status = document.getElementById('job-status').value;

    if (!company || !role) {
        showToast("Please fill company and role!");
        return;
    }

    globalDatabase.jobs.push({ company, role, status });

    document.getElementById('job-company').value = "";
    document.getElementById('job-role').value = "";

    saveData();
    showToast("Job added successfully 🚀");
    renderJobs();
}

// delete job
function deleteJob(index) {
    globalDatabase.jobs.splice(index, 1);
    saveData();
    showToast("Job removed ❌");
    renderJobs();
}

// --- DSA ---
function renderDSA() {
    const container = document.getElementById('dsa-container');
    container.innerHTML = "";

    let solvedCount = 0;
    let totalCount = 0;

    globalDatabase.dsa.forEach((categoryData, catIndex) => {
        container.innerHTML += `<div class="category-header">${categoryData.category}</div>`;

        categoryData.topics.forEach((item, topicIndex) => {
            totalCount++;
            if (item.completed) solvedCount++;

            const isChecked = item.completed ? "checked" : "";
            const isCompletedClass = item.completed ? "completed" : "";

            container.innerHTML += `
                <label class="checklist-item ${isCompletedClass}">
                    <input type="checkbox" ${isChecked} onchange="toggleDSA(${catIndex}, ${topicIndex})">
                    <span>${item.name}</span>
                </label>
            `;
        });
    });

    globalDatabase.stats.dsaSolved = solvedCount;
    globalDatabase.stats.dsaTotal = totalCount;

    renderDashboard();
}

// toggle dsa
function toggleDSA(catIndex, topicIndex) {
    globalDatabase.dsa[catIndex].topics[topicIndex].completed =
        !globalDatabase.dsa[catIndex].topics[topicIndex].completed;

    saveData();
    renderDSA();
}

// --- CORE SUBJECTS ---
function renderCoreSubjects() {
    const container = document.getElementById('core-container');
    container.innerHTML = "";

    globalDatabase.coreSubjects.forEach(subject => {
        container.innerHTML += `
            <div class="card">
                <div class="card-title">${subject.title}</div>
                <div class="card-desc">${subject.desc}</div>
                <span class="badge">${subject.status}</span>
            </div>
        `;
    });
}

// --- PROJECTS ---
function renderProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = "";

    globalDatabase.projects.forEach(proj => {
        // Create the tech tags dynamically
        let techBadges = proj.techStack.map(tech =>
            `<span class="tech-badge">${tech}</span>`
        ).join('');

        // Determine which status color to use
        let statusClass = proj.status === "Completed" ? "status-completed" : "status-in-progress";

        container.innerHTML += `
            <tr>
                <td>
                    <div style="font-weight:700; color:var(--text-main)">${proj.name}</div>
                    <div style="font-size:12px; color:var(--text-muted); margin-bottom:5px;">${proj.event}</div>
                    <div class="tech-stack-container">${techBadges}</div>
                </td>
                <td style="font-size:14px; color:var(--text-muted)">${proj.desc}</td>
                <td>
                    <span class="status-badge ${statusClass}">${proj.status}</span>
                </td>
            </tr>
        `;
    });
}
// --- HR GUIDES ---
function renderHRGuides() {
    const container = document.getElementById('hr-container');
    container.innerHTML = "";

    globalDatabase.hrGuides.forEach(guide => {
        container.innerHTML += `
            <div class="card">
                <span class="badge">${guide.category}</span>
                <div class="card-title">${guide.title}</div>
                <div class="card-desc">${guide.desc}</div>
            </div>
        `;
    });
}

// --- SEARCH ---
document.addEventListener("input", function (e) {
    if (e.target.id === "search") {
        const value = e.target.value.toLowerCase();

        document.querySelectorAll(".checklist-item, table tbody tr").forEach(el => {
            el.style.display = el.innerText.toLowerCase().includes(value) ? "" : "none";
        });
    }
});

// --- INIT ---
window.onload = () => {
    loadData();
    renderJobs();
    renderDSA();
    renderAptitude();
    renderCoreSubjects();
    renderProjects();
    renderHRGuides();
    updateStreak();
};
