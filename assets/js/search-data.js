// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications by Haiwen Huang in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "Latest updates and announcements.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses taught at University of Tübingen.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-research-with-ai-not-by-ai",
        
          title: 'Research With AI, Not By AI <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "A proposal for how the relationship should actually work.",
        section: "Posts",
        handler: () => {
          
            window.open("https://forhumandignity.substack.com/p/research-with-ai-not-by-ai", "_blank");
          
        },
      },{id: "post-why-i-39-m-moving-into-social-simulation",
        
          title: 'Why I&#39;m Moving into Social Simulation <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "When curiosity alone stopped being enough",
        section: "Posts",
        handler: () => {
          
            window.open("https://substack.com/@forabetterworld/p-189635537", "_blank");
          
        },
      },{id: "news-renovate-is-accepted-to-neurips-2024",
          title: 'RENOVATE is accepted to NeurIPS 2024!',
          description: "",
          section: "News",},{id: "news-i-will-be-starting-an-internship-at-google-zurich-from-july-2025",
          title: 'I will be starting an internship at Google Zurich from July 2025.',
          description: "",
          section: "News",},{id: "news-loftup-is-accepted-to-iccv-2025",
          title: 'LoftUp is accepted to ICCV 2025!',
          description: "",
          section: "News",},{id: "news-loftup-is-selected-as-an-oral-presentation-at-iccv-2025",
          title: 'LoftUp is selected as an oral presentation at ICCV 2025!',
          description: "",
          section: "News",},{id: "news-our-follow-up-work-on-feature-upsampling-for-interactive-segmentation-got-selected-as-an-oral-presentation-at-the-ilr-g-workshop-at-iccv-2025",
          title: 'Our follow-up work on feature upsampling for interactive segmentation got selected as an...',
          description: "",
          section: "News",},{id: "news-i-will-be-joining-prof-moritz-hardt-s-group-at-the-max-planck-institute-for-intelligent-systems-mpi-is-in-tübingen-starting-mid-2026",
          title: 'I will be joining Prof. Moritz Hardt’s group at the Max Planck Institute...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6E%64%72%65%68%75%61%6E%67%30@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=9LJzK7gAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/andrehuang", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/HaiwenHuang_", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_HaiwenHuang.pdf", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
