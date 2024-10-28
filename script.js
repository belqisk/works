document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioGrid = document.getElementById('portfolio-grid');
    const showAllBtn = document.getElementById('show-all-btn');

    // 作品数据 (保持30个项目)
    const projects = [
        { category: 'graphic', title: 'Brand Identity Project', description: 'A comprehensive brand identity design for a tech startup, including logo, color palette, and brand guidelines.', date: '2023' },
        { category: '3d', title: 'Product Visualization', description: '3D rendering and animation of a new smartphone model, showcasing its features and design from various angles.', date: '2023' },
        { category: 'ui', title: 'Mobile App UI', description: 'User interface design for a fitness tracking mobile application, focusing on intuitive navigation and clean aesthetics.', date: '2023' },
        { category: 'graphic', title: 'Event Poster Series', description: 'A series of eye-catching posters designed for a music festival, each representing different genres and artists.', date: '2022' },
        { category: '3d', title: '3D Character Design', description: 'Creation of a detailed 3D character for an animated short film, including modeling, texturing, and rigging.', date: '2023' },
        { category: 'ui', title: 'E-commerce Website Redesign', description: 'Complete overhaul of an e-commerce website UI, focusing on improving user experience and conversion rates.', date: '2022' },
        // ... 添加更多项目，直到总数达到30个
    ];

    let currentIndex = 0;
    const initialItemsToShow = 6;

    const modal = document.getElementById('project-modal');
    const closeModal = document.getElementsByClassName('close-modal')[0];

    // Experience模态框相关
    const experienceBtn = document.getElementById('experience-btn');
    const experienceModal = document.getElementById('experience-modal');
    const closeExperienceModal = experienceModal.querySelector('.close-modal');

    // 创建作品项目元素
    function createPortfolioItem(project, index) {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.setAttribute('data-category', project.category);
        
        portfolioItem.innerHTML = `
            <img src="/Users/kk/Desktop/练习/Portfolio/path/to/3d-design-image.jpg" alt="${project.title}">
            <div class="portfolio-item-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-details">
                    <span class="project-category">${project.category.charAt(0).toUpperCase() + project.category.slice(1)} Design</span>
                    <span class="project-date">${project.date}</span>
                </div>
                <a href="#" class="view-project">View Details</a>
            </div>
        `;
        
        const viewProjectBtn = portfolioItem.querySelector('.view-project');
        viewProjectBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showProjectDetails(project);
        });

        setTimeout(() => {
            portfolioItem.classList.add('loaded');
        }, 10);

        return portfolioItem;
    }

    function showProjectDetails(project) {
        document.getElementById('modal-title').textContent = project.title;
        
        // 填充描述
        document.getElementById('modal-description').innerHTML = `
            <p>${project.description}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        `;
        
        // 清空并填充图片画廊
        const galleryContainer = document.getElementById('modal-gallery');
        galleryContainer.innerHTML = '';
        for (let i = 1; i <= 4; i++) {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            
            const img = document.createElement('img');
            img.src = "/Users/kk/Desktop/练习/Portfolio/path/to/3d-design-image.jpg";
            img.alt = `${project.title} - Image ${i}`;
            
            const description = document.createElement('p');
            description.textContent = `This is a detailed description for image ${i}. It explains the specific aspects of the design, the challenges faced, and the solutions implemented.`;
            
            galleryItem.appendChild(img);
            galleryItem.appendChild(description);
            galleryContainer.appendChild(galleryItem);
        }

        // 填充详情
        document.getElementById('modal-details').innerHTML = `
            <p><strong>Category:</strong> ${project.category.charAt(0).toUpperCase() + project.category.slice(1)} Design</p>
            <p><strong>Date:</strong> ${project.date}</p>
            <p><strong>Client:</strong> Example Client</p>
            <p><strong>Tools:</strong> Adobe Photoshop, Illustrator, Sketch</p>
        `;

        modal.style.display = 'block';
    }

    closeModal.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // 加载更多作品
    function loadMoreProjects(count, filter = 'ui') {
        const filteredProjects = projects.filter(project => filter === 'all' || project.category === filter);
        const endIndex = Math.min(currentIndex + count, filteredProjects.length);
        for (let i = currentIndex; i < endIndex; i++) {
            const project = filteredProjects[i];
            const portfolioItem = createPortfolioItem(project, i);
            portfolioGrid.appendChild(portfolioItem);
        }
        currentIndex = endIndex;

        // 如果所有项目都已加载，隐藏"显示全部"按钮
        if (currentIndex >= filteredProjects.length) {
            showAllBtn.style.display = 'none';
        } else {
            showAllBtn.style.display = 'block';
        }
    }

    // 初始加载UI Design项目
    function initialLoad() {
        portfolioGrid.innerHTML = ''; // 清空网格
        currentIndex = 0;
        loadMoreProjects(initialItemsToShow, 'ui');
        
        // 设置UI Design按钮为激活状态
        filterButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('.filter-btn[data-filter="ui"]').classList.add('active');
    }

    // 初始加载
    initialLoad();

    // 显示全部按钮点击事件
    showAllBtn.addEventListener('click', () => {
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        loadMoreProjects(projects.length - currentIndex, activeFilter);
    });

    // 移除滚动加载功能
    // window.addEventListener('scroll', () => { ... });

    // 筛选功能
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            portfolioGrid.innerHTML = ''; // 清空网格
            currentIndex = 0;

            loadMoreProjects(initialItemsToShow, filter);
        });
    });

    // WeChat图标点击事件
    const wechatIcon = document.getElementById('wechat-icon');
    wechatIcon.addEventListener('click', (e) => {
        e.preventDefault();
        alert('WeChat ID: YourWeChatID');
        // 或者你可以在这里添加显示二维码的逻辑
    });

    experienceBtn.addEventListener('click', () => {
        experienceModal.style.display = 'block';
    });

    closeExperienceModal.onclick = function() {
        experienceModal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == experienceModal) {
            experienceModal.style.display = 'none';
        }
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
