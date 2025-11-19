// ============================================
// DONNÉES DU PORTFOLIO - CONFIGURATION
// ============================================

// Données des projets pour le drawer
export const TRIGGER_DETAILS = {
    1: {
        title: "Administrateur Système et Réseau - Modernisation et sécurisation de l'infrastructure",
        experienceType: "Alternance",
        role: "Administrateur Système et Réseau",
        location: "Saas Partner - La Possession",
        // duration: "Alternance",
        sector: "Infrastructure Saas",
        team: "Équipe de 3 personnes",
        client: null,
        problem: "Les déploiements manuels étaient lents, source d'erreurs et nécessitaient l'intervention d'un administrateur pour chaque mise en production. L'absence de tests automatisés augmentait les risques.",
        solution: "Mise en place d'un pipeline CI/CD complet avec GitLab CI et Ansible. Automatisation des tests unitaires, d'intégration et de déploiement. Mise en place de rollback automatique en cas d'échec.",
        technologies: ["Windows Server", "Windows", "VPN", "Team Viewer", "Synology", "Hyper-V", "RDS", "AD-DS"],
        results: [
            "Réduction du temps de déploiement de 2h à 10 minutes",
            "Diminution de 85% des incidents liés aux déploiements",
            "Augmentation de la fréquence de déploiement (hebdomadaire → quotidien)",
            "Amélioration de la qualité du code grâce aux tests automatisés"
        ],
        date: "Septembre 2024 - Aujourd'hui",
        status: "EN COURS",
        severity: "HIGH",
        github: "https://github.com/votre-username/cicd-pipeline",
        live: null
    },
    2: {
        title: "Stagiaire Administrateur Système et Réseau - Mise en place d'un serveur de développement",
        experienceType: "Stage",
        role: "Stagiaire Administrateur Systèmes & Réseaux",
        location: "Office de l'eau Réunion - La Plaine Saint-Paul",
        // duration: "1 mois",
        sector: "SaaS / Cloud Computing",
        team: "Collaboration avec 2 SRE et 1 architecte cloud",
        client: null,
        problem: "L'infrastructure traditionnelle (VMs) ne permettait pas de scaling efficace. Les coûts étaient élevés et la gestion complexe. Absence de haute disponibilité.",
        solution: "Migration complète vers Kubernetes avec déploiement multi-zone. Mise en place d'auto-scaling horizontal et vertical, load balancing intelligent, et gestion des secrets avec Vault.",
        technologies: ["Debian", "Symfony", "Docker", "PostgreSQL", "PostGIS", "Geoserver", "PHP", "Git"],
        results: [
            "Réduction des coûts d'infrastructure de 40%",
            "Haute disponibilité : 99.95% d'uptime",
            "Auto-scaling : réponse aux pics de charge en <2 minutes",
            "Déploiements zero-downtime"
        ],
        date: "Juillet 2024",
        status: "RESOLVED",
        severity: "HIGH",
        github: "https://github.com/votre-username/k8s-infra",
        live: null
    },
    3: {
        title: "Consultant Infrastructure - Monitoring Centralisé",
        experienceType: "Stage",
        role: "Consultant Infrastructure",
        location: "Vindemia Services - Le Port",
        // duration: "3 mois",
        sector: "Services Numériques / ESN",
        team: "Solo (avec support ponctuel équipe infra)",
        client: "Groupe BanquePlus (secteur bancaire)",
        problem: "Absence de visibilité sur l'état de l'infrastructure. Détection tardive des incidents. Pas de métriques historiques pour l'optimisation.",
        solution: "Déploiement d'une stack de monitoring complète avec Prometheus pour les métriques, Grafana pour la visualisation, et AlertManager pour les alertes. Intégration avec PagerDuty pour l'escalade.",
        technologies: ["Clonezilla", "StageNow   ", "AlertManager", "ELK Stack", "PagerDuty", "Node Exporter"],
        results: [
            "Visibilité temps réel sur 100% de l'infrastructure",
            "Réduction du MTTR (Mean Time To Repair) de 70%",
            "15+ dashboards personnalisés pour différentes équipes",
            "Alerting intelligent avec 95% de réduction des faux positifs"
        ],
        date: "Mai 2024",
        status: "RESOLVED",
        severity: "MEDIUM",
        github: "https://github.com/votre-username/monitoring-stack",
        live: null
    },
    4: {
        title: "Consultant Cybersécurité - pfSense & VPN",
        experienceType: "Stage",
        role: "Consultant Cybersécurité",
        location: "Zot Informatik - Saint-Leu",
        // duration: "2 mois",
        sector: "Cybersécurité / Conseil",
        team: "Binôme avec 1 expert sécurité réseau",
        client: "IndustrieTech SA (secteur industriel)",
        problem: "La sécurité réseau était insuffisante avec des règles de firewall mal organisées. Pas de VPN sécurisé entre les différents sites de l'entreprise.",
        solution: "Déploiement de pfSense en haute disponibilité (CARP). Configuration de VPN IPsec site-to-site, segmentation réseau avec VLANs, IDS/IPS avec Suricata, et analyse du trafic avec pfBlockerNG.",
        technologies: ["pfSense", "IPsec VPN", "OpenVPN", "Suricata", "pfBlockerNG", "VLAN"],
        results: [
            "Sécurisation de 5 sites distants avec VPN chiffré",
            "Blocage de 10000+ menaces par mois grâce à l'IDS",
            "Segmentation réseau complète (DMZ, LAN, WAN)",
            "Haute disponibilité avec failover automatique <30s"
        ],
        date: "Mars 2024",
        status: "RESOLVED",
        severity: "HIGH",
        github: null,
        live: null
    },
    5: {
        title: "Portfolio Developer - Dashboard NMS/NOC",
        experienceType: "Stage",
        role: "Portfolio Developer",
        location: "SOS Technique Informatique - Saline les hauts",
        // duration: "En cours (1 mois actif)",
        sector: "Développement Web / Portfolio",
        team: "Solo",
        client: null,
        problem: "Les portfolios traditionnels sont statiques et peu engageants. Ils ne reflètent pas les compétences techniques ni la créativité de l'administrateur.",
        solution: "Création d'un portfolio sous forme de dashboard NOC (Network Operations Center) immersif avec simulations de données en temps réel, animations avancées et storytelling.",
        technologies: ["HTML5", "CSS3", "JavaScript ES6+", "Chart.js", "GSAP", "Responsive Design"],
        results: [
            "Expérience utilisateur immersive et mémorable",
            "Démonstration concrète des compétences techniques",
            "Différenciation par rapport aux portfolios classiques",
            "Projet en cours de développement"
        ],
        date: "Novembre 2025",
        status: "IN PROGRESS",
        severity: "LOW",
        github: "https://github.com/votre-username/portfolio-noc",
        live: "./index.html"
    },
    6: {
        title: "Stagiaire Admin Sys/Réseau - Refonte Infrastructure",
        experienceType: "Stage",
        role: "Stagiaire Administrateur Systèmes & Réseaux",
        location: "Infobam OI - Savannah",
        // duration: "6 mois (Janvier - Juin 2023)",
        sector: "Services Cloud / Data Management",
        team: "Équipe Infrastructure de 4 personnes + 1 tuteur",
        client: null,
        problem: "L'infrastructure réseau de l'entreprise était vieillissante avec un équipement Cisco obsolète, des configurations non documentées et des performances dégradées. Besoin de modernisation complète.",
        solution: "Audit complet de l'infrastructure existante, documentation détaillée, conception d'une nouvelle architecture réseau avec des switchs Cisco Catalyst moderne, implémentation de VLANs pour la segmentation, et mise en place d'outils de monitoring (Zabbix).",
        technologies: ["UMRA", "Windows", "Audit de sécurité", "Gestion de parc", "Zabbix", "pfSense", "Documentation réseau", "Wireshark"],
        results: [
            "Assistance technique (matériel, logiciels, connectivité)",
            "Administration Active Directory (UMRA)",
            "Maintenance équipements",
            "Audit de sécurité réseau",
            "Support utilisateur"
        ],
        date: "Janvier - Juin 2023",
        status: "RESOLVED",
        severity: "MEDIUM",
        github: null,
        live: null
    },
    8: {
        title: "Stagiaire Sécurité Réseau - Audit & Hardening",
        experienceType: "Stage",
        role: "Stagiaire Sécurité Réseau",
        location: "WattElek - Piton Saint-Leu",
        duration: "4 mois (Avril - Juillet 2022)",
        sector: "Cybersécurité / Audit",
        team: "Binôme avec 1 pentester senior",
        client: "Clients PME (secteur industriel et tertiaire)",
        problem: "Les clients PME manquaient de visibilité sur leur niveau de sécurité réseau et système. Beaucoup de serveurs présentaient des vulnérabilités critiques dues à des configurations par défaut non sécurisées.",
        solution: "Réalisation d'audits de sécurité pour 8 clients PME : scan de vulnérabilités avec Nessus, analyse des configurations, hardening des serveurs Linux et Windows selon les bonnes pratiques (CIS Benchmarks), mise en place de pare-feu et de politiques de sécurité.",
        technologies: ["Nessus", "OpenVAS", "Nmap", "Metasploit", "Linux Hardening", "Windows Hardening", "iptables", "SELinux", "CIS Benchmarks"],
        results: [
            "8 audits de sécurité complets réalisés",
            "150+ vulnérabilités critiques corrigées",
            "Rédaction de 8 rapports d'audit détaillés",
            "Hardening de 35+ serveurs (Linux et Windows)",
            "Formation des équipes IT clients aux bonnes pratiques de sécurité"
        ],
        date: "Avril - Juillet 2022",
        status: "RESOLVED",
        severity: "HIGH",
        github: null,
        live: null
    }
};

// Messages de logs variés
export const LOG_MESSAGES = [
    { type: 'info', msg: 'service_reseau check status: OK' },
    { type: 'info', msg: 'service_systeme check status: OK' },
    { type: 'info', msg: 'service_cloud check status: OK' },
    { type: 'info', msg: 'service_monitoring check status: OK' },
    { type: 'info', msg: 'database_backup: completed successfully' },
    { type: 'success', msg: 'health_check: all systems operational' },
    { type: 'info', msg: 'cpu_usage: 42% (normal)' },
    { type: 'info', msg: 'memory_usage: 67% (normal)' },
    { type: 'info', msg: 'disk_usage: /dev/sda1 78% (OK)' },
    { type: 'warning', msg: 'new_opportunity detected in buffer...' },
    { type: 'info', msg: 'user_activity: page view registered' },
    { type: 'info', msg: 'ssl_certificate: valid until 2026-12-31' },
    { type: 'success', msg: 'security_scan: no vulnerabilities found' },
    { type: 'info', msg: 'network_latency: 12ms (excellent)' },
    { type: 'info', msg: 'api_response_time: 145ms (optimal)' }
];

// Informations de l'utilisateur pour le terminal interactif
export const USER_INFO = {
    name: "Félis VIRAMA",
    role: "Administrateur Système et Réseau",
    email: "felis.virama@undercore.re",
    linkedin: "https://re.linkedin.com/in/félis-virama-319714226",
    github: "https://github.com/votre-username",
    location: "La Réunion",
    bio: "Administrateur Systèmes et Réseaux passionné par l'infrastructure, l'automatisation et les technologies de monitoring. Expert en solutions haute-disponibilité et optimisation de performance."
};

// Commandes du terminal interactif
export const TERMINAL_COMMANDS = {
    help: {
        description: "Affiche la liste des commandes disponibles",
        execute: () => {
            return [
                "Commandes disponibles:",
                "  help        - Affiche cette aide",
                "  whoami      - Affiche les informations de l'utilisateur",
                "  contact     - Affiche les informations de contact",
                "  skills      - Liste les compétences techniques",
                "  clear       - Efface le terminal",
                "  neofetch    - Affiche les informations système (style)",
                "  ls          - Liste les projets disponibles",
                "  echo <msg>  - Affiche un message",
                "  date        - Affiche la date et l'heure actuelles",
                "  uptime      - Affiche le temps de disponibilité",
                "  sudo rm -rf /  - Ne tentez même pas ;)"
            ];
        }
    },
    whoami: {
        description: "Affiche les informations de l'utilisateur",
        execute: () => {
            return [
                `Utilisateur: ${USER_INFO.name}`,
                `Rôle: ${USER_INFO.role}`,
                `Localisation: ${USER_INFO.location}`,
                `Bio: ${USER_INFO.bio}`
            ];
        }
    },
    contact: {
        description: "Affiche les informations de contact",
        execute: () => {
            return [
                "Informations de contact:",
                `  Email: ${USER_INFO.email}`,
                `  LinkedIn: ${USER_INFO.linkedin}`,
                `  GitHub: ${USER_INFO.github}`
            ];
        }
    },
    skills: {
        description: "Liste les compétences techniques",
        execute: () => {
            return [
                "Compétences Principales:",
                "  Réseaux: Cisco, pfSense, BGP, OSPF, VPN, VLAN",
                "  Systèmes: Linux (Debian, RHEL), Windows Server",
                "  Cloud & DevOps: AWS, Azure, Docker, Kubernetes, Ansible",
                "  Monitoring: Prometheus, Grafana, ELK Stack, Zabbix",
                "  Sécurité: Firewall, IDS/IPS, VPN, Hardening",
                "  Databases: MySQL, PostgreSQL, MongoDB, Redis"
            ];
        }
    },
    neofetch: {
        description: "Affiche les informations système (style)",
        execute: () => {
            return [
                "╔═══════════════════════════════════════════╗",
                "║  FÉLIS VIRAMA - SYSTEM INFORMATION        ║",
                "╠═══════════════════════════════════════════╣",
                "║  OS: Admin-SysOps v5.0 LTS                ║",
                "║  Kernel: Infrastructure-Expert 2024       ║",
                "║  Uptime: 5+ years                         ║",
                "║  Shell: /bin/expertise                    ║",
                "║  CPU: Multi-threading Expert              ║",
                "║  Memory: Unlimited Learning Capacity      ║",
                "║  Skills: 99.9% Availability               ║",
                "╚═══════════════════════════════════════════╝"
            ];
        }
    },
    ls: {
        description: "Liste les projets disponibles",
        execute: () => {
            return [
                "Projets disponibles:",
                "  [1] saas-partner-alternance/",
                "  [2] office-eau-stage/",
                "  [3] vindemia-consulting/",
                "  [4] zot-informatik-cybersec/",
                "  [5] portfolio-noc/",
                "  [6] infobam-infrastructure/",
                "  [8] wattelek-audit/",
                "",
                "Utilisez 'cat <numéro>' pour voir les détails (fonctionnalité à venir)"
            ];
        }
    },
    date: {
        description: "Affiche la date et l'heure actuelles",
        execute: () => {
            const now = new Date();
            return [now.toLocaleString('fr-FR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            })];
        }
    },
    uptime: {
        description: "Affiche le temps de disponibilité",
        execute: () => {
            return [
                "System uptime: 5+ years",
                "Service availability: 99.9%",
                "Last maintenance: Never needed ;)",
                "Performance: Optimal"
            ];
        }
    }
};
