document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioGrid = document.getElementById('portfolio-grid');
    const showAllBtn = document.getElementById('show-all-btn');

    // 作品数据 (30个项目)
    const projects = [
        { category: 'graphic', 
          title: 'BGA toys Brand Identity Project', 
          description: 'A comprehensive brand identity design for a tech startup, including logo, color palette, and brand guidelines.', 
          date: '2023', 
          image1: 'path/to/poster1.webp',
          image2: 'path/to/Frame 1142814620.webp',
          image3: 'path/to/Frame 1142814616.webp',
          image4: 'path/to/Frame 1142814617.webp',
          image5: 'path/to/Frame 1142814618.webp'
        },
        { category: 'ui', 
          title: 'GleamDental-lab | Brand Identity | Dental Beauty', 
          description: 'GleamDental-lab is a leading dental laboratory specializing in high-quality, innovative dental solutions. With a focus on precision and craftsmanship, we ensure each restoration is perfectly crafted using the latest technology. Our goal is to restore both function and beauty, enhancing every smile. ', 
          date: '2024', 
          image1: 'path/to/Group 1142814699_5_11zon.webp',
          image2: 'path/to/Group 1142814699_4_11zon.webp', 
          image3: 'path/to/Group 1142814699_3_11zon.webp', 
          image4: 'path/to/Group 1142814699_2_11zon.webp', 
          image5: 'path/to/Group 1142814699_1_11zon.webp' 
        },
        { category: '3d', 
          title: 'Nestlé x Li-Ning Pop-up Store', 
          description: 'At the pop-up, customers can discover exclusive Nestlé products that complement an active lifestyle, alongside Li-Ning is latest athletic gear and apparel designed for peak performance. With its vibrant atmosphere and interactive experiences, this pop-up store invites consumers to engage with both brands in an exciting new way, making it the perfect destination for fitness enthusiasts and brand fans alike.',
          date: '2021', 
          image1: 'path/to/Frame 1142814670.webp',
          image2: 'path/to/Frame 1142814671.webp',
          image3: 'path/to/Frame 1142814672.webp',
          image4: 'path/to/Frame 1142814673.webp',
          image5: 'path/to/Frame 1142814674.webp'
        },
        { category: 'ui', 
          title: 'SMOO Vape Website UI and UX Design', 
          description: 'The SMOO Vape website combines an intuitive, visually appealing design with seamless navigation and user-friendly features, ensuring a smooth, efficient experience across all devices.', 
          date: '2024', 
          image1: 'path/to/Frame 11.webp', 
          image2: 'path/to/Frame 13.webp', 
          image3: 'path/to/Frame 14.webp', 
          image4: 'path/to/Frame 15.webp', 
          image5: 'path/to/Frame 16.webp'
        },
        { category: 'graphic', 
          title: '"Natural Selection" Essential Oil Packaging Design', 
          description: 'The "Natural Selection" Essential Oil line is crafted with care to harness the purest essence of nature. The packaging design reflects our commitment to nature, with eco-friendly materials and minimalist aesthetics that emphasize simplicity and purity.', 
          date: '2022', 
          image1: 'path/to/Frame 1142814621.webp',
          image2: 'path/to/Frame 1142814625.webp', 
          image3: 'path/to/Frame 1142814622.webp', 
          image4: 'path/to/Frame 1142814624.webp', 
          image5: 'path/to/Frame 1142814623.webp' 
        },
        { category: 'ui', 
          title: 'LungiTea APP', 
          description: 'Introducing Lungi Tea, an app crafted for tea enthusiasts who seek to embrace tea as an integral part of their daily lives. Delve into a world of tea by exploring recipes for sipping, brewing, cooking, and creating tea-infused desserts.', 
          date: '2023', 
          image1: 'path/to/8e27e5175563959.64b6c2357f57d.webp', 
          image2: 'path/to/LungiTea - tea recipe app design_1731642191516.webp', 
          image3: 'path/to/LungiTea - tea recipe app design_1731642199340.webp', 
          image4: 'path/to/LungiTea - tea recipe app design_1731642196514.webp', 
          image5: 'path/to/8e27e5175563959.64b6c2357f57d.webp', 
        },
        { category: 'graphic', 
          title: 'Baklava Packaging Box', 
          description: 'The Baklava Packaging Box is designed to showcase the richness and elegance of this beloved Middle Eastern dessert. With its intricate patterns inspired by traditional motifs and golden accents, the box reflects the luxurious taste of the baklava inside. Made with high-quality, food-safe materials, the box keeps the baklava fresh and protected, ensuring that every bite is as crisp and flavorful as when it was first made.', 
          date: '2023', 
          image1: 'path/to/Frame 1142814628.webp', 
          image2: 'path/to/Frame 1142814626.webp', 
          image3: 'path/to/Frame 1142814627.webp', 
          image4: 'path/to/Frame 1142814629.webp', 
          image5: 'path/to/Frame 1142814630.webp', 
        },
        { category: 'ui', 
          title: 'ConnectNow AI Service UI/UX Design', 
          description: 'It aims to integrate multiple communication channels into one unified platform while leveraging the power of AI to enhance service delivery. ', 
          date: '2024', 
          image1: 'path/to/modern-laptop-with-blank-white-screen-isolated-black-background-close-up copy.webp',
          image2: 'path/to/Frame 1142814598.webp', 
          image3: 'path/to/Frame 1142814599.webp', 
          image4: 'path/to/Frame 1142814601.webp', 
          image5: 'path/to/Frame 22.webp'
        },
        { category: 'graphic', 
          title: 'Turkish Black Tea Packaging', 
          description: 'The Turkish Black Tea Packaging is designed to capture the essence of Turkey is rich tea culture. The elegant yet practical design ensures the tea stays fresh, preserving its full-bodied flavor and distinct aroma. Crafted with premium materials, the packaging not only maintains the quality of the tea leaves but also provides an inviting aesthetic that makes it perfect for gifting or enjoying at home. ', 
          date: '2022', 
          image1: 'path/to/Frame 1142814632.webp', 
          image2: 'path/to/Frame 1142814633.webp', 
          image3: 'path/to/Frame 1142814631.webp', 
          image4: 'path/to/Frame 1142814635.webp', 
          image5: 'path/to/Frame 1142814634.webp'
        },
        { category: 'ui', 
          title: 'SQRL-X NFT Web UI/UX Design',
          description: 'The design ensures users have an enjoyable, intuitive, and visually striking experience while interacting with the SQRL-X NFT collection, building excitement and trust in the community.', 
          date: '2024', 
          image1: 'path/to/1231.webp',
          image2: 'path/to/Frame 1142814602.webp', 
          image3: 'path/to/Frame 1142814603.webp', 
          image4: 'path/to/Frame 1142814604.webp', 
          image5: 'path/to/Frame 1142814605.webp' 
        },
        { category: 'graphic', 
          title: 'Perfume Packaging Design', 
          description: 'The Perfume Packaging is designed to embody the essence of luxury and elegance, capturing the unique identity of the fragrance within. With sleek lines and an exquisite combination of colors, textures, and materials, the packaging creates an emotional connection even before the scent is experienced. Each detail, from the shape of the bottle to the typography on the label, is carefully crafted to reflect the personality of the perfume—whether it is bold and sophisticated, fresh and floral, or warm and sensual.',
          date: '2022', 
          image1: 'path/to/Frame 1142814636.webp',
          image2: 'path/to/Frame 1142814637.webp', 
          image3: 'path/to/Frame 1142814638.webp', 
          image4: 'path/to/Frame 1142814639.webp', 
          image5: 'path/to/Frame 1142814640.webp' 
        },
        { category: 'ui', 
          title: '"Ask Confucius" AI Q&A Website UI/UX Design', 
          description: 'Delivering an interactive, intuitive, and engaging experience for users seeking wisdom and answers from Confucius digital representation. ', 
          date: '2024', 
          image1: 'path/to/16_9.webp',
          image2: 'path/to/Frame 1142814606.webp', 
          image3: 'path/to/Frame 1142814607.webp', 
          image4: 'path/to/Frame 1142814608.webp', 
          image5: 'path/to/Frame 1142814609.webp'  
        },
        { category: 'graphic', 
          title: '79º Perfume Packaging', 
          description: 'The 79º Perfume Packaging is inspired by the sophisticated elegance of nature’s raw beauty. The design embodies a balance of simplicity and refinement, with a minimalistic bottle that features clean lines and a frosted finish, evoking a sense of purity and freshness. ', 
          date: '2022', 
          image1: 'path/to/Frame 1142814642.webp',
          image2: 'path/to/Frame 1142814642.webp', 
          image3: 'path/to/Frame 1142814641.webp', 
          image4: 'path/to/Frame 1142814644.webp', 
          image5: 'path/to/Frame 1142814645.webp' 
        },
        { category: 'ui', 
          title: 'Smart Home App', 
          description: 'The Smart Home App is designed to give you complete control over your home is connected devices, all from the convenience of your smartphone or tablet. With an intuitive interface, you can easily manage lighting, security cameras, thermostats, and more, creating a comfortable and secure living environment. Customize scenes to adjust settings with a single tap or set schedules that automate tasks, like turning off lights when you leave or adjusting the temperature before you get home.', 
          date: '2023', 
          image1: 'path/to/Frame 1142814614.webp',
          image2: 'path/to/Frame 1142814611.webp', 
          image3: 'path/to/Frame 1142814613.webp', 
          image4: 'path/to/Frame 1142814612.webp', 
          image5: 'path/to/Frame 1142814615.webp'
        },
        { category: 'graphic', 
          title: 'Land Rover "Unstoppable Discovery" Test Drive', 
          description: 'The "Unstoppable Discovery" Test Drive by Land Rover China is an immersive driving experience designed to showcase the exceptional capabilities of Land Rover vehicles. Participants are invited to journey through diverse terrains, from rugged mountain trails to serene countryside roads, experiencing firsthand the power, versatility, and luxury that define Land Rover.',
          date: '2019', 
          image1: 'path/to/Frame 1142814646.webp',
          image2: 'path/to/Frame 1142814647.webp', 
          image3: 'path/to/Frame 1142814648.webp', 
          image4: 'path/to/Frame 1142814649.webp', 
          image5: 'path/to/Frame 1142814650.webp'
        },
        { category: 'graphic', 
          title: 'Land Rover ATRS Experience Camp', 
          description: 'The Land Rover ATRS (All-Terrain Response System) Experience Camp is a dynamic event crafted to allow participants to explore the full potential of Land Rover is advanced all-terrain technology. Participants will experience firsthand how Land Rover is ATRS adapts to a variety of surfaces—whether it is gravel, sand, mud, or snow—ensuring a smooth and confident drive in any environment. The camp offers a blend of thrilling off-road adventures, practical learning sessions, and the chance to push the limits of capability in a safe and controlled setting. With Land Rover is experienced instructors by your side, the ATRS Experience Camp empowers you to master the toughest driving challenges and gain a deeper appreciation for the remarkable engineering behind every Land Rover.', 
          date: '2019', 
          image1: 'path/to/Frame 1142814651.webp',
          image2: 'path/to/Frame 1142814652.webp', 
          image3: 'path/to/Frame 1142814653.webp', 
          image4: 'path/to/Frame 1142814651.webp', 
          image5: 'path/to/Frame 1142814654.webp'
        },
        { category: 'graphic', 
          title: 'Land Rover ATRS Experience Camp', 
          description: 'The Land Rover ATRS (All-Terrain Response System) Experience Camp is a dynamic event crafted to allow participants to explore the full potential of Land Rover is advanced all-terrain technology. Participants will experience firsthand how Land Rover is ATRS adapts to a variety of surfaces—whether it is gravel, sand, mud, or snow—ensuring a smooth and confident drive in any environment. The camp offers a blend of thrilling off-road adventures, practical learning sessions, and the chance to push the limits of capability in a safe and controlled setting. ', 
          date: '2019', 
          image1: 'path/to/Frame 1142814655.webp',
          image2: 'path/to/Frame 1142814656.webp', 
          image3: 'path/to/Frame 1142814657.webp', 
          image4: 'path/to/Frame 1142814658.webp', 
          image5: 'path/to/Frame 1142814659.webp'
        },
        { category: 'graphic', 
          title: 'Chevrolet Orlando', 
          description: 'The Chevrolet Orlando Test Drive offers a hands-on experience of the dynamic performance and versatility of this compact MPV. You will discover that Orlando has impressive handling, advanced safety features, and efficient fuel economy.', 
          date: '2019', 
          image1: 'path/to/Frame 1142814660.webp',
          image2: 'path/to/Frame 1142814661.webp', 
          image3: 'path/to/Frame 1142814662.webp', 
          image4: 'path/to/Frame 1142814663.webp', 
          image5: 'path/to/Frame 1142814664.webp'
        },
        { category: '3d', 
          title: 'Chevrolet "Feel the Thrill" Experience Event', 
          description: 'Feel the thrill of driving a Chevrolet like never before—unleash the power, style, and excitement that define the brand at the Chevrolet "Feel the Thrill" Experience Event.', 
          date: '2019', 
          image1: 'path/to/Frame 1142814665.webp',
          image2: 'path/to/Frame 1142814666.webp', 
          image3: 'path/to/Frame 1142814667.webp', 
          image4: 'path/to/Frame 1142814668.webp', 
          image5: 'path/to/Frame 1142814669.webp'
        },
    ];

    let currentIndex = 0;
    const initialItemsToShow = 34;

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
            <img src="${project.image1}" alt="${project.title}">
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
            <p></p>
        `;
        
// 填充图片画廊
const galleryContainer = document.getElementById('modal-gallery');
galleryContainer.innerHTML = '';

// 假设项目对象有 image1, image2, image3, image4, image5 这四个属性
const images = [project.image1, project.image2, project.image3, project.image4, project.image5];
const descriptions = [
    `This is detailed view of the final products, showcasing important features.`,
];

for (let i = 0; i < images.length; i++) {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';

    const img = document.createElement('img');
    img.src = images[i];
    img.alt = `${project.title} - Image ${i + 1}`;

    const description = document.createElement('p');
    description.textContent = descriptions[i];

    galleryItem.appendChild(img);
    galleryItem.appendChild(description);
    galleryContainer.appendChild(galleryItem);
}


        // 填充详情
        document.getElementById('modal-details').innerHTML = `
            <p><strong>Category:</strong> ${project.category.charAt(0).toUpperCase() + project.category.slice(1)} Design</p>
            <p><strong>Date:</strong> ${project.date}</p>
            <p><strong>Tools:</strong> Adobe Photoshop, Illustrator, Figma, Cinema 4D</p>
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
    function loadMoreProjects(count, filter = 'all') {
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
