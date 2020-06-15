export default [
    {
        _name: 'CSidebarNav',
        _children: [
            {
                _name: 'CSidebarNavItem',
                name: 'Dashboard',
                to: '/dashboard',
                icon: 'cil-speedometer',

                // badge: {
                //   color: 'primary',
                //   text: 'NEW'
                // }
            },
            {
                _name: 'CSidebarNavDropdown',
                name: 'Homepage CMS',
                to: '/homepage-cms',
                icon: 'cil-speedometer',
                items: [
                    {
                        name: 'Homepage CMS',
                        to: '/homepage-cms',
                        icon: 'cil-speedometer',
                    },
                    // {
                    //     name: 'Online Services',
                    //     to: '/online-services',
                    //     icon: 'cil-speedometer',
                    // },
                    // {
                    //     name: 'Offline Services',
                    //     to: '/offline-services',
                    //     icon: 'cil-speedometer',
                    // },
                    {
                        name: 'Homepage Slider 1',
                        to: '/homepage-slider-1',
                        icon: 'cil-speedometer',
                    },
                    {
                        name: 'Homepage Slider 2',
                        to: '/homepage-slider-2',
                        icon: 'cil-speedometer',
                    },
                ]
            },

            {
                _name: 'CSidebarNavItem',
                name: 'Categories',
                to: '/categories',
                icon: 'cil-speedometer',
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Subcategories',
                to: '/subcategories',
                icon: 'cil-speedometer',
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Works',
                to: '/works',
                icon: 'cil-speedometer',
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Claimed Works',
                to: '/claimed-works',
                icon: 'cil-speedometer',
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Users',
                to: '/users',
                icon: 'cil-user',
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Packages',
                to: '/packages',
                icon: 'cil-speedometer',
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Package Request',
                to: '/package-requests',
                icon: 'cil-speedometer',
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Debit Requests',
                to: '/debit-requests',
                icon: 'cil-speedometer',
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Followup Notifications',
                to: '/followup-notifications',
                icon: 'cil-speedometer',
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Contact Us Data',
                to: '/contact-us',
                icon: 'cil-speedometer',
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Blogs',
                to: '/blogs',
                icon: 'cil-speedometer',
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Terms and Conditions',
                to: '/terms-and-conditions',
                icon: 'cil-speedometer',
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Privacy and Cookie Policy',
                to: '/privacy-and-cookie-policy',
                icon: 'cil-speedometer',
            },
            {
                _name: 'CSidebarNavItem',
                name: 'FAQs',
                to: '/faqs',
                icon: 'cil-speedometer',
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Careers',
                to: '/careers',
                icon: 'cil-speedometer',
            },

        ]
    }
]
