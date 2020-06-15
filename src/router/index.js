import Vue from 'vue'
import Router from 'vue-router'

/******************Admin Routes Import********************************/


// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/admin/Dashboard')
const Login = () => import('@/views/admin/Login')
const Works = () => import('@/views/admin/Works')
const ClaimedWorks = () => import('@/views/admin/ClaimWorks')
const Contact = () => import('@/views/admin/ContactUs')
const HomepageCMS = () => import('@/views/admin/HomepageCMS')
const Blogs = () => import('@/views/admin/Blogs')
const Faqs = () => import('@/views/admin/Faqs')
const Careers = () => import('@/views/admin/Careers')
const PrivacyPolicy = () => import('@/views/admin/PrivacyPolicy')
const TermsConditions = () => import('@/views/admin/TermsConditions')
const Categories = () => import('@/views/admin/Categories')
const HomepageSlider1 = () => import('@/views/admin/HomepageSlider1')
const HomepageSlider2 = () => import('@/views/admin/HomepageSlider2')
const OnlineServices = () => import('@/views/admin/OnlineServices')
const OfflineServices = () => import('@/views/admin/OfflineServices')
const SubCategories = () => import('@/views/admin/SubCategories')
const SubCategoriesVideo = () => import('@/views/admin/SubCategoriesVideo')
const WorkDetails = () => import('@/views/admin/WorkDetails')
const Users = () => import('@/views/admin/Users')
const UserPayments = () => import('@/views/admin/UserPayments')
const DebitRequests = () => import('@/views/admin/DebitRequests')
const FollowupNotifications = () => import('@/views/admin/FollowupNotifications')
const Packages = () => import('@/views/admin/Packages')
const PackageRequest = () => import('@/views/admin/PackageRequest')
const AllWorkPackages = () => import('@/views/admin/AllWorkPackages')
const AddPackage = () => import('@/views/admin/AddPackage')
const UpdatePackage = () => import('@/views/admin/UpdatePackage')
const Charts = () => import('@/views/charts/Charts')
const Widgets = () => import('@/views/widgets/Widgets')

Vue.use(Router)

const router = new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'active',
    scrollBehavior: () => ({y: 0}),
    routes: configRoutes()
})

router.beforeEach((to, from, next) => {
    if (to.fullPath !== "/login" && to.fullPath !== "/register") {
        //axios.get('/api/profile').then(response => {

        if (!window.localStorage.getItem('token')) {
            router.push('/login');
        } else {
            next();
        }
        // }).catch(error => {
        //   router.push('/login');
        // })
    } else {
        next();
    }
})

function configRoutes() {
    return [

        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/',
            redirect: '/dashboard',
            name: 'Admin Dashboard',
            component: TheContainer,
            children: [
                {
                    path: '/dashboard',
                    name: 'Dashboard',
                    component: Dashboard
                },
                {
                    path: '/terms-and-conditions',
                    name: 'TermsConditions',
                    component: TermsConditions
                },
                {
                    path: '/privacy-and-cookie-policy',
                    name: 'PrivacyPolicy',
                    component: PrivacyPolicy
                },
                {
                    path: '/contact-us',
                    name: 'ContactUs',
                    component: Contact
                },
                {
                    path: '/homepage-cms',
                    name: 'HomepageCMS',
                    component: HomepageCMS
                },
                {
                    path: '/homepage-slider-1',
                    name: 'HomepageSlider1',
                    component: HomepageSlider1
                },
                {
                    path: '/homepage-slider-2',
                    name: 'HomepageSlider2',
                    component: HomepageSlider2
                },
                {
                    path: '/online-services',
                    name: 'OnlineServices',
                    component: OnlineServices
                },
                {
                    path: '/offline-services',
                    name: 'OfflineServices',
                    component: OfflineServices
                },
                {
                    path: '/subCategories',
                    name: 'SubCategories',
                    component: SubCategories
                },
                {
                    path: '/subcategory/:id',
                    name: 'SubCategoriesVideo',
                    component: SubCategoriesVideo
                },
                {
                    path: '/categories',
                    name: 'Categories',
                    component: Categories
                },
                {
                    path: '/blogs',
                    name: 'Blogs',
                    component: Blogs
                },
                {
                    path: '/careers',
                    name: 'Careers',
                    component: Careers
                },
                {
                    path: '/Faqs',
                    name: 'Faqs',
                    component: Faqs
                },
                {
                    path: '/works',
                    name: 'Works',
                    component: Works
                },
             {
                    path: '/claimed-works',
                    name: 'ClaimedWorks',
                    component: ClaimedWorks
                },
                {
                    path: '/work/:id',
                    name: 'Work Details',
                    component: WorkDetails
                },
                {
                    path: '/users',
                    name: 'Users',
                    component: Users
                },
                {
                    path: '/user/payments/:id',
                    name: 'User Payments',
                    component: UserPayments
                },
                {
                    path: '/user/works/:id',
                    name: 'User Works',
                    component: Works
                },
             {
                    path: '/user/claimed-works/:id',
                    name: 'User Claimed Works',
                    component: ClaimedWorks
                },
                {
                    path: '/packages',
                    name: 'Packages',
                    component: Packages
                },
                {
                    path: '/package-requests',
                    name: 'PackageRequest',
                    component: PackageRequest
                },
                {
                    path: '/all-work-packages',
                    name: 'AllWorkPackages',
                    component: AllWorkPackages
                },
                {
                    path: '/add-package',
                    name: 'AddPackage',
                    component: AddPackage
                },

                {
                    path: '/update-package/:id',
                    name: 'UpdatePackage',
                    component: UpdatePackage
                },

                {
                    path: '/debit-requests',
                    name: 'Debit Requests',
                    component: DebitRequests
                },
                {
                    path: '/followup-notifications',
                    name: 'Followup Notifications',
                    component: FollowupNotifications
                },

                {
                    path: 'charts',
                    name: 'Charts',
                    component: Charts
                },
                {
                    path: 'widgets',
                    name: 'Widgets',
                    component: Widgets
                },
            ]
        },
    ]
}

export default router
