/*
 * ============================================================
 *  CONFIG DEL PORTFOLIO
 * ============================================================
 *  Questo è l'unico file da modificare per cambiare i contenuti
 *  del sito: index.html non va toccato.
 *
 *  - "profile": dati uguali in tutte le lingue (nome, contatti).
 *  - "languages": un blocco per lingua ("en", "it", "ja").
 *    Ogni blocco ha la stessa struttura: se aggiungi un lavoro,
 *    un progetto o una skill, ricordati di farlo in tutte le lingue.
 *  - Per aggiungere una lingua (es. francese), copia il blocco "en",
 *    rinominalo "fr" e traduci i testi: il pulsante compare da solo.
 *  - Icone disponibili per i progetti:
 *    lock, bell, ticket, school, chat, shield, code, database
 * ============================================================
 */
window.PORTFOLIO_CONFIG = {
  // Lingua mostrata alla prima visita ("en", "it" o "ja")
  defaultLanguage: "en",

  profile: {
    name: "Enrico Rampino",
    initials: "ER",
    // Email divisa in due parti: il sito la ricompone, i bot dello spam non la riconoscono
    email: { user: "r.enrico0306", domain: "gmail.com" },
    linkedin: "https://www.linkedin.com/in/enrico-rampino-046270279",
    github: "https://github.com/ENRICO1001001",
    openToWork: true
  },

  languages: {
    /* ------------------------------------------------------------
     *  ENGLISH
     * ------------------------------------------------------------ */
    en: {
      label: "EN",
      htmlLang: "en",
      meta: {
        title: "Enrico Rampino | Software Developer",
        description: "Enrico Rampino, Computer Engineering graduate and .NET / C# software developer based in Yokohama, Japan."
      },
      ui: {
        skipLink: "Skip to content",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        toggleTheme: "Toggle dark mode",
        language: "Language",
        backToTop: "Back to top ↑",
        nav: {
          about: "About",
          experience: "Experience",
          projects: "Projects",
          skills: "Skills",
          education: "Education",
          contact: "Contact"
        }
      },
      hero: {
        greeting: "Hello, I'm",
        nameReading: "",
        role: "Software Developer",
        roleTech: ".NET & C#",
        // Frasi che si scrivono e cancellano a rotazione sotto il nome
        roles: ["Software Developer", ".NET & C# Engineer", "Backend Builder", "Problem Solver"],
        lead: "Computer Engineering graduate with two years of hands-on experience building and maintaining business software, from secure data transfer to real-time monitoring systems.",
        location: "Yokohama, Japan",
        status: "Open to opportunities",
        ctaPrimary: "Get in touch",
        ctaSecondary: "See my work"
      },
      about: {
        title: "About me",
        paragraphs: [
          "I'm a recent graduate in Computer Engineering, motivated to apply and keep growing the skills I built during my university studies and my time as a .NET developer.",
          "I'm reliable and proactive: I approach my work with commitment and attention to detail, and I value collaboration and constructive discussion. I enjoy solving problems and I work well in a team."
        ],
        stats: [
          { value: "2+", label: "years building software" },
          { value: "6", label: "projects shipped or prototyped" },
          { value: "4", label: "languages spoken" }
        ]
      },
      experience: {
        title: "Experience",
        items: [
          {
            role: "Junior Software Developer",
            company: "N&C",
            period: "Sep 2023 – Jun 2025",
            place: "Veglie, Italy",
            summary: "Designed, developed and maintained .NET applications with the technical team, working on both new systems and the optimization of existing ones.",
            bullets: [
              "Hardened a secure SFTP data transfer application and took it to production.",
              "Built an alarm notification and remote monitoring system focused on service continuity.",
              "Maintained the internal employee platform, with a focus on training and learning.",
              "Created an internal IT ticketing system that made technical support faster.",
              "Contributed to the architecture of an AI chatbot prototype based on Google Gemini."
            ],
            tags: ["C#", ".NET Framework", "ASP.NET MVC", "Entity Framework", "SQL Server", "MQTT", "Gemini AI"]
          },
          {
            role: "Software Development Intern",
            company: "N&C",
            period: "Mar 2023 – Aug 2023",
            place: "Veglie, Italy",
            summary: "",
            bullets: [
              "Took part in data analysis using the Infocenter database.",
              "Developed management software solutions.",
              "Developed software to transfer data via SFTP servers.",
              "Developed a tool that lets users submit reports anonymously."
            ],
            tags: []
          },
          {
            role: "Tutor",
            company: "Centro Studi Vergari",
            period: "Jan 2025 – Jul 2025",
            place: "Trepuzzi, Italy",
            summary: "Tutor for three GOL/2023 professional training programs: “Office Administration Assistant” (two editions) and “Kitchen Assistant and Dining Room Setup Support”.",
            bullets: [],
            tags: []
          },
          {
            role: "Volunteer",
            company: "National Association of the State Police",
            period: "May 2021 – Dec 2021",
            place: "Brindisi, Italy",
            summary: "Implemented and monitored social distancing measures, managed entry and exit flows, and communicated clearly with the public to keep the experience smooth and safe.",
            bullets: [],
            tags: []
          }
        ]
      },
      projects: {
        title: "Selected projects",
        intro: "Work built during my time at N&C. These are internal company projects, so the code is not public.",
        items: [
          {
            icon: "lock",
            title: "Secure SFTP Data Transfer",
            text: "Started during my internship and later reviewed, optimized and deployed to production. Improved robustness, security and reliability for sensitive data flows.",
            tags: ["C#", ".NET", "SFTP"]
          },
          {
            icon: "bell",
            title: "Alarm & Remote Monitoring",
            text: "A notification and remote monitoring system built for timely, stable communication, with special care for service continuity and handling critical events.",
            tags: ["C#", "MQTT", "Mosquitto"]
          },
          {
            icon: "ticket",
            title: "IT Ticketing System",
            text: "An internal tool to collect, track and resolve support requests, making the company's technical support process more efficient.",
            tags: ["ASP.NET MVC", "Entity Framework", "SQL Server"]
          },
          {
            icon: "school",
            title: "Employee Training Platform",
            text: "Managed and maintained the company's internal employee platform, covering both the technical and organizational side of digitalizing training activities.",
            tags: ["ASP.NET", "SQL Server"]
          },
          {
            icon: "chat",
            title: "AI Chatbot Prototype",
            text: "A Gemini-based chatbot for employee interaction and an internal company vocabulary. I worked on the architecture, initial integration, semantic analysis and UX.",
            tags: ["Gemini AI", "NLP", ".NET"]
          },
          {
            icon: "shield",
            title: "Anonymous Reporting Tool",
            text: "Software that lets users submit reports anonymously, built during my internship.",
            tags: ["C#", ".NET"]
          }
        ]
      },
      skills: {
        title: "Skills",
        groups: [
          { name: "Languages", items: ["C#", "Java", "JavaScript", "Python", "PHP", "C", "C++", "SQL"] },
          { name: "Backend & frameworks", items: [".NET", "ASP.NET MVC", "Entity Framework", "REST APIs", "MQTT / Mosquitto"] },
          { name: "Frontend", items: ["HTML", "CSS", "Bootstrap", "jQuery", "JSON"] },
          { name: "Databases", items: ["SQL Server", "MySQL", "PostgreSQL"] },
          { name: "Tools & cloud", items: ["Git", "Visual Studio", "Docker (basics)", "AWS (basics)"] },
          { name: "IT & systems", items: ["System security", "HW & SW installation", "Device configuration", "Customer support"] }
        ]
      },
      education: {
        title: "Education & languages",
        items: [
          { period: "2023 – 2025", degree: "Bachelor's Degree in Computer Engineering", school: "Università Mercatorum · Rome, Italy" },
          { period: "2017 – 2022", degree: "High School Diploma", school: "ITT Enrico Fermi · Lecce, Italy" }
        ],
        // percent = lunghezza della barra (0-100)
        spoken: [
          { name: "Italian", level: "Native", percent: 100 },
          { name: "English", level: "B2", percent: 70 },
          { name: "French", level: "A2", percent: 35 },
          { name: "Japanese", level: "N4 level · studying", percent: 35 }
        ]
      },
      contact: {
        title: "Let's work together",
        text: "I'm looking for my next role as a software developer. If you have an opportunity or just want to say hi, my inbox is open.",
        // Testo del pulsante email (l'indirizzo non viene mai mostrato)
        emailLabel: "Gmail",
        emailHint: "Send me an email",
        linkedinLabel: "LinkedIn",
        githubLabel: "GitHub"
      }
    },

    /* ------------------------------------------------------------
     *  ITALIANO
     * ------------------------------------------------------------ */
    it: {
      label: "IT",
      htmlLang: "it",
      meta: {
        title: "Enrico Rampino | Sviluppatore Software",
        description: "Enrico Rampino, laureato in Ingegneria Informatica e sviluppatore software .NET / C# con base a Yokohama, Giappone."
      },
      ui: {
        skipLink: "Vai al contenuto",
        openMenu: "Apri menu",
        closeMenu: "Chiudi menu",
        toggleTheme: "Attiva/disattiva tema scuro",
        language: "Lingua",
        backToTop: "Torna su ↑",
        nav: {
          about: "Chi sono",
          experience: "Esperienza",
          projects: "Progetti",
          skills: "Competenze",
          education: "Formazione",
          contact: "Contatti"
        }
      },
      hero: {
        greeting: "Ciao, sono",
        nameReading: "",
        role: "Sviluppatore Software",
        roleTech: ".NET & C#",
        roles: ["Sviluppatore Software", "Ingegnere .NET & C#", "Sviluppatore Backend", "Problem Solver"],
        lead: "Laureato in Ingegneria Informatica, con due anni di esperienza concreta nello sviluppo e nella manutenzione di software aziendale, dal trasferimento sicuro dei dati ai sistemi di monitoraggio in tempo reale.",
        location: "Yokohama, Giappone",
        status: "Aperto a nuove opportunità",
        ctaPrimary: "Contattami",
        ctaSecondary: "Guarda i progetti"
      },
      about: {
        title: "Chi sono",
        paragraphs: [
          "Sono neolaureato in Ingegneria Informatica e ho voglia di mettere in pratica e far crescere le competenze acquisite durante gli studi universitari e la mia esperienza come sviluppatore .NET.",
          "Sono affidabile e propositivo: affronto il lavoro con impegno e attenzione ai dettagli, e do valore alla collaborazione e al confronto costruttivo. Mi piace risolvere problemi e lavoro bene in team."
        ],
        stats: [
          { value: "2+", label: "anni di sviluppo software" },
          { value: "6", label: "progetti rilasciati o prototipati" },
          { value: "4", label: "lingue parlate" }
        ]
      },
      experience: {
        title: "Esperienza",
        items: [
          {
            role: "Junior Software Developer",
            company: "N&C",
            period: "Set 2023 – Giu 2025",
            place: "Veglie, Italia",
            summary: "Ho progettato, sviluppato e mantenuto applicazioni .NET insieme al team tecnico, lavorando sia su nuovi sistemi sia sull'ottimizzazione di quelli esistenti.",
            bullets: [
              "Ho reso più robusta un'applicazione per il trasferimento sicuro di dati via SFTP e l'ho portata in produzione.",
              "Ho realizzato un sistema di notifica allarmi e monitoraggio remoto orientato alla continuità del servizio.",
              "Ho gestito la piattaforma interna per i dipendenti, con particolare attenzione a formazione e apprendimento.",
              "Ho creato un sistema di ticketing IT interno che ha reso più rapido il supporto tecnico.",
              "Ho contribuito all'architettura di un prototipo di chatbot AI basato su Google Gemini."
            ],
            tags: ["C#", ".NET Framework", "ASP.NET MVC", "Entity Framework", "SQL Server", "MQTT", "Gemini AI"]
          },
          {
            role: "Tirocinante Sviluppo Software",
            company: "N&C",
            period: "Mar 2023 – Ago 2023",
            place: "Veglie, Italia",
            summary: "",
            bullets: [
              "Ho partecipato all'analisi dei dati tramite il database Infocenter.",
              "Ho sviluppato soluzioni software gestionali.",
              "Ho sviluppato software per il trasferimento di dati tramite server SFTP.",
              "Ho sviluppato uno strumento che permette agli utenti di inviare segnalazioni in forma anonima."
            ],
            tags: []
          },
          {
            role: "Tutor",
            company: "Centro Studi Vergari",
            period: "Gen 2025 – Lug 2025",
            place: "Trepuzzi, Italia",
            summary: "Tutor per tre percorsi di formazione professionale GOL/2023: “Addetto alla segreteria” (due edizioni) e “Aiuto cuoco e supporto all'allestimento sala”.",
            bullets: [],
            tags: []
          },
          {
            role: "Volontario",
            company: "Associazione Nazionale della Polizia di Stato",
            period: "Mag 2021 – Dic 2021",
            place: "Brindisi, Italia",
            summary: "Ho applicato e monitorato le misure di distanziamento sociale, gestito i flussi di ingresso e uscita e comunicato in modo chiaro con il pubblico per garantire un'esperienza ordinata e sicura.",
            bullets: [],
            tags: []
          }
        ]
      },
      projects: {
        title: "Progetti in evidenza",
        intro: "Lavori realizzati durante la mia esperienza in N&C. Sono progetti interni all'azienda, quindi il codice non è pubblico.",
        items: [
          {
            icon: "lock",
            title: "Trasferimento dati sicuro via SFTP",
            text: "Iniziato durante il tirocinio e poi revisionato, ottimizzato e portato in produzione. Ho migliorato robustezza, sicurezza e affidabilità per i flussi di dati sensibili.",
            tags: ["C#", ".NET", "SFTP"]
          },
          {
            icon: "bell",
            title: "Allarmi e monitoraggio remoto",
            text: "Un sistema di notifica e monitoraggio remoto pensato per comunicazioni tempestive e stabili, con particolare cura per la continuità del servizio e la gestione degli eventi critici.",
            tags: ["C#", "MQTT", "Mosquitto"]
          },
          {
            icon: "ticket",
            title: "Sistema di ticketing IT",
            text: "Uno strumento interno per raccogliere, tracciare e risolvere le richieste di supporto, che ha reso più efficiente l'assistenza tecnica aziendale.",
            tags: ["ASP.NET MVC", "Entity Framework", "SQL Server"]
          },
          {
            icon: "school",
            title: "Piattaforma formazione dipendenti",
            text: "Gestione e manutenzione della piattaforma interna per i dipendenti, sia dal lato tecnico sia da quello organizzativo della digitalizzazione delle attività formative.",
            tags: ["ASP.NET", "SQL Server"]
          },
          {
            icon: "chat",
            title: "Prototipo di chatbot AI",
            text: "Un chatbot basato su Gemini per l'interazione con i dipendenti e un vocabolario aziendale interno. Mi sono occupato di architettura, integrazione iniziale, analisi semantica e UX.",
            tags: ["Gemini AI", "NLP", ".NET"]
          },
          {
            icon: "shield",
            title: "Strumento di segnalazione anonima",
            text: "Software che permette agli utenti di inviare segnalazioni in forma anonima, sviluppato durante il tirocinio.",
            tags: ["C#", ".NET"]
          }
        ]
      },
      skills: {
        title: "Competenze",
        groups: [
          { name: "Linguaggi", items: ["C#", "Java", "JavaScript", "Python", "PHP", "C", "C++", "SQL"] },
          { name: "Backend e framework", items: [".NET", "ASP.NET MVC", "Entity Framework", "API REST", "MQTT / Mosquitto"] },
          { name: "Frontend", items: ["HTML", "CSS", "Bootstrap", "jQuery", "JSON"] },
          { name: "Database", items: ["SQL Server", "MySQL", "PostgreSQL"] },
          { name: "Strumenti e cloud", items: ["Git", "Visual Studio", "Docker (base)", "AWS (base)"] },
          { name: "IT e sistemi", items: ["Sicurezza dei sistemi", "Installazione HW e SW", "Configurazione dispositivi", "Assistenza clienti"] }
        ]
      },
      education: {
        title: "Formazione e lingue",
        items: [
          { period: "2023 – 2025", degree: "Laurea triennale in Ingegneria Informatica", school: "Università Mercatorum · Roma, Italia" },
          { period: "2017 – 2022", degree: "Diploma di scuola superiore", school: "ITT Enrico Fermi · Lecce, Italia" }
        ],
        spoken: [
          { name: "Italiano", level: "Madrelingua", percent: 100 },
          { name: "Inglese", level: "B2", percent: 70 },
          { name: "Francese", level: "A2", percent: 35 },
          { name: "Giapponese", level: "Livello N4 · in studio", percent: 35 }
        ]
      },
      contact: {
        title: "Lavoriamo insieme",
        text: "Sto cercando il mio prossimo ruolo come sviluppatore software. Se hai un'opportunità da propormi o vuoi semplicemente salutarmi, scrivimi pure.",
        emailLabel: "Gmail",
        emailHint: "Inviami un'email",
        linkedinLabel: "LinkedIn",
        githubLabel: "GitHub"
      }
    },

    /* ------------------------------------------------------------
     *  日本語 (JAPANESE)
     * ------------------------------------------------------------ */
    ja: {
      label: "日本語",
      htmlLang: "ja",
      meta: {
        title: "Enrico Rampino | ソフトウェア開発者",
        description: "コンピュータ工学を専攻し、.NET / C# のソフトウェア開発者として活動するエンリコ・ランピーノのポートフォリオ。横浜在住。"
      },
      ui: {
        skipLink: "本文へスキップ",
        openMenu: "メニューを開く",
        closeMenu: "メニューを閉じる",
        toggleTheme: "ダークモードの切り替え",
        language: "言語",
        backToTop: "トップへ戻る ↑",
        nav: {
          about: "自己紹介",
          experience: "職歴",
          projects: "プロジェクト",
          skills: "スキル",
          education: "学歴",
          contact: "連絡先"
        }
      },
      hero: {
        greeting: "はじめまして。",
        nameReading: "エンリコ・ランピーノ",
        role: "ソフトウェア開発者",
        roleTech: ".NET & C#",
        roles: ["ソフトウェア開発者", ".NET / C# エンジニア", "バックエンド開発", "課題解決が得意です"],
        lead: "コンピュータ工学の学位を取得し、約2年間、業務用ソフトウェアの開発・保守に携わってきました。安全なデータ転送からリアルタイム監視システムまで、幅広く担当しています。",
        location: "日本・横浜",
        status: "新しい機会を探しています",
        ctaPrimary: "お問い合わせ",
        ctaSecondary: "プロジェクトを見る"
      },
      about: {
        title: "自己紹介",
        paragraphs: [
          "コンピュータ工学を専攻して大学を卒業しました。大学での学びと .NET 開発者としての経験で培ったスキルを活かし、さらに成長していきたいと考えています。",
          "責任感を持って主体的に行動し、細部まで丁寧に仕事に取り組みます。チームでの協力や建設的な議論を大切にしており、問題解決を得意としています。"
        ],
        stats: [
          { value: "2+", label: "年のソフトウェア開発経験" },
          { value: "6", label: "件のプロジェクト（リリース・試作）" },
          { value: "4", label: "か国語を話せます" }
        ]
      },
      experience: {
        title: "職歴",
        items: [
          {
            role: "ジュニアソフトウェア開発者",
            company: "N&C",
            period: "2023年9月 – 2025年6月",
            place: "イタリア・ヴェーリエ",
            summary: "技術チームと連携し、.NET アプリケーションの設計・開発・保守を担当。新規システムの開発と既存システムの最適化の両方に携わりました。",
            bullets: [
              "SFTP を用いた安全なデータ転送アプリケーションを改善・堅牢化し、本番環境に導入。",
              "サービスの継続性を重視したアラーム通知・遠隔監視システムを構築。",
              "研修・学習分野を中心に、社内従業員向けプラットフォームを管理・保守。",
              "社内 IT チケット管理システムを開発し、技術サポート業務を効率化。",
              "Google Gemini を活用した AI チャットボット試作のアーキテクチャ設計に参加。"
            ],
            tags: ["C#", ".NET Framework", "ASP.NET MVC", "Entity Framework", "SQL Server", "MQTT", "Gemini AI"]
          },
          {
            role: "ソフトウェア開発インターン",
            company: "N&C",
            period: "2023年3月 – 2023年8月",
            place: "イタリア・ヴェーリエ",
            summary: "",
            bullets: [
              "Infocenter データベースを用いたデータ分析に参加。",
              "業務管理ソフトウェアを開発。",
              "SFTP サーバー経由でデータを転送するソフトウェアを開発。",
              "匿名で報告を送信できるツールを開発。"
            ],
            tags: []
          },
          {
            role: "チューター",
            company: "Centro Studi Vergari",
            period: "2025年1月 – 2025年7月",
            place: "イタリア・トレプッツィ",
            summary: "GOL/2023 職業訓練プログラム3件でチューターを担当：「事務アシスタント」（2期）および「キッチンアシスタント・ホール準備サポート」。",
            bullets: [],
            tags: []
          },
          {
            role: "ボランティア",
            company: "イタリア国家警察協会",
            period: "2021年5月 – 2021年12月",
            place: "イタリア・ブリンディジ",
            summary: "ソーシャルディスタンス対策の実施・確認や入退場の管理を行い、来場者と丁寧にコミュニケーションを取ることで、安全で円滑な運営に貢献しました。",
            bullets: [],
            tags: []
          }
        ]
      },
      projects: {
        title: "主なプロジェクト",
        intro: "N&C 在籍中に手がけたプロジェクトです。社内向けのため、ソースコードは公開していません。",
        items: [
          {
            icon: "lock",
            title: "安全な SFTP データ転送",
            text: "インターン中に開発を始め、その後レビューと最適化を経て本番環境に導入。機密データを扱うための堅牢性・セキュリティ・信頼性を高めました。",
            tags: ["C#", ".NET", "SFTP"]
          },
          {
            icon: "bell",
            title: "アラーム・遠隔監視システム",
            text: "迅速で安定した通信を実現する通知・遠隔監視システム。サービスの継続性と重大イベントへの対応に特に配慮しました。",
            tags: ["C#", "MQTT", "Mosquitto"]
          },
          {
            icon: "ticket",
            title: "IT チケット管理システム",
            text: "サポート依頼の受付・追跡・解決を行う社内ツール。社内の技術サポート業務を効率化しました。",
            tags: ["ASP.NET MVC", "Entity Framework", "SQL Server"]
          },
          {
            icon: "school",
            title: "従業員研修プラットフォーム",
            text: "社内従業員向けプラットフォームを管理・保守し、研修活動のデジタル化を技術面と運用面の両方から支援しました。",
            tags: ["ASP.NET", "SQL Server"]
          },
          {
            icon: "chat",
            title: "AI チャットボット（試作）",
            text: "従業員との対話と社内用語集の管理を目的とした Gemini ベースのチャットボット。アーキテクチャ設計、初期統合、意味解析、UX を担当しました。",
            tags: ["Gemini AI", "NLP", ".NET"]
          },
          {
            icon: "shield",
            title: "匿名報告ツール",
            text: "ユーザーが匿名で報告を送信できるソフトウェア。インターン中に開発しました。",
            tags: ["C#", ".NET"]
          }
        ]
      },
      skills: {
        title: "スキル",
        groups: [
          { name: "プログラミング言語", items: ["C#", "Java", "JavaScript", "Python", "PHP", "C", "C++", "SQL"] },
          { name: "バックエンド・フレームワーク", items: [".NET", "ASP.NET MVC", "Entity Framework", "REST API", "MQTT / Mosquitto"] },
          { name: "フロントエンド", items: ["HTML", "CSS", "Bootstrap", "jQuery", "JSON"] },
          { name: "データベース", items: ["SQL Server", "MySQL", "PostgreSQL"] },
          { name: "ツール・クラウド", items: ["Git", "Visual Studio", "Docker（基礎）", "AWS（基礎）"] },
          { name: "IT・システム", items: ["システムセキュリティ", "ハードウェア・ソフトウェアの導入", "デバイス設定", "カスタマーサポート"] }
        ]
      },
      education: {
        title: "学歴・語学",
        items: [
          { period: "2023 – 2025", degree: "コンピュータ工学 学士", school: "Università Mercatorum · イタリア・ローマ" },
          { period: "2017 – 2022", degree: "高等学校 卒業", school: "ITT Enrico Fermi · イタリア・レッチェ" }
        ],
        spoken: [
          { name: "イタリア語", level: "母語", percent: 100 },
          { name: "英語", level: "B2", percent: 70 },
          { name: "フランス語", level: "A2", percent: 35 },
          { name: "日本語", level: "N4相当・学習中", percent: 35 }
        ]
      },
      contact: {
        title: "一緒に働きませんか",
        text: "ソフトウェア開発者として次のキャリアを探しています。お仕事のご相談はもちろん、ちょっとしたご連絡もお気軽にどうぞ。",
        emailLabel: "Gmail",
        emailHint: "メールを送る",
        linkedinLabel: "LinkedIn",
        githubLabel: "GitHub"
      }
    }
  }
};
