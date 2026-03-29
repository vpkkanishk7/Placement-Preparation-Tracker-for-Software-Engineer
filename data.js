// This file stores all the information for the portal.
const globalDatabase = {
    stats: {
        dsaSolved: 0,
        aptCompleted: 0,
        activeApps: 0
    },

    jobs: [
        { company: "Amazon", role: "Software Engineer", status: "Interview" }
    ],

    // MASSIVE DSA SYLLABUS INTEGRATION
    dsa: [
        {
            category: "Arrays & Strings",
            topics: [
                { id: 'arr1', name: "Reverse an Array", completed: false },
                { id: 'arr2', name: "Find Maximum and Minimum in an Array", completed: false },
                { id: 'arr3', name: "Kadane's Algorithm (Max Subarray Sum)", completed: false },
                { id: 'arr4', name: "Sort an array of 0s, 1s and 2s", completed: false }
            ]
        },
        {
            category: "Linked Lists",
            topics: [
                { id: 'll1', name: "Reverse a Linked List", completed: false },
                { id: 'll2', name: "Detect a Loop in a Linked List", completed: false },
                { id: 'll3', name: "Find the Middle Element of a Linked List", completed: false },
                { id: 'll4', name: "Merge Two Sorted Linked Lists", completed: false }
            ]
        },
        {
            category: "Stacks & Queues",
            topics: [
                { id: 'sq1', name: "Implement Stack using Queues", completed: false },
                { id: 'sq2', name: "Valid Parentheses (Balanced Brackets)", completed: false },
                { id: 'sq3', name: "Next Greater Element", completed: false },
                { id: 'sq4', name: "LRU Cache Implementation", completed: false }
            ]
        },
        {
            category: "Trees & Graphs",
            topics: [
                { id: 'tg1', name: "Level Order Traversal of Binary Tree", completed: false },
                { id: 'tg2', name: "Find Maximum Depth/Height of a Tree", completed: false },
                { id: 'tg3', name: "Implement BFS and DFS in a Graph", completed: false },
                { id: 'tg4', name: "Detect Cycle in an Undirected Graph", completed: false }
            ]
        },
        {
            category: "Algorithms & Logic",
            topics: [
                { id: 'al1', name: "Binary Search implementation", completed: false },
                { id: 'al2', name: "Merge Sort and Quick Sort", completed: false },
                { id: 'al3', name: "0/1 Knapsack Problem (Dynamic Programming)", completed: false },
                { id: 'al4', name: "Dijkstra's Algorithm (Shortest Path)", completed: false }
            ]
        }
    ],

    aptitude: [
        { category: "1. Quantitative Aptitude", topic: "<strong>Number System:</strong> Divisibility Rules, HCF & LCM, Remainders, Unit Digit, Factors & Multiples.", completed: false },
        { category: "1. Quantitative Aptitude", topic: "<strong>Arithmetic:</strong> Percentages, Profit, Loss & Discount, Simple & Compound Interest, Averages, Ratio & Proportion, Partnership.", completed: false },
        { category: "1. Quantitative Aptitude", topic: "<strong>Time, Speed & Distance:</strong> Trains, Boats & Streams, Circular Tracks, Races & Games.", completed: false },
        { category: "1. Quantitative Aptitude", topic: "<strong>Time & Work:</strong> Pipes & Cisterns, Work & Wages, Man-Days Concept.", completed: false },
        { category: "1. Quantitative Aptitude", topic: "<strong>Algebra:</strong> Linear & Quadratic Equations, Polynomials, Inequalities.", completed: false },
        { category: "1. Quantitative Aptitude", topic: "<strong>Modern Math:</strong> Permutations & Combinations, Probability, Logarithms.", completed: false },
        { category: "1. Quantitative Aptitude", topic: "<strong>Geometry & Mensuration:</strong> 2D/3D Area & Volume, Trigonometry.", completed: false },
        { category: "1. Quantitative Aptitude", topic: "<strong>Progressions & Statistics:</strong> AP, GP, HP, Mean, Median, Mode, Variance.", completed: false },

        { category: "2. Logical Reasoning", topic: "<strong>Analytical Reasoning:</strong> Linear & Circular Seating, Grid-based Puzzles.", completed: false },
        { category: "2. Logical Reasoning", topic: "<strong>Coding & Series:</strong> Number/Alphabet Series, Coding-Decoding.", completed: false },
        { category: "2. Logical Reasoning", topic: "<strong>Direction & Relation:</strong> Blood Relations, Direction Sense.", completed: false },
        { category: "2. Logical Reasoning", topic: "<strong>Logical Deductions:</strong> Syllogisms, Venn Diagrams.", completed: false },
        { category: "2. Logical Reasoning", topic: "<strong>Verbal Reasoning:</strong> Statement & Assumptions, Cause & Effect.", completed: false },
        { category: "2. Logical Reasoning", topic: "<strong>Non-Verbal Reasoning:</strong> Mirror Images, Paper Folding, Cubes & Dice.", completed: false },
        { category: "2. Logical Reasoning", topic: "<strong>Miscellaneous:</strong> Clocks & Calendars, Data Sufficiency.", completed: false },

        { category: "3. Verbal Ability", topic: "<strong>Grammar:</strong> Tenses, Subject-Verb Agreement, Prepositions, Active/Passive.", completed: false },
        { category: "3. Verbal Ability", topic: "<strong>Vocabulary:</strong> Synonyms & Antonyms, Idioms & Phrases, Spellings.", completed: false },
        { category: "3. Verbal Ability", topic: "<strong>Reading & Comprehension:</strong> Main Idea, Tone of Author, Inference.", completed: false },
        { category: "3. Verbal Ability", topic: "<strong>Sentence Structuring:</strong> Para Jumbles, Sentence Correction, Cloze Test.", completed: false },

        { category: "4. Data Interpretation & Analysis", topic: "<strong>Visual Data:</strong> Bar Graphs, Pie Charts, Line Graphs, Tables.", completed: false },
        { category: "4. Data Interpretation & Analysis", topic: "<strong>Textual Data:</strong> Caselets, Data Comparison.", completed: false }
    ],

    coreSubjects: [
        // --- OPERATING SYSTEMS ---
        {
            title: "OS: Process Management",
            desc: "Process creation, context switching, inter-process communication (IPC), and CPU scheduling algorithms (FCFS, SJF, Round Robin).",
            status: "Pending"
        },
        {
            title: "OS: Threads & Concurrency",
            desc: "Multithreading models, race conditions, critical section problem, mutex locks, semaphores, and classical synchronization problems (Producer-Consumer).",
            status: "Pending"
        },
        {
            title: "OS: Deadlocks",
            desc: "Deadlock characterization, Banker's algorithm for deadlock avoidance, deadlock detection, and recovery mechanisms.",
            status: "Pending"
        },
        {
            title: "OS: Memory Management",
            desc: "Paging, segmentation, virtual memory, demand paging, and page replacement algorithms (FIFO, LRU, Optimal).",
            status: "Pending"
        },

        // --- DATABASE MANAGEMENT SYSTEMS (DBMS) ---
        {
            title: "DBMS: ER Modeling & Architecture",
            desc: "Entity-Relationship diagrams, schema architecture, data independence, and relational model fundamental concepts.",
            status: "Pending"
        },
        {
            title: "DBMS: SQL & Relational Algebra",
            desc: "DDL, DML, DCL, TCL commands, Joins (Inner, Outer, Left, Right), nested subqueries, triggers, and relational algebra operations.",
            status: "Pending"
        },
        {
            title: "DBMS: Normalization",
            desc: "Functional dependencies, 1NF, 2NF, 3NF, BCNF, lossless join decomposition, and dependency preservation.",
            status: "Pending"
        },
        {
            title: "DBMS: Transactions & Concurrency",
            desc: "ACID properties, schedule serializability, Two-Phase Locking (2PL), deadlocks in DBMS, and database recovery techniques.",
            status: "Pending"
        },
        {
            title: "DBMS: Indexing & Hashing",
            desc: "B-trees, B+ trees, primary vs secondary indexing, static and dynamic hashing, and query optimization basics.",
            status: "Pending"
        },

        // --- COMPUTER NETWORKS ---
        {
            title: "CN: OSI & TCP/IP Models",
            desc: "Functions of all 7 layers of the OSI model, TCP/IP suite, data encapsulation, and decapsulation.",
            status: "Pending"
        },
        {
            title: "CN: Data Link Layer",
            desc: "Framing, error detection (CRC, Checksum), flow control (Sliding Window), MAC protocols (CSMA/CD, CSMA/CA), and Ethernet.",
            status: "Pending"
        },
        {
            title: "CN: Network Layer",
            desc: "IPv4 & IPv6 addressing, Subnetting, CIDR, routing algorithms (Distance Vector, Link State), ARP, and ICMP.",
            status: "Pending"
        },
        {
            title: "CN: Transport Layer",
            desc: "TCP vs UDP, 3-way handshake, multiplexing/demultiplexing, flow control, and TCP congestion control algorithms.",
            status: "Pending"
        },
        {
            title: "CN: Application Layer",
            desc: "DNS architecture, HTTP/HTTPS protocols, FTP, SMTP, POP3, and the basics of socket programming.",
            status: "Pending"
        }
    ],

    projects: [
        {
            name: "FENCEGUARD",
            event: "Smart India Hackathon 2025",
            desc: "An intelligent electric fence safety & misuse prevention system designed to detect and prevent unauthorized tampering.",
            techStack: ["IoT", "C++", "Sensors", "Hardware Design"],
            githubLink: "#",
            liveLink: "#",
            status: "<span class='badge' style='background:#FEF3C7; color:#D97706'>In Progress</span>"
        },
        {
            name: "Tamil Nadu Welfare Portal",
            event: "Independent Project",
            desc: "A responsive, HTML-based web portal allowing citizens to quickly check their eligibility for various state welfare schemes.",
            techStack: ["HTML5", "CSS3", "JavaScript"],
            githubLink: "#",
            liveLink: "#",
            status: "<span class='badge' style='background:#D1FAE5; color:#059669'>Completed</span>"
        }
    ],

    hrGuides: [
        { category: "SECTION 1: PERSONAL INTRODUCTION", title: "1. Tell me about yourself.", desc: "I am a Computer Science student with strong interest in problem solving and software development. I have been focusing on Data Structures, core subjects, and frontend development. I enjoy building projects that solve real-world problems and continuously improving my technical and communication skills." },
        { category: "SECTION 1: PERSONAL INTRODUCTION", title: "2. Walk me through your resume.", desc: "My resume highlights my education in Computer Science, key technical skills like DSA and web development, and projects that demonstrate practical application of concepts. I have also included internships/certifications and leadership activities that show teamwork and responsibility." },
        { category: "SECTION 1: PERSONAL INTRODUCTION", title: "3. What are your strengths?", desc: "My strengths include strong analytical thinking, consistency in learning, adaptability, and the ability to stay calm under pressure." },
        { category: "SECTION 1: PERSONAL INTRODUCTION", title: "4. What are your weaknesses?", desc: "Earlier, I used to overthink solutions, but I am now improving by practicing timed problem solving and structured planning." },
        { category: "SECTION 1: PERSONAL INTRODUCTION", title: "5. Why should we hire you?", desc: "I have a strong foundation in fundamentals, I am eager to learn, and I adapt quickly. I am committed to contributing positively to the team and growing with the company." },
        { category: "SECTION 1: PERSONAL INTRODUCTION", title: "6. What makes you different from others?", desc: "I combine technical preparation with communication skills and consistency. I focus on long-term growth rather than shortcuts." },
        { category: "SECTION 1: PERSONAL INTRODUCTION", title: "7. How would your friends describe you?", desc: "They would describe me as disciplined, reliable, and focused on achieving goals." },
        { category: "SECTION 1: PERSONAL INTRODUCTION", title: "8. What motivates you?", desc: "Solving challenging problems and seeing real impact from my work motivates me." },
        { category: "SECTION 1: PERSONAL INTRODUCTION", title: "9. What are your hobbies?", desc: "I enjoy coding, learning about startups, reading about technology trends, and improving communication skills." },
        { category: "SECTION 1: PERSONAL INTRODUCTION", title: "10. Describe yourself in three words.", desc: "Focused, Adaptable, Consistent." },

        // SECTION 2: CAREER GOALS
        { category: "SECTION 2: CAREER GOALS", title: "16. Where do you see yourself in 5 years?", desc: "I see myself as a skilled software engineer handling complex projects and contributing to impactful products." },
        { category: "SECTION 2: CAREER GOALS", title: "17. What are your short-term goals?", desc: "To gain industry experience, strengthen technical skills, and contribute meaningfully to projects." },
        { category: "SECTION 2: CAREER GOALS", title: "18. What are your long-term goals?", desc: "To become a technically strong professional who can lead teams and build scalable solutions." },
        { category: "SECTION 2: CAREER GOALS", title: "19. Why did you choose Computer Science?", desc: "Because I enjoy logical thinking, problem solving, and creating digital solutions." },
        { category: "SECTION 2: CAREER GOALS", title: "20. Do you want to pursue higher studies?", desc: "Currently, I am focused on gaining industry exposure and building practical experience." },

        // SECTION 3: COMPANY-SPECIFIC
        { category: "SECTION 3: COMPANY-SPECIFIC", title: "31. Why do you want to join our company?", desc: "Your company is known for innovation and strong learning culture. I believe it is a great platform to grow technically and professionally." },
        { category: "SECTION 3: COMPANY-SPECIFIC", title: "32. What do you know about our company?", desc: "Your company specializes in technology solutions and has strong presence in the global market with focus on innovation and quality delivery." },
        { category: "SECTION 3: COMPANY-SPECIFIC", title: "33. Are you open to relocation?", desc: "Yes, I am open to relocation as it helps in gaining diverse exposure." },
        { category: "SECTION 3: COMPANY-SPECIFIC", title: "34. Are you comfortable working in shifts?", desc: "Yes, I am flexible and can adapt to company requirements." },
        { category: "SECTION 3: COMPANY-SPECIFIC", title: "35. Why should we not hire you?", desc: "As a fresher, I am still gaining industry exposure, but I am highly adaptable and a quick learner." },

        // SECTION 4: BEHAVIORAL QUESTIONS
        { category: "SECTION 4: BEHAVIORAL QUESTIONS", title: "46. Describe a challenging situation you faced.", desc: "During a project, we faced deadline pressure. I divided tasks effectively and ensured clear communication, which helped us complete it on time." },
        { category: "SECTION 4: BEHAVIORAL QUESTIONS", title: "47. Tell me about a failure.", desc: "I once underestimated a technical problem. I learned the importance of planning and now analyze problems thoroughly before implementation." },
        { category: "SECTION 4: BEHAVIORAL QUESTIONS", title: "48. How do you handle pressure?", desc: "I prioritize tasks, stay calm, and focus on step-by-step execution." },
        { category: "SECTION 4: BEHAVIORAL QUESTIONS", title: "49. Describe a time you worked in a team.", desc: "In a group project, I coordinated backend integration and ensured timely communication, which improved collaboration." },
        { category: "SECTION 4: BEHAVIORAL QUESTIONS", title: "50. Have you handled conflict?", desc: "Yes, by listening to both sides and focusing on project goals instead of personal opinions." },

        // SECTION 5: WORK ETHICS
        { category: "SECTION 5: WORK ETHICS", title: "66. What does teamwork mean to you?", desc: "Teamwork means collaborating effectively, respecting ideas, and achieving common goals." },
        { category: "SECTION 5: WORK ETHICS", title: "67. What is your leadership style?", desc: "I believe in leading by example and supporting team members." },
        { category: "SECTION 5: WORK ETHICS", title: "68. How do you prioritize tasks?", desc: "Based on deadlines, impact, and urgency." },
        { category: "SECTION 5: WORK ETHICS", title: "69. What if you disagree with your manager?", desc: "I would respectfully present my perspective and understand their reasoning." },
        { category: "SECTION 5: WORK ETHICS", title: "70. Are you comfortable learning new technologies?", desc: "Yes, I enjoy learning and adapting to new technologies." },

        // SECTION 6: SALARY & PROFESSIONALISM
        { category: "SECTION 6: SALARY & PROFESSIONALISM", title: "81. What are your salary expectations?", desc: "As a fresher, I am more focused on learning and growth. I am open to company standards." },
        { category: "SECTION 6: SALARY & PROFESSIONALISM", title: "82. Why do you want to leave your current role? (If applicable)", desc: "I am seeking better growth opportunities and challenging projects." },
        { category: "SECTION 6: SALARY & PROFESSIONALISM", title: "83. How soon can you join?", desc: "I can join as per company requirement." },

        // SECTION 7: SITUATIONAL
        { category: "SECTION 7: SITUATIONAL", title: "91. If given a task outside your skill set?", desc: "I would research, learn quickly, and seek guidance if needed." },
        { category: "SECTION 7: SITUATIONAL", title: "92. If you fail in a project?", desc: "I would analyze mistakes, learn from them, and ensure improvement." },
        { category: "SECTION 7: SITUATIONAL", title: "93. If team member is not contributing?", desc: "I would communicate openly and encourage collaboration." },
        { category: "SECTION 7: SITUATIONAL", title: "94. If multiple deadlines overlap?", desc: "I would prioritize tasks and communicate clearly with stakeholders." },
        { category: "SECTION 7: SITUATIONAL", title: "95. What would you do if you don’t know an answer?", desc: "I would honestly admit it and explain how I would find the solution." },
        { category: "SECTION 7: SITUATIONAL", title: "100. Do you have any questions for us?", desc: "Yes. What does growth look like in this role, and how does the company support skill development?" }
    ]
};
