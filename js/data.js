// Enhanced subjects data with more information
const subjects = [
    {
        id: "dsa",
        name: "Data Structures using C",
        category: "core",
        image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1200&h=900&fit=crop",
        description: "Core data structures using C",
        resources: [
            {
                title: "Recommended Books",
                link: "https://drive.google.com/drive/folders/1DpnqxUG3RliROQkbvgmgGH4pjKXSnH0N?usp=drive_link",
                type: "pdf"
            },
            {
                title: "Important Notes",
                link: "https://drive.google.com/drive/folders/1H84UJD-asG_yyp92Cp5EilD15EbfmzT1?usp=sharing",
                type: "pdf"
            },
            {
                title: "Previous Year Question Papers",
                link: "https://drive.google.com/drive/folders/1Os3IKHidslPqrK_Stq3nKUhvAXBQlSTZ?usp=sharing",
                type: "pdf"
            }
        ]
    },
    {
        id: "oop",
        name: "Object-Oriented Programming",
        category: "core",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&h=900&fit=crop",
        description: "OOP concepts using Java",
        resources: [
            {
                title: "Recommended Books",
                link: "https://drive.google.com/drive/folders/1xMpGh-posiStGnD62NVVbaBLRNWiNXSR?usp=sharing",
                type: "pdf"
            },
            {
                title: "Important Notes",
                link: "https://drive.google.com/drive/folders/1QQQHysvJfzrYTh-8D-v-bUYSA2vjdgsN?usp=sharing",
                type: "pdf"
            },
            {
                title: "Previous Year Question Papers",
                link: "https://drive.google.com/drive/folders/1nai5o7C6PkUo-kokKlzNXF_YOy4v0eC2?usp=sharing",
                type: "pdf"
            }
        ]
    },
    {
        id: "dbms",
        name: "Database Management Systems",
        category: "core",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&h=900&fit=crop",
        description: "Database design, SQL, normalization, and management",
        resources: [
            {
                title: "DBMS Recommended Books",
                link: "https://drive.google.com/drive/folders/1j3pcch4gsofN1N4jTg4vc4cgUfEgbF9X?usp=sharing",
                type: "pdf",
                size: "4.2 MB"
            },
            {
                title: "Important Notes",
                link: "https://drive.google.com/drive/folders/1ctpysi0dsMx9VYN9DiPgH9KTtXHBmpz-?usp=sharing",
                type: "doc",
                size: "1.5 MB"
            },
            {
                title: "Previous Year Question Papers",
                link: "https://drive.google.com/drive/folders/1BCtXF1iMQWsyEGzWvqY9SBRFSds8BIkZ?usp=sharing",
                type: "pdf",
                size: "2.1 MB"
            }
        ]
    },
    {
        id: "os",
        name: "Operating Systems",
        category: "theory",
        image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop",
        description: "Process management, memory, and file systems",
        resources: [
            {
                title: "Recommended Books",
                link: "https://drive.google.com/drive/folders/1fiIAvn1Dq1ESrEMKkbNfZ2bq2r8XDVTF?usp=sharing",
                type: "pdf"
            },
            {
                title: "Important Notes",
                link: "https://drive.google.com/drive/folders/1unYhsqBsp9lMHFlMYTnaIeFK8eohLdks?usp=sharing",
                type: "pdf"
            },
            {
                title: "Previous Year Question Papers",
                link: "https://drive.google.com/drive/folders/1AkgAzKw0QCIENijmxfvhWRTpbdHuT3lE?usp=sharing",
                type: "pdf"
            }
        ]
    },
    {
        id: "coa",
        name: "Computer Organisation & Architechture",
        category: "theory",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=900&fit=crop",
        description: "Memory communication , architecture, and DMA",
        resources: [
            {
                title: "Recommended Books",
                link: "https://drive.google.com/drive/folders/1DL4Zj3DdnPg-7PvwVBNNbA_8ERoNdOaL?usp=sharing",
                type: "pdf"
            },
            {
                title: "Important Notes",
                link: "https://drive.google.com/drive/folders/1R821UMEb7wuRQY4GnvIgpTTAVJ8F8YER?usp=sharing",
                type: "pdf"
            },
            {
                title: "Previous Year Question Papers",
                link: "https://drive.google.com/drive/folders/15m3SK5lfUiyY-GbPj4e3tQUTUP-fis13?usp=sharing",
                type: "pdf"
            }
        ]
    },
    {
        id: "C",
        name: "Programming in C",
        category: "practical",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=900&fit=crop",
        description: "C fundamentals, arrays and structure",
        resources: [
            {
                title: "Recommended Books",
                link: "https://drive.google.com/drive/folders/1mQFma5kfQqAsJ7poVnTk-Ocb_64eP8m7?usp=sharing",
                type: "pdf"
            },
            {
                title: "Important Notes",
                link: "https://drive.google.com/drive/folders/1pBbIFX7ANBwfdoGT-OJesLcvRM80CBqq?usp=sharing",
                type: "pdf"
            },
            {
                title: "Previous Year Question Papers",
                link: "https://drive.google.com/drive/folders/1z7Jn_-ZQF-9dRBaErAjdHqYVJ6hGPpx_?usp=sharing",
                type: "pdf"
            }
        ]
    },
    {
        id: "python",
        name: "Python Programming",
        category: "practical",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1200&h=900&fit=crop",
        description: "Python basics to advanced concepts",
        resources: [
            {
                title: "Recommended Books",
                link: "https://drive.google.com/drive/folders/1BZJuC6MzKBuqidt79b8_yef6K0xGhGC_?usp=sharing",
                type: "pdf"
            },
            {
                title: "Important Notes",
                link: "https://drive.google.com/drive/folders/1pApn_XxZoavr96qM0LY7eD2fXGMb8VLS?usp=sharing",
                type: "pdf"
            },
            {
                title: "Previous Year Question Papers",
                link: "https://drive.google.com/drive/folders/1_ryvCYOe6Kr1EzSgiR9kAbx9Lqm1WdjO?usp=sharing",
                type: "pdf"
            }
        ]
    },
    {
        id: "software",
        name: "Software Engineering",
        category: "theory",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=900&fit=crop",
        description: "Software development lifecycle and methodologies",
        resources: [
            {
                title: "Recommended Books",
                link: "https://drive.google.com/drive/folders/1UzC_AbiaA-BEgJqYnl04RxOU1PGJX3M4?usp=sharing",
                type: "pdf"
            },
            {
                title: "Important Notes",
                link: "https://drive.google.com/drive/folders/1S2qRBhOaBu_Kq0f6HTGY_dZ7jQZ1KWW8?usp=sharing",
                type: "pdf"
            },
            {
                title: "Previous Year Question Papers",
                link: "https://drive.google.com/drive/folders/13ovLQ5o4okDEAqDXJJw8wTyp6B2vulu_?usp=sharing",
                type: "pdf"
            }
        ]
    },
    // NEW SUBJECTS ADDED (line ~202)
    {
        id: "ait",
        name: "ADVANCES IN IT (AIT)",
        category: "theory",
        image: "https://images.unsplash.com/photo-1573495627361-d9b87960b12d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Advanced Information Technology concepts and applications",
        resources: [
            {
                title: "Recommended Books",
                link: "#",
                type: "pdf"
            },
            {
                title: "Important Notes",
                link: "#",
                type: "pdf"
            },
            {
                title: "Previous Year Question Papers",
                link: "https://drive.google.com/drive/folders/1QeGzkuQPhRMNl-e-uM8XK9W9azDO0ykN?usp=sharing",
                type: "pdf"
            }
        ]
    },
    {
        id: "multimedia",
        name: "MULTIMEDIA APPLICATIONS",
        category: "theory",
        image: "https://images.unsplash.com/photo-1671774289826-def53293ba08?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Multimedia systems, graphics, audio and video processing",
        resources: [
            {
                title: "Recommended Books",
                link: "COMING SOON",
                type: "pdf"
            },
            {
                title: "Important Notes",
                link: "COMING SOON",
                type: "pdf"
            },
            {
                title: "Previous Year Question Papers",
                link: "https://drive.google.com/drive/folders/1M1T1yavaq9gi3E724DKzRUFzKDC2-1or?usp=sharing",
                type: "pdf"
            }
        ]
    },
    {
        id: "applied-math-2",
        name: "APPLIED MATHEMATICS -2",
        category: "core",
        image: "https://images.unsplash.com/photo-1676302447092-14a103558511?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Advanced applied mathematics for engineering",
        resources: [
            {
                title: "Recommended Books",
                link: "COMING SOON",
                type: "pdf"
            },
            {
                title: "Important Notes",
                link: "COMING SOON",
                type: "pdf"
            },
            {
                title: "Previous Year Question Papers",
                link: "https://drive.google.com/drive/folders/1RuFArjkHage18uyjxwswvkd2AHRLoiM4?usp=sharing",
                type: "pdf"
            }
        ]
    },
    {
        id: "applied-physics-2",
        name: "APPLIED PHYSICS-2",
        category: "core",
        image: "https://media.istockphoto.com/id/1866121335/photo/physics-and-mathematics.jpg?s=2048x2048&w=is&k=20&c=0e6C6C7zlAoYIBk5Pg6Nxa8ibY8aN0x5ZIMIJN4g0OU=",
        description: "Applied physics concepts for engineering applications",
        resources: [
            {
                title: "Recommended Books",
                link: "COMING SOON",
                type: "pdf"
            },
            {
                title: "Important Notes",
                link: "COMING SOON",
                type: "pdf"
            },
            {
                title: "Previous Year Question Papers",
                link: "https://drive.google.com/drive/folders/1ph6l_rWlpsZt1rnJCWgXr9rlfsDS-HwO?usp=sharing",
                type: "pdf"
            }
        ]
    },
    {
        id: "environmental",
        name: "ENVIRONMENTAL STUDIES AND DISASTER MANAGEMENT",
        category: "theory",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=900&fit=crop",
        description: "Environmental science and disaster management studies",
        resources: [
            {
                title: "Recommended Books",
                link: "COMING SOON",
                type: "pdf"
            },
            {
                title: "Important Notes",
                link: "COMING SOON",
                type: "pdf"
            },
            {
                title: "Previous Year Question Papers",
                link: "https://drive.google.com/drive/folders/1yTF0SlMmwd03zRC0F0tIdMOQngqFGZcl?usp=sharing",
                type: "pdf"
            }
        ]
    },
    {
        id: "eng-graphics",
        name: "ENGINEERING GRAPHICS",
        category: "practical",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
        description: "Engineering drawing and graphics techniques",
        resources: [
            {
                title: "Recommended Books",
                link: "COMING SOON",
                type: "pdf"
            },
            {
                title: "Important Notes",
                link: "COMING SOON",
                type: "pdf"
            },
            {
                title: "Previous Year Question Papers",
                link: "https://drive.google.com/drive/folders/12dmE3M1n245HR57BHTEJfR6mkkoJgYzo?usp=sharing",
                type: "pdf"
            }
        ]
    },
    {
        id: "ae",
        name: "ANALOG ELECTRONICS (AE)",
        category: "theory",
        image: "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Analog electronics circuits and systems",
        resources: [
            {
                title: "Recommended Books",
                link: "COMING SOON",
                type: "pdf"
            },
            {
                title: "Important Notes",
                link: "COMING SOON",
                type: "pdf"
            },
            {
                title: "Previous Year Question Papers",
                link: "https://drive.google.com/drive/folders/1c2B-zJ7uG0L8vICM9IWnEtfR5s_5L_x2?usp=sharing",
                type: "pdf"
            }
        ]
    },
     {
        id: "digital-electronics",
        name: "DIGITAL ELECTRONICS",
        category: "theory",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=900&fit=crop",
        description: "Digital circuits, logic gates, flip-flops, and combinational/sequential systems",
        resources: [
            {
                title: "Recommended Books",
                link: "COMING SOON",
                type: "pdf"
            },
            {
                title: "Important Notes",
                link: "COMING SOON",
                type: "pdf"
            },
            {
                title: "Previous Year Question Papers",
                link: "https://drive.google.com/drive/folders/1jqZbifWwCZTBYBcWNDuD6gFm_9KnmWyJ?usp=sharing",
                type: "pdf"
            }
        ]
    }
];

// Debug log
console.log("Data.js loaded successfully! Subjects count:", subjects.length);
