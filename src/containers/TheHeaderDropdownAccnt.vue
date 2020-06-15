<template>
    <CDropdown
            inNav
            class="c-header-nav-items"
            placement="bottom-end"
            add-menu-classes="pt-0"
    >
        <template #toggler>
            <CHeaderNavLink>
                <div class="c-avatar">
                    <img
                            src="img/avatars/6.jpg"
                            class="c-avatar-img "
                    />
                </div>
            </CHeaderNavLink>
        </template>
        <CDropdownHeader tag="div" class="text-center" color="light">
            <strong>Account</strong>
        </CDropdownHeader>
<!--        <CDropdownItem>-->
<!--            <CIcon name="cil-bell"/>-->
<!--            Updates-->
<!--            <CBadge color="info" class="ml-auto">{{ itemsCount }}</CBadge>-->
<!--        </CDropdownItem>-->
<!--        <CDropdownItem>-->
<!--            <CIcon name="cil-envelope-open"/>-->
<!--            Messages-->
<!--            <CBadge color="success" class="ml-auto">{{ itemsCount }}</CBadge>-->
<!--        </CDropdownItem>-->
<!--        <CDropdownItem>-->
<!--            <CIcon name="cil-task"/>-->
<!--            Tasks-->
<!--            <CBadge color="danger" class="ml-auto">{{ itemsCount }}</CBadge>-->
<!--        </CDropdownItem>-->
<!--        <CDropdownItem>-->
<!--            <CIcon name="cil-comment-square"/>-->
<!--            Comments-->
<!--            <CBadge color="warning" class="ml-auto">{{ itemsCount }}</CBadge>-->
<!--        </CDropdownItem>-->
<!--        <CDropdownHeader-->
<!--                tag="div"-->
<!--                class="text-center"-->
<!--                color="light"-->
<!--        >-->
<!--            <strong>Settings</strong>-->
<!--        </CDropdownHeader>-->
<!--        <CDropdownItem>-->
<!--            <CIcon name="cil-user"/>-->
<!--            Profile-->
<!--        </CDropdownItem>-->
<!--        <CDropdownItem>-->
<!--            <CIcon name="cil-settings"/>-->
<!--            Settings-->
<!--        </CDropdownItem>-->
<!--        <CDropdownItem>-->
<!--            <CIcon name="cil-dollar"/>-->
<!--            Payments-->
<!--            <CBadge color="secondary" class="ml-auto">{{ itemsCount }}</CBadge>-->
<!--        </CDropdownItem>-->
<!--        <CDropdownItem>-->
<!--            <CIcon name="cil-file"/>-->
<!--            Projects-->
<!--            <CBadge color="primary" class="ml-auto">{{ itemsCount }}</CBadge>-->
<!--        </CDropdownItem>-->
<!--        <CDropdownDivider/>-->
<!--        <CDropdownItem>-->
<!--            <CIcon name="cil-shield-alt"/>-->
<!--            Lock Account-->
<!--        </CDropdownItem> -->
        <CDropdownItem>
            <CIcon name="cil-lock-locked"/>
            <a href="javascript:void(0)" @click.prevent="logout">Logout</a>
        </CDropdownItem>
    </CDropdown>
</template>

<script>
    export default {
        name: 'TheHeaderDropdownAccnt',
        data() {
            return {
                itemsCount: 42
            }
        },
        methods: {
            logout: function () {
                let that = this;
                axios.get(APP_URL+'/logout').then(response => {
                  window.localStorage.removeItem('token')
                  window.localStorage.removeItem('user')
                  delete axios.defaults.headers.common['Authorization']
                        window.location.reload();
                    }
                ).catch((error) => {
                    location.reload();
                });
            },

        }
    }
</script>

<style scoped>
    .c-icon {
        margin-right: 0.3rem;
    }
</style>
