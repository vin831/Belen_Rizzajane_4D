        const menuButton = document.getElementById('mobile-menu');
        const navigation = document.getElementById('nav-links');
        const navigationLinks = navigation.querySelectorAll('a');

        function closeMenu() {
            navigation.classList.remove('open');
            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.setAttribute('aria-label', 'Open navigation menu');
        }

        menuButton.addEventListener('click', () => {
            const isOpen = navigation.classList.toggle('open');
            menuButton.setAttribute('aria-expanded', String(isOpen));
            menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
        });

        navigationLinks.forEach((link) => {
            link.addEventListener('click', () => {
                navigationLinks.forEach((item) => item.classList.remove('active'));
                link.classList.add('active');
                closeMenu();
            });
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') closeMenu();
        });
