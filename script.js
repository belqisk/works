document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioGrid = document.getElementById('portfolio-grid');
    const showAllBtn = document.getElementById('show-all-btn');

  // 作品数据 (30个项目)
    const projects = [
        { category: 'graphic', title: 'Brand Identity Project', description: 'A comprehensive brand identity design for a tech startup, including logo, color palette, and brand guidelines.', date: '2023', image: '/Users/kk/Desktop/练习/Portfolio/path/to/graphic-image-1.jpg' },
        { category: '3d', title: 'Product Visualization', description: '3D rendering and animation of a new smartphone model, showcasing its features and design from various angles.', date: '2023', image: '/Users/kk/Desktop/练习/Portfolio/path/to/3d-design-image-1.jpg' },
        { category: 'ui', title: 'Mobile App UI', description: 'User interface design for a fitness tracking mobile application, focusing on intuitive navigation and clean aesthetics.', date: '2023', image: '/Users/kk/Desktop/练习/Portfolio/path/to/ui-design-image-1.jpg' },
        { category: 'graphic', title: 'Event Poster Series', description: 'A series of eye-catching posters designed for a music festival, each representing different genres and artists.', date: '2022', image: '/Users/kk/Desktop/练习/Portfolio/path/to/graphic-image-2.jpg' },
        { category: '3d', title: '3D Character Design', description: 'Creation of a detailed 3D character for an animated short film, including modeling, texturing, and rigging.', date: '2023', image: '/Users/kk/Desktop/练习/Portfolio/path/to/3d-design-image-2.jpg' },
        { category: 'ui', title: 'E-commerce Website Redesign', description: 'Complete overhaul of an e-commerce website UI, focusing on improving user experience and conversion rates.', date: '2022', image: '/Users/kk/Desktop/练习/Portfolio/path/to/ui-design-image-2.jpg' },
        { category: 'graphic', title: 'Social Media Campaign', description: 'Designed a series of graphics for a social media campaign that increased engagement by 50%.', date: '2023', image: '/Users/kk/Desktop/练习/Portfolio/path/to/graphic-image-3.jpg' },
        { category: '3d', title: 'Architectural Visualization', description: '3D visualization of a modern architectural design, showcasing interior and exterior views.', date: '2023', image: '/Users/kk/Desktop/练习/Portfolio/path/to/3d-design-image-3.jpg' },
        { category: 'ui', title: 'Dashboard Design', description: 'UI design for a data analytics dashboard, focusing on usability and data visualization.', date: '2023', image: '/Users/kk/Desktop/练习/Portfolio/path/to/ui-design-image-3.jpg' },
        { category: 'graphic', title: 'Brochure Design', description: 'Designed a tri-fold brochure for a local business, highlighting their services and offerings.', date: '2022', image: '/Users/kk/Desktop/练习/Portfolio/path/to/graphic-image-4.jpg' },
        { category: '3d', title: 'Product Packaging', description: '3D design of product packaging for a new line of organic skincare products.', date: '2023', image: '/Users/kk/Desktop/练习/Portfolio/path/to/3d-design-image-4.jpg' },
        { category: 'ui', title: 'Website Landing Page', description: 'Designed a landing page for a marketing campaign, optimizing for conversions.', date: '2023', image: '/Users/kk/Desktop/练习/Portfolio/path/to/ui-design-image-4.jpg' },
        { category: 'graphic', title: 'Infographic Design', description: 'Created an infographic to visually represent data for a research project.', date: '2022', image: '/Users/kk/Desktop/练习/Portfolio/path/to/graphic-image-5.jpg' },
        { category: '3d', title: '3D Animation', description: 'Produced a 3D animation for a promotional video, showcasing product features.', date: '2023', image: '/Users/kk/Desktop/练习/Portfolio/path/to/3d-design-image-5.jpg' },
        { category: 'ui', title: 'Mobile Game UI', description: 'Designed the user interface for a mobile game, focusing on user engagement and aesthetics.', date: '2023', image: '/Users/kk/Desktop/练习/Portfolio/path/to/ui-design-image-5.jpg' },
        { category: 'graphic', title: 'Event Branding', description: 'Developed branding materials for a large-scale event, including banners and signage.', date: '2022', image: '/Users/kk/Desktop/练习/Portfolio/path/to/graphic-image-6.jpg' },
        { category: '3d', title: 'Virtual Reality Experience', description: 'Designed a virtual reality experience for an educational program, enhancing learning through immersion.', date: '2023', image: '/Users/kk/Desktop/练习/Portfolio/path/to/3d-design-image-6.jpg' },
        { category: 'ui', title: 'E-learning Platform', description: 'UI design for an e-learning platform, focusing on user-friendly navigation and accessibility.', date: '2023', image: '/Users/kk/Desktop/练习/Portfolio/path/to/ui-design-image-6.jpg' },
        { category: 'graphic', title: 'Packaging Design', description: 'Designed packaging for a new beverage product, emphasizing sustainability and aesthetics.', date: '2022', image: '/Users/kk/Desktop/练习/Portfolio/path/to/graphic-image-7.jpg' },
        { category: '3d', title: '3D Product Model', description: 'Created a detailed 3D model of a consumer electronics product for marketing purposes.', date: '2023', image: '/Users/kk/Desktop/练习/Portfolio/path/to/3d-design-image-7.jpg' },
        { category: 'ui', title: 'Fitness App UI', description: 'Designed the user interface for a fitness tracking app, focusing on user engagement and functionality.', date: '2023', image: '/Users/kk/Desktop/练习/Portfolio/path/to/ui-design-image-7.jpg' },
        { category: 'graphic', title: 'Corporate Identity', description: 'Developed a complete corporate identity package for a startup, including logo, business cards, and letterhead.', date: '2022', image: '/Users/kk/Desktop/练习/Portfolio/path/to/graphic-image-8.jpg' },
        { category: '3d', title: '3D Game Asset', description: 'Created 3D assets for a video game, including characters and environments.', date: '2023', image: '/Users/kk/Desktop/练习/Portfolio/path/to/3d-design-image-8.jpg' },
        { category: 'ui', title: 'Travel App UI', description: 'Designed the user interface for a travel planning app, focusing on ease of use and visual appeal.', date: '2023', image: '/Users/kk/Desktop/练习/Portfolio/path/to/ui-design-image-8.jpg' },
        { category: 'graphic', title: 'Social Media Graphics', description: 'Created a series of graphics for social media campaigns, increasing engagement and reach.', date: '2022', image: '/Users/kk/Desktop/练习/Portfolio/path/to/graphic-image-9.jpg' },
        { category: '3d', title: '3D Visualization for Architecture', description: 'Produced 3D visualizations for architectural projects, helping clients visualize designs.', date: '2023', image: '/Users/kk/Desktop/练习/Portfolio/path/to/3d-design-image-9.jpg' },
        { category: 'ui', title: 'E-commerce Mobile App', description: 'Designed the UI for an e-commerce mobile app, focusing on user experience and conversion rates.', date: '2023', image: '/Users/kk/Desktop/练习/Portfolio/path/to/ui-design-image-9.jpg' },
        { category: 'graphic', title: 'Promotional Materials', description: 'Designed promotional materials for a local event, including flyers and posters.', date: '2022', image: '/Users/kk/Desktop/练习/Portfolio/path/to/graphic-image-10.jpg' },
        { category: '3d', title: '3D Animation for Marketing', description: 'Created a 3D animation for a marketing campaign, showcasing product features and benefits.', date: '2023', image: '/Users/kk/Desktop/练习/Portfolio/path/to/3d-design-image-10.jpg' },
    ];

    let currentIndex = 0;
    const initialItemsToShow = 6;

    const modal = document.getElementById('project-modal');
    const closeModal = document.getElementsByClassName('close-modal')[0];

    // Experience模态框相关
    const experienceBtn = document.getElementById('experience-btn');
    const experienceModal = document.getElementById('experience-modal');
    const closeExperienceModal = experienceModal.querySelector('.close-modal');

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
            <img src="${project.image}" alt="${project.title}">
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
            img.src = project.image;
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
        alert('WeChat ID: wxid_jtzy15ikdduq12');
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
